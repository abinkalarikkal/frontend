import React, { useState } from 'react'
import { Button, FormControl, FormControlLabel, Grid, Paper, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom';

const Login = () => {
  const heading={fontSize:"2rem",fontWeight:"600"};
  const paperStyle={padding:"2rem",margin:"50px auto",borderRadius:"1rem",boxshadow:"10px 10px"}
  const [role, setRole] = useState("");

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Grid align="center">
        <br></br>
      <Paper  style={paperStyle} sx={{width:{
        xs:"30vw",
        sm:"25vw",
        md:"35vw",
        lg:"23.5vw",
        xl:"20.5vw"
      },
      height:"70vh"}}>

        <Typography style={heading} >Login</Typography>
      <br />
      <form>
        <TextField type="text" label="Phone Number, Username, or Email" variant="filled" sx={{ width: "300px" }} /> <br /> <br />
        <TextField type="password" label="Password" variant='filled' sx={{ width: "300px" }} /> <br /><br />
        <FormControl sx={{ textAlign: "left" }}>
          <label htmlFor='role'><h2>Role:</h2></label>
          <RadioGroup
            row
            aria-labelledby="radio-buttons-group-label"
            defaultValue="user"
            id="role"
            name="radio-buttons-group"
            value={role}
            onChange={handleChange}
          >
            <FormControlLabel value="user" control={<Radio checked={role === 'user'} />} label="User" />
            <FormControlLabel value="admin" control={<Radio checked={role === 'admin'} />} label="Admin" />
          </RadioGroup>
        </FormControl>
        {role == "user"?
         ( <Link to="/Dashboard">
            <Button variant='contained' type="submit" sx={{ width: "300px" }}>Log in</Button> </Link>): (
              <Link to="/Adminhome">
              <Button variant='contained' type="submit" sx={{ width: "300px" }}>Log in</Button> </Link>
            )
        }

<br></br> <br></br><br></br>
      <Link to='/Signup'>
      Don't have an account? Signup</Link>
      <br></br> <br></br><br></br>
      <Link to="/Home">
              <Button variant='contained' type="submit" sx={{ width: "150px" }}>Back to Home</Button> </Link>
      </form>
      </Paper>
    </Grid>
    </div>
  )
}
export default Login
