import React from 'react'
import { Button, Grid, Paper, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Signup = () => {
  const heading={fontSize:"2rem",fontWeight:"600"};
  const paperStyle={padding:"2rem",margin:"50px auto",borderRadius:"1rem",boxshadow:"10px 10px"}
  

  return (
        <div style={{ textAlign: "center" }}>
      <Grid align="center">
      <Paper  style={paperStyle} sx={{width:{
        xs:"30vw",
        sm:"25vw",
        md:"35vw",
        lg:"23.5vw",
        xl:"20.5vw"
      },
      height:"76vh"}}>

      
        <Typography style={heading} >Sign Up</Typography>
        <br></br>
      <form>  
      <TextField type="text" label="Mobile Number or Email" variant="filled" sx={{width:"300px"}} /> <br /> <br />
      <TextField type="text" label="Firstname" variant="filled" sx={{width:"300px"}} /> <br /> <br />
      <TextField type="text" label="Lastname" variant="filled" sx={{width:"300px"}} /> <br /> <br />
      <TextField type="password" label="Password" variant="filled" sx={{width:"300px"}}/> <br /><br />
      <Link to='/Login'>
      <Button variant='contained' type="submit" sx={{width:"300px"}}>Sign Up</Button>
      </Link>
      <br></br>  <br></br>  <br></br>
      <Link to='/Login'>
      Already have an account? Login</Link>
      <br></br><br></br><br></br>
      <Link to="/Home">
              <Button variant='contained' type="submit" sx={{ width: "150px" }}>Back to Home</Button> </Link>
      </form>
      </Paper>
    </Grid>
    </div>
  )
}
export default Signup
