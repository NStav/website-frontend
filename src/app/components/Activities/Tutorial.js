import React from "react";
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { getListItemSecondaryActionClassesUtilityClass, Paper,Stack} from '@mui/material'; 
import "./Tutorial.css";



const useStyles = makeStyles(() => ({
  paper: {
    background: '#5A226D',

  },
  paper2: {
    marginTop: '82px',
    marginRight: '',
    marginLeft: '',
    height: '280px',
    width: '280px',
    

  },

}))



export const Tutorial = () => {
  return (
    <div>
      //Stack 1 for workout 
      <Paper><Typography id="context_paper_tutorial">How to run confidently when you're just starting out </Typography></Paper>
      <Paper sx={{
        background: '#9CC3C6',
        height:"1260px",
        width:"100%",
        marginTop:'270px',
        
      }}>
        <Stack sx={{ 
          display:'grid',
          gridTemplateColumns:'repeat(3,2fr)', 
          width: '300px', 
          backgroundColor:'red', 
          gap:'50px', 


        }}> 
        <Paper className={classes.paper2}><img src id/></Paper>
        
        </Stack>

      </Paper>
    </div>




  )






}


export default Tutorial;



