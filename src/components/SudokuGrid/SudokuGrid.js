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
    if ( parseInt(e.target.value) > 0 && parseInt(e.target.value) < 10 ) {
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
    if ( sudokuChecker(this.state.gridObj) ) {
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

  render() {
    const { initialGrid, gridObj, isChecked, isCorrect } = this.state;
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
            <tr>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='A1' value={gridObj.A1} disabled={initialGrid.A1 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.A1 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='A2' value={gridObj.A2} disabled={initialGrid.A2 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.A2 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='A3' value={gridObj.A3} disabled={initialGrid.A3 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.A3 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='A4' value={gridObj.A4} disabled={initialGrid.A4 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.A4 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='A5' value={gridObj.A5} disabled={initialGrid.A5 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.A5 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='A6' value={gridObj.A6} disabled={initialGrid.A6 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.A6 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='A7' value={gridObj.A7} disabled={initialGrid.A7 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.A7 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='A8' value={gridObj.A8} disabled={initialGrid.A8 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.A8 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='A9' value={gridObj.A9} disabled={initialGrid.A9 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.A9 === '' ? {color: 'black'} : {} }/></td>
            </tr>
            <tr>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='B1' value={gridObj.B1} disabled={initialGrid.B1 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.B1 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='B2' value={gridObj.B2} disabled={initialGrid.B2 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.B2 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='B3' value={gridObj.B3} disabled={initialGrid.B3 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.B3 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='B4' value={gridObj.B4} disabled={initialGrid.B4 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.B4 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='B5' value={gridObj.B5} disabled={initialGrid.B5 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.B5 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='B6' value={gridObj.B6} disabled={initialGrid.B6 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.B6 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='B7' value={gridObj.B7} disabled={initialGrid.B7 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.B7 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='B8' value={gridObj.B8} disabled={initialGrid.B8 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.B8 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='B9' value={gridObj.B9} disabled={initialGrid.B9 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.B9 === '' ? {color: 'black'} : {} }/></td>
            </tr>
            <tr>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='C1' value={gridObj.C1} disabled={initialGrid.C1 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.C1 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='C2' value={gridObj.C2} disabled={initialGrid.C2 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.C2 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='C3' value={gridObj.C3} disabled={initialGrid.C3 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.C3 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='C4' value={gridObj.C4} disabled={initialGrid.C4 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.C4 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='C5' value={gridObj.C5} disabled={initialGrid.C5 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.C5 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='C6' value={gridObj.C6} disabled={initialGrid.C6 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.C6 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='C7' value={gridObj.C7} disabled={initialGrid.C7 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.C7 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='C8' value={gridObj.C8} disabled={initialGrid.C8 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.C8 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='C9' value={gridObj.C9} disabled={initialGrid.C9 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.C9 === '' ? {color: 'black'} : {} }/></td>
            </tr>
            <tr>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='D1' value={gridObj.D1} disabled={initialGrid.D1 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.D1 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='D2' value={gridObj.D2} disabled={initialGrid.D2 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.D2 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='D3' value={gridObj.D3} disabled={initialGrid.D3 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.D3 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='D4' value={gridObj.D4} disabled={initialGrid.D4 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.D4 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='D5' value={gridObj.D5} disabled={initialGrid.D5 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.D5 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='D6' value={gridObj.D6} disabled={initialGrid.D6 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.D6 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='D7' value={gridObj.D7} disabled={initialGrid.D7 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.D7 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='D8' value={gridObj.D8} disabled={initialGrid.D8 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.D8 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='D9' value={gridObj.D9} disabled={initialGrid.D9 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.D9 === '' ? {color: 'black'} : {} }/></td>
            </tr>
            <tr>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='E1' value={gridObj.E1} disabled={initialGrid.E1 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.E1 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='E2' value={gridObj.E2} disabled={initialGrid.E2 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.E2 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='E3' value={gridObj.E3} disabled={initialGrid.E3 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.E3 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='E4' value={gridObj.E4} disabled={initialGrid.E4 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.E4 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='E5' value={gridObj.E5} disabled={initialGrid.E5 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.E5 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='E6' value={gridObj.E6} disabled={initialGrid.E6 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.E6 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='E7' value={gridObj.E7} disabled={initialGrid.E7 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.E7 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='E8' value={gridObj.E8} disabled={initialGrid.E8 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.E8 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='E9' value={gridObj.E9} disabled={initialGrid.E9 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.E9 === '' ? {color: 'black'} : {} }/></td>
            </tr>
            <tr>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='F1' value={gridObj.F1} disabled={initialGrid.F1 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.F1 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='F2' value={gridObj.F2} disabled={initialGrid.F2 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.F2 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='F3' value={gridObj.F3} disabled={initialGrid.F3 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.F3 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='F4' value={gridObj.F4} disabled={initialGrid.F4 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.F4 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='F5' value={gridObj.F5} disabled={initialGrid.F5 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.F5 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='F6' value={gridObj.F6} disabled={initialGrid.F6 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.F6 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='F7' value={gridObj.F7} disabled={initialGrid.F7 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.F7 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='F8' value={gridObj.F8} disabled={initialGrid.F8 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.F8 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='F9' value={gridObj.F9} disabled={initialGrid.F9 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.F9 === '' ? {color: 'black'} : {} }/></td>
            </tr>
            <tr>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='G1' value={gridObj.G1} disabled={initialGrid.G1 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.G1 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='G2' value={gridObj.G2} disabled={initialGrid.G2 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.G2 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='G3' value={gridObj.G3} disabled={initialGrid.G3 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.G3 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='G4' value={gridObj.G4} disabled={initialGrid.G4 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.G4 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='G5' value={gridObj.G5} disabled={initialGrid.G5 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.G5 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='G6' value={gridObj.G6} disabled={initialGrid.G6 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.G6 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='G7' value={gridObj.G7} disabled={initialGrid.G7 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.G7 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='G8' value={gridObj.G8} disabled={initialGrid.G8 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.G8 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='G9' value={gridObj.G9} disabled={initialGrid.G9 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.G9 === '' ? {color: 'black'} : {} }/></td>
            </tr>
            <tr>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='H1' value={gridObj.H1} disabled={initialGrid.H1 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.H1 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='H2' value={gridObj.H2} disabled={initialGrid.H2 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.H2 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='H3' value={gridObj.H3} disabled={initialGrid.H3 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.H3 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='H4' value={gridObj.H4} disabled={initialGrid.H4 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.H4 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='H5' value={gridObj.H5} disabled={initialGrid.H5 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.H5 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='H6' value={gridObj.H6} disabled={initialGrid.H6 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.H6 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='H7' value={gridObj.H7} disabled={initialGrid.H7 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.H7 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='H8' value={gridObj.H8} disabled={initialGrid.H8 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.H8 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='H9' value={gridObj.H9} disabled={initialGrid.H9 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.H9 === '' ? {color: 'black'} : {} }/></td>
            </tr>
            <tr>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='I1' value={gridObj.I1} disabled={initialGrid.I1 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.I1 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='I2' value={gridObj.I2} disabled={initialGrid.I2 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.I2 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='I3' value={gridObj.I3} disabled={initialGrid.I3 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.I3 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='I4' value={gridObj.I4} disabled={initialGrid.I4 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.I4 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='I5' value={gridObj.I5} disabled={initialGrid.I5 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.I5 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='I6' value={gridObj.I6} disabled={initialGrid.I6 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.I6 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='I7' value={gridObj.I7} disabled={initialGrid.I7 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.I7 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='I8' value={gridObj.I8} disabled={initialGrid.I8 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.I8 === '' ? {color: 'black'} : {} }/></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='I9' value={gridObj.I9} disabled={initialGrid.I9 === '' && this.state.doUpdates ? false : true } maxLength='1' autoComplete='off' style={initialGrid.I9 === '' ? {color: 'black'} : {} }/></td>
            </tr>
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