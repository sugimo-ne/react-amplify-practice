import React from "react"
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';

import PaperGroup from '../../molecules/Paper/PaperGroup'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
    },
  }),
);

let schedule = [
    0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9,
    0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9,
    0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9,
    0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9,
    0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9
]

const renderSchedule = (title:string , schedule:any) => {
    
    return(
        <div>
            <h2>{title}</h2>
            <ul>
                {
                    schedule.map((item:any , index:any) => {
                        return(
                            <li key={index}>
                                {item}
                            </li> 
                        )  
                    })
                }
            </ul>
        </div>
    )
}

const OneDaySchedule: React.FunctionComponent = () => {

    const [spacing, setSpacing] = React.useState<GridSpacing>(2);
    const classes = useStyles();
    return(
        <div>
            <Grid container spacing={1}>
            <Grid item xs={6}>
            <PaperGroup className={classes.paper}>
                {
                    renderSchedule("あなたの行動" , schedule)
                }

            </PaperGroup>
            </Grid>
            <Grid item xs={6}>
            <PaperGroup className={classes.paper}>
            {
                    renderSchedule("予定スケジュール" , schedule)
                }
            </PaperGroup>
            </Grid>
        </Grid>
        </div>
    )
}

export default OneDaySchedule