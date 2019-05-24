import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import SudokuBody from "../components/SudokuBody/SudokuBody";
import { getSudoku, checkSudokuStarted } from "../redux/actions/sudokuActions";
import { getRandomizedSudokuByDifficulty } from "../redux/actions/sudokuActions";
import { Spinner } from 'reactstrap';


export class SudokuBodyContainer extends Component {

  redirectToHome = () => {
    this.props.history.push('/');
  }

  render() {
    if (this.props.location.state && this.props.location.state.historyEntry) {
      const { sudoku, historyEntry } = this.props.location.state;
      return (
        (sudoku && historyEntry) ? (
          <SudokuBody sudoku={sudoku} fromHistory={true} historyEntry={historyEntry} />
        ) : (
          <div className='SudokuError'>
            <Spinner style={{height: '3rem', width: '3rem'}}/>
          </div>
        )
      );
    } else {
      if ( this.props.location.state ) {
        const { sudoku, errorMessage } = this.props.location.state;
        return (
          (sudoku) ? (
            <SudokuBody sudoku={sudoku} />
          ) : ( 
            (errorMessage) ? (
              <div className='SudokuError'>
                <div className='SudokuError__message'>
                  {errorMessage}
                </div>
                <div className='SudokuError__options'>
                  You can continue already started sudokus from <Link to='/history'>history</Link> page or try to <Link to='/'>select other difficulty</Link>!
                </div>
              </div>
            ) : (
              <div className='SudokuError'>
                <Spinner style={{height: '3rem', width: '3rem'}}/>
              </div>
            )
          )
        );
      } else {
        return (
          <div>{this.redirectToHome()}</div>
        )
      }
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