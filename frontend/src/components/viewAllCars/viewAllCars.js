import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getAllCars } from "../../services/api";
import { Link } from "react-router-dom";


//this is nicks code but I just need to change so it just pulls up
//what is requested

const useStyles = makeStyles((theme) => ({
  wrap: {
    width: '100%',
    height: 'calc(100vh - 80px)',
    backgroundColor: '#dddddd',
    overflowY: 'auto',
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
    width: 'calc(100% - 80px)',
    height: 'auto',
    padding: '20px',
    margin: '20px',
    backgroundColor: 'white',
    float: 'left'
  },
  detail: {
    width: '100%',
    height: 'auto',
    float: 'left'
  }
}));

export default function ViewAllCars() {
  const classes = useStyles();
  const [cars, setCars] = React.useState([]);

  useEffect(() => {
    getAllCars().then(response => {
      setCars(response.data);
    });
  }, []);

  return (
    <div className={classes.wrap}>
      <div className={classes.content}>
        {cars.length > 0 &&
          cars.map(car => {
            return(
              <div className={classes.car}>
                <div className={classes.detail}>Registration: {car.regNo}</div>
                <div className={classes.detail}>Keys: {car.keys}</div>
                <div className={classes.detail}>Company: {car.company}</div>
                <div className={classes.detail}>Comments: {car.comments}</div>
                <div className={classes.detail}><Link to={"/view-car/" + car._id}>View Detail</Link></div>
              </div>
            )
        })}
      </div>
    </div>
  );
}