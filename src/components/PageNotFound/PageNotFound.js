import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

class PageNotFound extends Component {
  render() {
    return (
      <div className='PageNotFound'>
        <h2 className='PageNotFound__title'>Page Not Found</h2>
        <div className='PageNotFound__text'>
          <p>Sorry but the page you are looking for doesn't exist or is removed.</p>
          <p>Try navigating to <Link to="/">homepage</Link> </p>
        </div>
      </div>
    )
  }
}

export default PageNotFound;




