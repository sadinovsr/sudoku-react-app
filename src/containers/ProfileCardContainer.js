import React, { Component } from "react";
import { connect } from "react-redux";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import { getUserSelf } from "../redux/actions/userActions";
import { getHistoryStatistics } from '../redux/actions/historyActions'
import { Spinner } from 'reactstrap';

class ProfileCardContainer extends Component {

  componentDidMount() {
    if ( localStorage.getItem('token') ) {
      this.props.getUserSelf();
      this.props.getHistoryStatistics();
    }
  }

  render() {
    const { user, statistics } = this.props;
    
    return (
      (user) ? (
        <ProfileCard user={user} statistics={statistics} />
      ) : (
        <Spinner size='lg' />
      )
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.getUserSelfReducer.user,
    statistics: state.getHistoryStatisticsReducer.statistics,
  };
};

const mapDispatchToProps = {
  getUserSelf,
  getHistoryStatistics,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileCardContainer);