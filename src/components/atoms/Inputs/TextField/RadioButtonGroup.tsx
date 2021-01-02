import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

interface Props{
    data:number[],
    setValue:(e:any) => void,
    value:number
    title:string
}

const RadioButtonsGroup: React.FunctionComponent<Props> = ({data , setValue , value , title}) => {
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setValue((event.target as HTMLInputElement).value);
};

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{title}</FormLabel>
      <RadioGroup aria-label={title} name={title} value={value.toString()} onChange={handleChange}>
        {
          data.map((item) => {
            return(
              <div key={item} > 
                <FormControlLabel value={item.toString()} control={<Radio />} label={item} />
              </div>
            )
          })
        }
      </RadioGroup>
    </FormControl>
  );
}

export default RadioButtonsGroup