import React from 'react';
import { Row, Col, Grid, Button } from 'react-bootstrap';

let App = React.createClass({
  render() {
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <div className="profile-picture">
              <img src="images/me.jpg" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="landing-header">
            Paweł Wielądek
          </Col>
        </Row>
        <Row>
          <Col md={12} className="landing-subheader">
            Front-end Developer
          </Col>
        </Row>
        <Row>
          <Col md={12}>
              <img src="images/shovel.png" width="80" />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
              <span className="under-construction">Under construction</span>
          </Col>
        </Row>
      </Grid>
    );
  }
});

React.render(<App />, document.body);
