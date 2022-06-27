import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
  }
}));

export default function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.wrap}>
      <div className={classes.content}>
        Home
      </div>
    </div>
  );
}