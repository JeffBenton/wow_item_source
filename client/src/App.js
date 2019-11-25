import React from 'react';
import NavButtonsContainer from './containers/NavButtonsContainer';
import AzeriteDisplay from "./components/Azerite/AzeriteDisplay";
import TrinketDisplay from "./components/Trinkets/TrinketDisplay";
import WeaponsDisplay from "./components/Weapons/WeaponDisplay";
import ItemsContainer from "./containers/ItemsContainer";
import FilterAzerite from "./components/Azerite/FilterAzerite";
import FilterTrinkets from "./components/Trinkets/FilterTrinkets";
import FilterWeapons from "./components/Weapons/FilterWeapons"

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
                      <AzeriteDisplay info={props.azeritePiece} />
                  </Route>

                  <Route path="/weapons/:id">
                      <WeaponsDisplay info={props.weaponPiece} />
                  </Route>

                  <Route path="/trinkets/:id">
                      <TrinketDisplay info={props.trinketsPiece} />
                  </Route>

                  <Route path="/azerite">
                      <Row><Col><FilterAzerite path="azerite" /></Col></Row>
                      <Row><NavButtonsContainer /></Row>
                      <Row><ItemsContainer path="azerite" /></Row>
                  </Route>

                  <Route path="/weapons">
                      <Row><Col><FilterWeapons path="weapons" /></Col></Row>
                      <Row><NavButtonsContainer /></Row>
                      <Row><ItemsContainer path="weapons" /></Row>
                  </Route>

                  <Route path="/trinkets">
                      <Row><Col><FilterTrinkets path="trinkets" /></Col></Row>
                      <Row><NavButtonsContainer /></Row>
                      <Row><ItemsContainer path="trinkets" /></Row>
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
        azeritePiece: state.azerite.info,
        trinketsPiece: state.trinkets.info,
        weaponPiece: state.weapons.info
    }
};

export default connect(mapStateToProps)(App);
