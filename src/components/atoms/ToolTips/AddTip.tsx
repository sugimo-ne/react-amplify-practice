import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      margin: theme.spacing(2),
    },
    absolute: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(3),
    },
  }),
);

interface Props{
  title:string,
  areaLabel:string,
  classNameProp:string,
  onClick:() => void
}

const AddTip:React.FunctionComponent<Props> = ({title , areaLabel , classNameProp , onClick}) => {
  const classes = useStyles();
  const classNameData = () => {
    switch(classNameProp){
      case "absolute":
        return classes.absolute
        break;
      case "fab":
        return classes.fab
        break;
    }
  }
  return (
    <div>
      <Tooltip onClick={onClick} title={title} aria-label={areaLabel}>
        <Fab color="secondary" className={classNameData()}>
          <AddIcon />
        </Fab>
      </Tooltip>
      </div>
      );
    }

  export default AddTip