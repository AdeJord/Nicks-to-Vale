import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from "react-router-dom";
import { getCar } from "../../services/api";
import regInput from '../findOneVehicle/regInput';

const useStyles = makeStyles((theme) => ({
  wrap: {
    width: '100%',
    height: 'calc(100vh - 80px)',
    backgroundColor: '#dddddd',
    float: 'left'
  },
  content: {
    width: 'calc(100% - 40px)',
    height: 'auto',
    padding: '20px',
    backgroundColor: '#cccccc',
    float: 'left'
  },
  car: {
    width: 'calc(100% - 40px)',
    height: 'auto',
    padding: '20px',
    fontSize: '25px',
    float: 'left'
  }
}));

export default function ViewCar() {
  const classes = useStyles();
  let urlParams = useParams();

  const [car, setCar] = React.useState([]);
//i think i just need to grab the search data and somehow replace
// the below .id field with the search term ie regNo?
// and add a search input
  useEffect(() => {
    getCar(urlParams.id).then(response => {
      setCar(response.data);
    });
  }, []);


  return (

    <div className={classes.wrap}>
      
      <div className={classes.cars}>
      <div className={classes.car}>
              <div className={classes.detail}>Registration: {car.regNo}</div>
              <div className={classes.detail}>Keys: {car.keys}</div>
              <div className={classes.detail}>Company: {car.company}</div>
              <div className={classes.detail}>Comments: {car.comments}</div> 
      </div>
      </div>
    </div>
  );
}