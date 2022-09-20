
import { Paper, Stack, Typography } from "@mui/material";

export const  Running = ()=>{
    return(
        <div>
          <Paper sx={{background :'yellow',
        height:"1000px"}}>
            <Stack sx={{margin:'50px auto', gap:'10px', justifyContent:"center"}}>
                <h1>View Running</h1>
                <Typography>Running</Typography>

            </Stack>
          </Paper>            
        </div>
    )

}



export default Running;
