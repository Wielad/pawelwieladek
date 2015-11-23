import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Button, Row, Col, Jumbotron } from 'react-bootstrap';

require('../styles/styles.scss');
let imgSrc = require('../images/profile.jpg');

let App = React.createClass({
  render() {
    return (
      <Grid>
        <Jumbotron>
          <Row>
            <Col md={4} className="text-center">
              <img src={imgSrc} className="profile-picture" />
              <h1>Pawel Wieladek</h1>
              <h2>Web Developer</h2>
            </Col>
            <Col md={8}>

            </Col>
          </Row>
        </Jumbotron>
      </Grid>
    );
  }
});

ReactDOM.render(<App />, document.querySelector('#app'));
