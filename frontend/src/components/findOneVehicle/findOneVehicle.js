import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import styled from 'styled-components';
import regInput from './regInput';
import { getCar } from '../../services/api';
import { useParams } from "react-router-dom";

/*
I think I have to add the code here to get the reg number and use mongoose to search for it
and return into the answer?
*/

const useStyles = makeStyles((theme) => ({
  wrap: {
    width: '100%',
    height: '100vh',
    backgroundColor: '#dddddd',
    float: 'left'
  },
  results: {
    padding: '10px',
    margin: '50px',
    width: '250px',
    height: '250px',
    backgroundColor: '#aaaa',
    color: 'black',
    borderWidth: '4px',
    borderColor: 'black',
    borderRadius: '10px',
    textAlign: 'center',
    fontSize: '20px'
  },
  content: {
    fontSize: '40px',
    width: 'calc(100% - 40px)',
    height: 'auto',
    padding: '20px',
    backgroundColor: '#cccccc',
    float: 'left'
  },
  submitBtn: {
    fontSize: '20px',
    width: '100px',
    height: 'auto',
    padding: '15px',
    backgroundColor: '#cccccc',
    borderRadius: '10px',
    paddingBottom: '10px',
    marginLeft: '20px'
  },
  form: {
    fontSize: '20px',
    width: '100px',
    height: 'auto',
    padding: '15px',
    borderRadius: '10px',
    paddingBottom: '10px'
  },
  input: {
      fontSize: '30px',
      height: '75px',
      width: '300px',
      margin: '20px',
      backgroundColor: 'yellow',
      color: 'black',
      borderWidth: '4px',
      borderColor: 'black',
      borderRadius: '10px',
      textAlign: 'center', 
      textTransform: 'upperCase'
  }
}));

/*const Container = styled.div`
display: flex;
flex-direction: column
`*/





export default function FindOneVehicle() {
  const classes = useStyles();
  let urlParams = useParams();

//***********GRAB THE RESULTS DIV WITH DOC,GETELEMENT... AND MAKE IT EQUAL THE SEARCH RESULTS? */

  //when submit clicked need to save the input (regNo) and use
  //that to search for vehicle eg, RDA877L
  function handleClick () {
    let resultsCont = document.getElementById("resultsContainer")
    let searchReg = document.getElementById('regInput');
    console.log('submit clicked');
    alert('looking for ' + searchReg.value);// this bit seems to work
    resultsCont.textContent = searchReg.value
};

  return (
    <div className={classes.wrap}>
      <div className={classes.content}>
        Find one vehicle
      </div>
      <input id="regInput" className={classes.input} placeholder="Enter Reg Here" /> 
      <button onClick={handleClick} className={classes.submitBtn}>Submit</button>
      <div id="resultsContainer" className={classes.results}>
        <p>Results for </p>
      </div>
    </div>
    

  );
}

