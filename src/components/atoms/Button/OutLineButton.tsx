import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

interface Props{
    color:any,
    text:string
}

const OutlinedButton: React.FunctionComponent<Props> = ({color , text}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="outlined" color={color}>
        {text}
      </Button>
    </div>
  );
}

export default OutlinedButton