import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserSelf } from '../redux/actions/userActions';
import SudokuAdd from "../components/SudokuAdd/SudokuAdd";
import { addSudoku } from '../redux/actions/adminActions';
import { Spinner } from 'reactstrap';


class SudokuAddContainer extends Component {
  async componentDidMount() {
    if ( localStorage.getItem('token') ) {
      await this.props.getUserSelf();
    }
  }

  onSave = sudokuObject => {
    this.props.addSudoku( sudokuObject );
  }

  redirectToHome = () => {
    this.props.history.push('/');
  }

  render() {
    const { user } = this.props;
    if ( user && user.level === 'admin' ) {
      return <SudokuAdd onSave={this.onSave} />
    } else if ( user && ( user.level === 'user' || user.level === 'moderator' ) ) {
      return <div>{this.redirectToHome()}</div>
    } else {
      return <Spinner size='lg' />
    }
  }
}

const mapStateToProps = state => {
  return {
      isAdded: state.addSudokuReducer.isAdded,
      user: state.getUserSelfReducer.user,
  };
};

const mapDispatchToProps = {
  getUserSelf,
  addSudoku
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SudokuAddContainer);