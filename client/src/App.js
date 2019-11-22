import React from 'react';
import NavButtonsContainer from './containers/NavButtonsContainer';
import AzeriteDisplay from "./components/Azerite/AzeriteDisplay";
import ItemsContainer from "./containers/ItemsContainer";
import SearchBar from "./components/SearchBar";
import FilterAzerite from "./components/Azerite/FilterAzerite";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


const App = props => {
  return (
      <Container>
          <Router>
              <Switch>
                  <Route path="/azerite/:id">
                      <AzeriteDisplay info={props.info} />
                  </Route>

                  <Route path="/weapons/:id">
                      <AzeriteDisplay info={props.info} />
                  </Route>

                  <Route path="/trinkets/:id">
                      <AzeriteDisplay info={props.info} />
                  </Route>

                  <Route path="/azerite">
                      <Row>
                          <Col><SearchBar /></Col>
                          <Col><FilterAzerite /></Col>
                      </Row>
                      <Row>
                          <NavButtonsContainer />
                      </Row>
                      <Row>
                          <ItemsContainer path="azerite" />
                      </Row>
                  </Route>

                  <Route path="/weapons">
                      <Row>
                          <Col><SearchBar /></Col>
                          <Col><FilterAzerite /></Col>
                      </Row>
                      <Row>
                          <NavButtonsContainer />
                      </Row>
                      <Row>
                          <ItemsContainer path="weapons" />
                      </Row>
                  </Route>

                  <Route path="/trinkets">
                      <Row>
                          <Col><SearchBar /></Col>
                          <Col><FilterAzerite /></Col>
                      </Row>
                      <Row>
                          <NavButtonsContainer />
                      </Row>
                      <Row>
                          <ItemsContainer path="trinkets" />
                      </Row>
                  </Route>

                  <Route path="/">
                      <NavButtonsContainer />
                  </Route>
              </Switch>
          </Router>
      </Container>
  );
};

const mapStateToProps = state => {
    return {
        info: state.piece
    }
};

export default connect(mapStateToProps)(App);
