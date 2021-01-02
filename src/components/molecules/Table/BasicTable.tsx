import React,{useEffect , useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(time: string, todo: string) {
  return { time, todo };
}

const rows = [
  createData('00:00', "寝る"),
  createData('01:00', "寝る"),
];




export default function BasicTable() {
  const classes = useStyles();
  const [propsTest , setPropsTest] = useState({
      _00:"寝る",
      _01:"寝る",
      _02:"寝る",
      _03:"寝る",
      _04:"寝る",
      _05:"寝る",
      _06:"寝る",
      _07:"寝る",
      _08:"寝る",
      _09:"寝る",
      _10:"寝る",
      _11:"寝る",
      _12:"寝る",
      _13:"寝る",
      _14:"寝る",
      _15:"寝る",
      _16:"寝る",
      _17:"寝る",
      _18:"寝る",
      _19:"寝る",
      _20:"寝る",
      
      _22:"寝る",
      _23:"寝る",
  })

//   const timeRows:any = []
interface timeRows{
    time:string,
    todo:string
}
  const [timeRows , setTimeRows] = useState<timeRows[]>([])

  useEffect(() => {  
    const results = []
    for(let i = 0; i < 24; i++){
        const timeKey = i < 10
            ? `0${i}` 
            : `${i}` //as keyof typeof propsTest
        const params = `_${timeKey}`as keyof typeof propsTest
        const getSchedule = propsTest[params]
        if(getSchedule){
            console.log(getSchedule)
            const _createData = createData(`${timeKey}:00`, getSchedule)
            results[i] = _createData
            console.log(results)
            setTimeRows(results)
        }else{
            console.log('null')
            const _createData = createData(`${timeKey}:00`, "　")
            results.push(_createData)
            console.log(results)
            setTimeRows(results)
        }
      }
  },[])

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{"width":"20%"}}>時間</TableCell>
            <TableCell style={{"width":"80%"}} align="left">予定</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {timeRows.length && timeRows.map((row:any) => (
            <TableRow key={row.time}>
              <TableCell style={{"width":"20%"}} component="th" scope="row">
                {row.time}
              </TableCell>
              <TableCell style={{"width":"80%"}} align="left">{row.todo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}