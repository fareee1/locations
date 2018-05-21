import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import {Grid, Row, Col} from 'react-bootstrap';
import Settings from "./components/Settings";
import Header from "./components/Header"
import store from "./store";
import MyFancyComponent from './components/Map'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header/>
          <Grid>
            <Row className="show-grid shadow">
              <Col xs={12} md={3} className="divHeight">
                <Settings/>
              </Col>
              <Col xs={12} md={9} className="noPadding mapMobileWidth">
                <MyFancyComponent/>
              </Col>
            </Row>
          </Grid>
        </div>
      </Provider>
    );
  }
}

export default App;
