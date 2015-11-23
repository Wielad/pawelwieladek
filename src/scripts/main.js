import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Button, Row, Col } from 'react-bootstrap';

require('../styles/styles.scss');
let imgSrc = require('../images/profile.jpg');

let App = React.createClass({
  render() {
    return (
      <Grid>
        <Row>
          <Col md={3}>
            <img src={imgSrc} className="img-responsive profile-picture" />
          </Col>
          <Col md={9}>
            <h1>Pawel Wieladek</h1>
          </Col>
        </Row>
      </Grid>
    );
  }
});

ReactDOM.render(<App />, document.querySelector('#app'));
