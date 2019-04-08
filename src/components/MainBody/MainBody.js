import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'reactstrap';

class MainBody extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={{ size: 12 }} lg={{ size: 10, offset:1 }}>
            <Card>
              {/* All routes will go here */}
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default MainBody;