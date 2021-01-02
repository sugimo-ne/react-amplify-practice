import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

interface Props{
    selectList:any[],
    setValue:(e:any) => void,
    value:any
    title:string
}

const SimpleSelect:React.FunctionComponent<Props> = ({selectList , setValue , value , title}) => {
  const classes = useStyles();
  const handleChange = (event:any) => {
    setValue(event.target.value);
  };

  return (
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value.toString()}
          onChange={handleChange}
        >
          {
              selectList.map((item) => {
                  return(
                    <MenuItem value={item}>{item}</MenuItem>
                  )
              })
          }
        </Select>
      </FormControl>
  );
}

export default SimpleSelect