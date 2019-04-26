import React, { Component } from "react";
import { connect } from "react-redux";
import SudokuBody from "../components/SudokuBody/SudokuBody";
import { getSudoku, checkSudokuStarted } from "../redux/actions/sudokuActions";
import { getRandomizedSudokuByDifficulty } from "../redux/actions/sudokuActions";
import { Spinner } from 'reactstrap';


class SudokuBodyContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gotNewSudoku: false,
    };
    this.onLoad();
  }

  async onLoad () {
    if (this.props.location.state && !this.props.location.state.historyEntry) {
      await this.returnSudoku(this.props.location.state.sudoku);
      this.setState({
        gotNewSudoku: true
      });
    } 
  }


  async returnSudoku ( sudoku ) {
    if ( localStorage.getItem('token') === null ) {
      await this.props.getSudoku(sudoku._id);
    } else {
      await this.props
        .checkSudokuStarted(sudoku._id)
        .then( async () => {
          if ( this.props.isStarted === false ) {
            await this.props.getSudoku(sudoku._id)
          } else {
            this.props.getRandomizedSudokuByDifficulty(sudoku.difficulty)
              .then ( () => {
                this.returnSudoku(this.props.sudoku);
              })
              .catch( error => {
                console.error(error);
              })
          }
        })
    }
  }

  render() {
    if (this.props.location.state && this.props.location.state.historyEntry) {
      const { sudoku, historyEntry } = this.props.location.state;
      return (
        (sudoku && historyEntry) ? (
          <SudokuBody sudoku={sudoku} fromHistory={true} historyEntry={historyEntry} />
        ) : (
          <div className='SudokuSpinner'>
            <Spinner style={{height: '3rem', width: '3rem'}}/>
          </div>
        )
      );
    } else {
      const {gotNewSudoku} = this.state;
      const {sudoku} = this.props;
      return (
        (sudoku && gotNewSudoku) ? (
          <SudokuBody sudoku={sudoku} />
        ) : (
          <div className='SudokuSpinner'>
            <Spinner style={{height: '3rem', width: '3rem'}}/>
          </div>
        )
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    sudoku: state.getSudokuReducer.sudoku,
    isStarted: state.checkSudokuStartedReducer.isStarted
  };
};

const mapDispatchToProps = {
  getSudoku,
  checkSudokuStarted,
  getRandomizedSudokuByDifficulty
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SudokuBodyContainer);