import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);


interface Props{
  value:string|number|null
  setValue:(e:any|null) => void
  label:string
}

const BasicTextFields:React.FunctionComponent<Props> = ({setValue , value , label}) => {
  const classes = useStyles();

  return (
      <TextField label={label} />
  );
}

export default BasicTextFields