import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
  root: {
    minWidth: 30,
    textAlign:"center"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
});

interface Props{
  children:React.ReactNode
}

const CardCell: React.FunctionComponent<Props> =  ({children})=> {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      {children}
    </Card>
  );
}

export default CardCell