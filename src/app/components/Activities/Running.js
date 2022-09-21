import CourseVideo from './CourseVideo';
import { makeStyles } from '@mui/styles';
import { Paper, Stack, Typography } from "@mui/material";
import "./Running.css";
import running1 from "./img/running1.png"
const useStyles = makeStyles(() => ({
  paper: {
    height: '550px',
    width: '550px',
    background: '#5A226D'

  },
  paper1: {
    height: '550px',
    width: '550px',
    background: '#5A226D'
  },
  paper2: {
    height: '550px',
    width: '550px',
    background: '#5A226D'
  },
  paper3: {
    height: '550px',
    width: '550px',
    backgroundColor: '#FF6C1A',
  },
}))
export const Running = () => {
  const classes = useStyles();
  return (
    <div>
      <Paper sx={{
        background: 'white',
        height: "600px",
        width: "82%",
        margin: '0px auto',
        justifyItems: "center",
        width: '90%'
      }}>
        <Stack sx={{
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <CourseVideo videoid="Hz9whDDJ3oY" />
        </Stack>
      </Paper>
      <Stack sx={{
        width: '80%',
        height: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '100px'
      }}>
        <Stack sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2,1fr)',
          width:'400px',
        }}>
          <Paper className={classes.paper}>HOW TO RUN
            COnFIDENTlY WHEN
            YOU'REJUSTSTARTING
            OUT</Paper>
          <Paper className={classes.paper1}>
          <img src={running1} alt="running1" />
          </Paper>
          <Paper className={classes.paper2}></Paper>
          <Paper className={classes.paper3}></Paper>
        </Stack>
      </Stack>
      <div>


      </div>
    </div>


  )
}
export default Running;







