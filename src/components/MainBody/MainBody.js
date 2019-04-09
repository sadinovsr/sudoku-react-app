import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { Container, Row, Col, Card } from 'reactstrap';
import DifficultyContainer from '../../containers/DifficultyListContainer';

class MainBody extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={{ size: 12 }} lg={{ size: 10, offset:1 }}>
            <Card>
              <Switch>
                <Route exact path="/" component={DifficultyContainer} />
              </Switch>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default MainBody;