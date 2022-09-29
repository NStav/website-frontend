import React from "react";
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { Paper, Stack } from '@mui/material';
import "./Tutorial.css";
import tutorial1 from "./img/tutorial1.png";
import tutorial2 from "./img/tutorial2.png";
import tutorial3 from "./img/tutorial3.png";
import tutorial4 from "./img/tutorial4.png";
import tutorial5 from "./img/tutorial5.png";
import tutorial6 from "./img/tutorial6.png";
import games1 from "./img/games1.png";


const useStyles = makeStyles(() => ({

 

}))


export const Tutorial = () => {
  return (
    <div>

      <h1 id="page_title"> Tutorials </h1>
      <Paper sx={{
        background: '#9CC3C6',
        height: "1260px",
        width: "100%",
        marginTop: '120px',
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'center',
        backgroundColor: '#9CC3C6',
        textAlign: 'center',
        fontSize: '50px',
        paddingTop: '30px',
        alignItems: 'center',
        borderRadius:'15px',

      }}>
        <Typography sx={{ margin: 'auto', alignItems: 'center' }}>
          <h1>WORKOUTS</h1>
        </Typography>
        <Stack sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3,2fr)',
          width: '300px',
          marginTop: '30px',
          paddingBottom: '100px',
          gap: '50px',
          paddingRight: '70px',
          marginLeft: 'auto',
          marginRight: 'auto',
          justifyContent: "center",
          alignItems: "center",



        }}>
          <Paper sx={{borderRadius:'15px'}}>
            <img src={tutorial1} alt="tutorial1" style={{ width: '100%', height: '380px', fontStyle:'Roboto',}} />
            <h2>Workout Name</h2>
            <Typography> Nam in magna non erat consectetur vulputate ut sit amet diam. Etiam lacinia orci erat, id cursus elit sodales fringilla.</Typography>
          </Paper>
          <Paper sx={{borderRadius:'15px'}}>
            <img src={tutorial2} alt="tutorial1" style={{ width: '100%', height: '380px' }} />
            <h2>Workout Name</h2>
            <Typography> Nam in magna non erat consectetur vulputate ut sit amet diam. Etiam lacinia orci erat, id cursus elit sodales fringilla.</Typography>
          </Paper>
          <Paper sx={{borderRadius:'15px'}}>
          
            <img src={tutorial3} alt="tutorial1" style={{ width: '100%', height: '380px' }} />
            <h2>Workout Name</h2>
            <Typography> Nam in magna non erat consectetur vulputate ut sit amet diam. Etiam lacinia orci erat, id cursus elit sodales fringilla.</Typography>
          </Paper >
          <Paper sx={{borderRadius:'15px'}}>
          
            <img src={tutorial4} alt="tutorial1" style={{ width: '380px', height: '380px' }} />
            <h2>Workout Name </h2>
            <Typography> Nam in magna non erat consectetur vulputate ut sit amet diam. Etiam lacinia orci erat, id cursus elit sodales fringilla.</Typography>
          </Paper>
          <Paper sx={{borderRadius:'15px'}}>
          
            <img src={tutorial5} alt="tutorial1" style={{ width: '380px', height: '380px' }} />
            <h2>Workout Name </h2>
            <Typography> Nam in magna non erat consectetur vulputate ut sit amet diam. Etiam lacinia orci erat, id cursus elit sodales fringilla.</Typography>
          </Paper>
          <Paper sx={{borderRadius:'15px'}}>
          
            <img src={tutorial6} alt="tutorial1" style={{ width: '380px', height: '380px' }} />
            <h2>Workout Name </h2>
            <Typography> Nam in magna non erat consectetur vulputate ut sit amet diam. Etiam lacinia orci erat, id cursus elit sodales fringilla.</Typography>
          </Paper>


        </Stack>

      </Paper>


      <Paper sx={{
        
        height: "1260px",
        width: "100%",
        marginTop: '120px',
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'center',
        backgroundColor: '#BEACA2',
        textAlign: 'center',
        fontSize: '50px',
        paddingTop: '30px',
        alignItems: 'center',
        borderRadius:'15px',

      }}>
        <Typography sx={{ margin: 'auto', alignItems: 'center' }}>
          <h1>Prodcuts</h1>
        </Typography>
        <Stack sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3,2fr)',
          width: '300px',
          marginTop: '30px',
          paddingBottom: '100px',
          gap: '50px',
          paddingRight: '70px',
          marginLeft: 'auto',
          marginRight: 'auto',
          justifyContent: "center",
          alignItems: "center",



        }}>
          <Paper sx={{borderRadius:'15px'}}>
            <img src={tutorial1} alt="tutorial1" style={{ width: '100%', height: '380px' }} />
            <h2>Product Name </h2>
            <Typography> Nam in magna non erat consectetur vulputate ut sit amet diam. Etiam lacinia orci erat, id cursus elit sodales fringilla.</Typography>
          </Paper>
          <Paper sx={{borderRadius:'15px'}}>
            <img src={tutorial1} alt="tutorial1" style={{ width: '100%', height: '380px' }} />
            <h2>Product Name </h2>
            <Typography> Nam in magna non erat consectetur vulputate ut sit amet diam. Etiam lacinia orci erat, id cursus elit sodales fringilla.</Typography>
          </Paper>
          <Paper sx={{borderRadius:'15px'}}>
            <img src={tutorial1} alt="tutorial1" style={{ width: '100%', height: '380px' }} />
            <h2>Product Name </h2>
            <Typography> Nam in magna non erat consectetur vulputate ut sit amet diam. Etiam lacinia orci erat, id cursus elit sodales fringilla.</Typography>
          </Paper >
          <Paper sx={{borderRadius:'15px'}}>
            <img src={tutorial1} alt="tutorial1" style={{ width: '380px', height: '380px' }} />
            <h2>Product Name </h2>
            <Typography> Nam in magna non erat consectetur vulputate ut sit amet diam. Etiam lacinia orci erat, id cursus elit sodales fringilla.</Typography>
          </Paper>
          <Paper sx={{borderRadius:'15px'}}>
            <img src={tutorial1} alt="tutorial1" style={{ width: '380px', height: '380px' }} />
            <h2>Product Name </h2>
            <Typography> Nam in magna non erat consectetur vulputate ut sit amet diam. Etiam lacinia orci erat, id cursus elit sodales fringilla.</Typography>
          </Paper>
          <Paper sx={{borderRadius:'15px'}}>
            <img src={tutorial1} alt="tutorial1" style={{ width: '380px', height: '380px' }} />
            <h2>Product Name </h2>
            <Typography> Nam in magna non erat consectetur vulputate ut sit amet diam. Etiam lacinia orci erat, id cursus elit sodales fringilla.</Typography>
          </Paper>


        </Stack>

      </Paper>


      <Paper sx={{
        background: '#9CC3C6',
        height: "1260px",
        width: "100%",
        marginTop: '120px',
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'center',
        backgroundColor: '#9D8EAF',
        textAlign: 'center',
        fontSize: '50px',
        paddingTop: '30px',
        alignItems: 'center',
        borderRadius:'15px',
        paddingBottom:'50px',

      }}>
        <Typography sx={{ margin: 'auto', alignItems: 'center' }}>
          <h1>Games</h1>
        </Typography>
        <Stack sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3,2fr)',
          width: '300px',
          marginTop: '30px',
          paddingBottom: '100px',
          gap: '50px',
          paddingRight: '70px',
          marginLeft: 'auto',
          marginRight: 'auto',
          justifyContent: "center",
          alignItems: "center",
          marginBottom:'100px',



        }}>
          <Paper sx={{borderRadius:'15px'}}>
            <img src={games1} alt="tutorial1" style={{ width: '100%', height: '380px' }} />
            
            <Typography> Nam in magna non erat consectetur vulputate ut sit amet diam. Etiam lacinia orci erat, id cursus elit sodales fringilla.</Typography>
          </Paper>
          <Paper sx={{borderRadius:'15px'}}>
            <img src={tutorial1} alt="tutorial1" style={{ width: '100%', height: '380px' }} />
            <Typography> Nam in magna non erat consectetur vulputate ut sit amet diam. Etiam lacinia orci erat, id cursus elit sodales fringilla.</Typography>
          </Paper>
          <Paper sx={{borderRadius:'15px'}}>
            <img src={tutorial1} alt="tutorial1" style={{ width: '100%', height: '380px' }} />
            <Typography> Nam in magna non erat consectetur vulputate ut sit amet diam. Etiam lacinia orci erat, id cursus elit sodales fringilla.</Typography>
          </Paper >
          <Paper sx={{borderRadius:'15px'}}>
            <img src={tutorial1} alt="tutorial1" style={{ width: '380px', height: '380px' }} />
            <Typography> Nam in magna non erat consectetur vulputate ut sit amet diam. Etiam lacinia orci erat, id cursus elit sodales fringilla.</Typography>
          </Paper>
          <Paper sx={{borderRadius:'15px'}}>
            <img src={tutorial1} alt="tutorial1" style={{ width: '380px', height: '380px' }} />
            <Typography> Nam in magna non erat consectetur vulputate ut sit amet diam. Etiam lacinia orci erat, id cursus elit sodales fringilla.</Typography>
          </Paper>
          <Paper sx={{borderRadius:'15px'}}>
            <img src={tutorial1} alt="tutorial1" style={{ width: '380px', height: '380px' }} />
            <Typography> Nam in magna non erat consectetur vulputate ut sit amet diam. Etiam lacinia orci erat, id cursus elit sodales fringilla.</Typography>
          </Paper>


        </Stack>

      </Paper>
    </div>




  )






}


export default Tutorial;



