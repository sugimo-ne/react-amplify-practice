import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
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

const MultilineTextField:React.FunctionComponent<Props> = ({setValue , value , label}) => {
  const classes = useStyles();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
        <TextField
          label={label}
          multiline
          rows={4}
          defaultValue={value}
          variant="outlined"
          onChange={handleChange}
        />
  );
}

export default MultilineTextField