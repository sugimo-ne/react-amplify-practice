import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import CardCell from "../../atoms/CardCell"
import {CalcOneMonth} from "../../../utils/CalcOneMonth"
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },

  }),
);

const Calender: React.FunctionComponent = () => {
  const [spacing, setSpacing] = React.useState<GridSpacing>(2);
  const classes = useStyles();
const week = ["日" , "月" , "火" , "水" , "木" , "金" , "土"]
const calender = CalcOneMonth(null , null)
const renderDateCell = (day:string)=> {
      return(
        <CardCell>
         <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
          {day}
          </Typography>
          <Typography variant="h5" component="h2">
            <h1>ll</h1>
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
        </CardCell>
      )
}

const renderDayCell = (day:string , color:any) => {
  if(day){
    return(
      <CardCell>
      <h3 style={color}>
        {day}
      </h3>
    </CardCell>
    )
  }else{
    return
  }
}

const createCalender = (days:any , row:number) => {
  const rows = []
  for(let i = 1; i <= row; i ++) {
      const row = <GridList cols={7} cellHeight='auto' key={"days" + i}>
      { 
        days.slice(i*7 -7, i * 7).map((day:any) => {
          return <GridListTile>
          <Link to={"/schedule/create/" + day.date}>
          {
            renderDayCell(day.date , null)
          }
          </Link>
        </GridListTile>
        })
      }
  </GridList>
  rows.push(row)  
}
  return(
    <div>
    {
      rows.map((day) => {
        return day
      })
    }
    </div>
  )
}
  return (
   <Paper elevation={2}>
     <GridList cols={7} cellHeight='auto'>
        {
          week.map((day:string) => {
           const styles:{
             color: string
           } = {
             color:"black"
           } 
           if(day == "日"){styles.color = 'red'}
           if(day == '土'){styles.color = 'blue'}
           return <GridListTile key={day}>
             {renderDayCell(day , styles)}
           </GridListTile>
          })
        }
     </GridList>
     {
        createCalender(calender.result.calender , calender.result.row)
     }
   </Paper>
  );
}

export default Calender