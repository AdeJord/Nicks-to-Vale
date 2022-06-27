import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
} from "react-router-dom";
import HomePage from "./components/home/home";
import ViewAllCars from "./components/viewAllCars/viewAllCars";
import ViewCar from "./components/viewCar/viewCar";
import styled from 'styled-components';
import FindOneVehicle from "./components/findOneVehicle/findOneVehicle";

const Container = styled.div`
color: red
`

const useStyles = makeStyles((theme) => ({
  menu: {
    width: 'calc(100% - 20px)',
    height: 'auto',
    backgroundColor: 'blue',
    padding: '0px 10px 0px 10px',
    float: 'left'
  },
  menuItem: {
    width: 'auto',
    height: 'auto',
    padding: '20px 10px 20px 10px',
    float: 'left'
  }
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <Container>
          <Link to="/" className={classes.menuItem}>
            Home
          </Link>
          <Link to="/view-all-cars" className={classes.menuItem}>
            View Cars
          </Link>
          <Link to="/findOneVehicle" className={classes.menuItem}>
            Find One Vehicle
          </Link>
          
      </Container>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/view-all-cars">
          <ViewAllCars />
        </Route>
        <Route exact path="/view-car/:id">
          <ViewCar />
        </Route>
        <Route exact path="/findOneVehicle">
          <FindOneVehicle />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
