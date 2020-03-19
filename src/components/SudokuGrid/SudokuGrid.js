import React, { Component } from 'react';
import {gridCreator} from '../../helpers/GridCreator';
import {objectToString} from '../../helpers/ObjectToString';
import { Button } from 'reactstrap';
import './SudokuGrid.css';
import { sudokuChecker } from '../../helpers/SudokuChecker';
import { solveSudoku } from '../../helpers/SudokuSolver';

class SudokuGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sudokuId: this.props.sudoku._id,
      initialGrid: gridCreator(this.props.sudoku.sudoku),
      gridObj: gridCreator(this.props.sudoku.sudoku),
      isChecked: false,
      isCorrect: false,
      doUpdates: true,
      timer: 0,
    };
  }

  componentDidMount = () => {
    if (this.props.historyEntry) {
      const { historyEntry } = this.props;
      this.setState({
        timer: historyEntry.time,
        gridObj: gridCreator(historyEntry.answer)
      })
    }

    this.interval = setInterval( () => {
      if (this.state.doUpdates) {
        this.setState({
          timer: this.state.timer + 1
        });
      }
    }, 1000);
  }
  
  componentWillUnmount = () => {
    clearInterval(this.interval);
  }

  formatTime = time => {
    var minutes = "0" + Math.floor(time / 60);
    var seconds = "0" + (time - minutes * 60);
    return minutes.substr(-2) + ":" + seconds.substr(-2);
  }

  onInputChange = e => {
    if ( ( parseInt(e.target.value) > 0 && parseInt(e.target.value) < 10 ) || e.target.value === '' ) {
      let newState = this.state.gridObj;
      newState[e.target.name] = e.target.value;
      this.setState({ gridObj: newState });
      if ( localStorage.getItem('token') ) {
        let answer = objectToString(this.state.gridObj);
        let sudokuObject = {
          answer,
          time: this.state.timer,
        }
        this.props.onChangeSave(this.state.sudokuId, sudokuObject);
      }
    } else {
      return;
    }
  };

  onCheck = () => {
    if ( sudokuChecker(this.state.gridObj, false) ) {
      this.setState({
        isChecked: true,
        isCorrect: true,
        doUpdates: false,
      })
      if ( localStorage.getItem('token') ) {
        this.props.onChangeSave(this.state.sudokuId, { completed: true });
      }
    } else {
      this.setState({
        isChecked: true,
        isCorrect: false,
      })
    }
    setTimeout( () => {
      this.setState({
        isChecked: false,
        isCorrect: false,
      })
    }, 3900)
  }

  onSolve = () => {
    let solution = solveSudoku(this.state.initialGrid);
    if ( solution ) {
      let newGrid = gridCreator(solution);
      this.setState({
        gridObj: newGrid,
        doUpdates: false
      })
      if ( localStorage.getItem('token') ) {
        let answer = objectToString(newGrid);
        let sudokuObject = {
          answer,
          time: this.state.timer,
          completed: true,
          usedSolve: true
        }
        this.props.onChangeSave(this.state.sudokuId, sudokuObject)
      }
    }
  }

  render() {
    const { initialGrid, gridObj, isChecked, isCorrect } = this.state;
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    const cols = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
      <div className='SudokuGrid'>
        {
          isChecked ? (
            isCorrect ? (
              <div className='SudokuGrid__check correct'>CORRECT</div>
            ) : (
              <div className='SudokuGrid__check incorrect'>INCORRECT</div>
            )
          ) : (
            <span></span>
          )
        }
        <table className='SudokuGrid__table'>
          <tbody>
            {rows.map(row => (
              <tr key={row}>
                {cols.map(col => (
                  <td key={col}>
                    <input onChange={this.onInputChange} type='tel' pattern='\d*' name={`${row+col}`} value={gridObj[row+col]} disabled={initialGrid[row+col] === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid[row+col] === '' ? {color: 'black'} : {} }/>
                  </td>
                ))}
              </tr>
            ))}
            
          </tbody>
        </table>
        <div className='SudokuGrid__controls'>
          <Button onClick={this.onCheck} className='SudokuGrid__controls__button' disabled={isChecked ? true : false}>Check</Button>
          <div className='SudokuGrid__controls__timer'>{this.formatTime(this.state.timer)}</div>
          <Button onClick={this.onSolve} className='SudokuGrid__controls__button'>Solve</Button>
        </div>
      </div>
    )
  }
}

export default SudokuGrid;