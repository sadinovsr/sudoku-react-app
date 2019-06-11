import React, { Component } from 'react';
import { gridCreator } from '../../helpers/GridCreator';
import { objectToString } from '../../helpers/ObjectToString';
import { sudokuChecker } from '../../helpers/SudokuChecker';
import { Button, Input, InputGroup, InputGroupAddon, Alert } from 'reactstrap';
import SudokuAddApproval from '../SudokuAddApproval/SudokuAddApproval';
import './SudokuAdd.css';

class SudokuAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isApprovalOpen: false,
      errorMessage: null,
      difficulty: 'easy',
      gridObj: gridCreator('000000000000000000000000000000000000000000000000000000000000000000000000000000000'),
    };
  }

  onInputChange = e => {
    if ( ( parseInt(e.target.value) > 0 && parseInt(e.target.value) < 10 ) || e.target.value === '' ) {
      let newState = this.state.gridObj;
      newState[e.target.name] = e.target.value;
      this.setState({ gridObj: newState });
    } else {
      return;
    }
  }

  onDifficultyChange = async e => {
    await this.setState({ [e.target.name]: e.target.value });
  }

  onOpenApproval = () => {
    this.setState({
      isApprovalOpen: true
    })
  }

  onCloseApproval = () => {
    this.setState({
      isApprovalOpen: false
    })
  }

  onSudokuSave = async () => {
    this.setState({
      isApprovalOpen: false,
    })
    const check = await sudokuChecker(this.state.gridObj, true);
    if ( check ) {
      const { difficulty } = this.state;
      const sudoku = objectToString(this.state.gridObj);
      if ( difficulty ) {
        this.props.onSave({
          difficulty,
          sudoku
        })
        this.setState({
          errorMessage: null,
          gridObj: gridCreator('000000000000000000000000000000000000000000000000000000000000000000000000000000000'),
        })
      } else {
        this.setState({
          errorMessage: 'Difficulty must be selected!'
        })
      }
    } else {
      this.setState({
        errorMessage: 'Sudoku has duplicates in either row/column/subgrid!'
      })
    }
  }

  render() {
    const { gridObj, difficulty, errorMessage, isApprovalOpen } = this.state;
    return (
      <div className='SudokuAdd'>
        {
          errorMessage ? (
            <div className='SudokuAdd__alert'>
              <Alert color='danger'>{errorMessage}</Alert>
            </div>
          ) : (
            <React.Fragment />
          )
        }
        <table className='SudokuAdd__table'>
          <tbody>
            <tr>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='A1' value={gridObj.A1} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='A2' value={gridObj.A2} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='A3' value={gridObj.A3} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='A4' value={gridObj.A4} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='A5' value={gridObj.A5} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='A6' value={gridObj.A6} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='A7' value={gridObj.A7} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='A8' value={gridObj.A8} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='A9' value={gridObj.A9} maxLength='1' autoComplete='off' /></td>
            </tr>
            <tr>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='B1' value={gridObj.B1} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='B2' value={gridObj.B2} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='B3' value={gridObj.B3} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='B4' value={gridObj.B4} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='B5' value={gridObj.B5} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='B6' value={gridObj.B6} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='B7' value={gridObj.B7} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='B8' value={gridObj.B8} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='B9' value={gridObj.B9} maxLength='1' autoComplete='off' /></td>
            </tr>
            <tr>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='C1' value={gridObj.C1} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='C2' value={gridObj.C2} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='C3' value={gridObj.C3} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='C4' value={gridObj.C4} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='C5' value={gridObj.C5} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='C6' value={gridObj.C6} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='C7' value={gridObj.C7} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='C8' value={gridObj.C8} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='C9' value={gridObj.C9} maxLength='1' autoComplete='off' /></td>
            </tr>
            <tr>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='D1' value={gridObj.D1} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='D2' value={gridObj.D2} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='D3' value={gridObj.D3} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='D4' value={gridObj.D4} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='D5' value={gridObj.D5} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='D6' value={gridObj.D6} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='D7' value={gridObj.D7} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='D8' value={gridObj.D8} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='D9' value={gridObj.D9} maxLength='1' autoComplete='off' /></td>
            </tr>
            <tr>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='E1' value={gridObj.E1} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='E2' value={gridObj.E2} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='E3' value={gridObj.E3} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='E4' value={gridObj.E4} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='E5' value={gridObj.E5} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='E6' value={gridObj.E6} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='E7' value={gridObj.E7} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='E8' value={gridObj.E8} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='E9' value={gridObj.E9} maxLength='1' autoComplete='off' /></td>
            </tr>
            <tr>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='F1' value={gridObj.F1} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='F2' value={gridObj.F2} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='F3' value={gridObj.F3} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='F4' value={gridObj.F4} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='F5' value={gridObj.F5} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='F6' value={gridObj.F6} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='F7' value={gridObj.F7} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='F8' value={gridObj.F8} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='F9' value={gridObj.F9} maxLength='1' autoComplete='off' /></td>
            </tr>
            <tr>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='G1' value={gridObj.G1} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='G2' value={gridObj.G2} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='G3' value={gridObj.G3} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='G4' value={gridObj.G4} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='G5' value={gridObj.G5} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='G6' value={gridObj.G6} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='G7' value={gridObj.G7} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='G8' value={gridObj.G8} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='G9' value={gridObj.G9} maxLength='1' autoComplete='off' /></td>
            </tr>
            <tr>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='H1' value={gridObj.H1} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='H2' value={gridObj.H2} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='H3' value={gridObj.H3} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='H4' value={gridObj.H4} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='H5' value={gridObj.H5} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='H6' value={gridObj.H6} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='H7' value={gridObj.H7} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='H8' value={gridObj.H8} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='H9' value={gridObj.H9} maxLength='1' autoComplete='off' /></td>
            </tr>
            <tr>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='I1' value={gridObj.I1} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='I2' value={gridObj.I2} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='I3' value={gridObj.I3} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='I4' value={gridObj.I4} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='I5' value={gridObj.I5} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='I6' value={gridObj.I6} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='I7' value={gridObj.I7} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='I8' value={gridObj.I8} maxLength='1' autoComplete='off' /></td>
              <td><input onChange={this.onInputChange} type='tel' pattern='\d*' name='I9' value={gridObj.I9} maxLength='1' autoComplete='off' /></td>
            </tr>
          </tbody>
        </table>
        <div className='SudokuAdd__controls'>
          <InputGroup className='SudokuAdd__controls__input'>
            <InputGroupAddon addonType="prepend" className='SudokuAdd__controls__input__addon'>Select difficulty</InputGroupAddon>
            <Input type='select' onChange={this.onDifficultyChange} name='difficulty' defaultValue={difficulty} className='SudokuAdd__controls__input__field'>
              <option value='easy'>Easy</option>
              <option value='medium'>Medium</option>
              <option value='hard'>Hard</option>
              <option value='very hard'>Very Hard</option>
            </Input>
            <Button onClick={this.onOpenApproval} className='SudokuAdd__controls__button'>Save</Button>
          </InputGroup>
          {isApprovalOpen && <SudokuAddApproval handleSave={this.onSudokuSave} onClose={this.onCloseApproval} />}
        </div>
      </div>
    )
  }
}

export default SudokuAdd;