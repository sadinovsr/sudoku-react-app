import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { Container, Row, Col, Card } from 'reactstrap';
import DifficultyContainer from '../../containers/DifficultyListContainer';
import SudokuBodyContainer from '../../containers/SudokuBodyContainer';
import HistoryListContainer from '../../containers/HistoryListContainer';
import ProfileCardContainer from '../../containers/ProfileCardContainer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import PageNotFound from '../../components/PageNotFound/PageNotFound';
import './MainBody.css';

class MainBody extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={{ size: 12 }} lg={{ size: 10, offset:1 }}>
            <Card>
              <Switch>
                <Route exact path='/' component={DifficultyContainer} />
                <Route exact path='/sudoku' component={SudokuBodyContainer} />
                <ProtectedRoute path='/history' component={HistoryListContainer} />
                <ProtectedRoute path='/profile' component={ProfileCardContainer} />
                <Route path="*" component={PageNotFound} />
              </Switch>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default MainBody;