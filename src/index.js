import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers'
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

dotenv.config();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore( rootReducer, {}, composeEnhancers( applyMiddleware(reduxThunk) ) );

class Root extends Component {
  render() {
    return(
      <Provider store={ store }>
        <BrowserRouter>
          <Switch>
            <Route exact path='*' component={ App } />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
