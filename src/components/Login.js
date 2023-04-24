import React, {useState,useEffect, useContext} from "react";
import { TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { toast } from "react-toastify"
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    maxWidth: 500,
    color: theme.palette.text.primary,
  }));



 const Login = () => {

  useEffect(()=>{
    window.scrollTo(0,0);
  })
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [logBtn, setLogBtn] = useState(false);


  const loginHandler = async(e) => {

  e.preventDefault();
  setLoading(true);
  setEmailError(false)
  setPasswordError(false)

  if (email === '' ) {
      setEmailError(true)
  }
  if (password === '' && password > 6) {
      setPasswordError(true)
  }

  if (email && password) {
  try{
    const userCredential=await signInWithEmailAndPassword(auth,email,password)
    const user=userCredential.user;
    setLoading(false);
    toast.success("Successfully logged in")
    alert('Successfully logged in')
    if (user.reloadUserInfo?.email?.includes('admin')){
      navigate('/user',{state:{email:user.reloadUserInfo?.email}});
    }
    else {
    navigate('/home',{state:{email:user.reloadUserInfo?.email}});
    }
  }
  catch(error){
    setLoading(false);
    toast.error(error.message)
    alert('please check login details')
  }
    }
  }



    return ( 
        <React.Fragment>
    <div >
    <Grid style={{ backgroundColor: 'white' }} container wrap="nowrap" spacing={2}>
      <Grid item xs zeroMinWidth>
        <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }} >
      <StyledPaper  
        sx={{
          my: 12.5,
          mx: 'auto',
          p: 2,
          
        }}
      >

<form autoComplete="off" onSubmit={loginHandler} >
            <h2>Login Form</h2>
                <TextField 
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="email"
                    sx={{mb: 3}}
                    fullWidth
                    value={email}
                    error={emailError}
                 />
                 <TextField 
                    label="Password"
                    onChange={e => setPassword(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="password"
                    value={password}
                    error={passwordError}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <Button disabled={logBtn} variant="outlined" color="secondary" type="submit">Login</Button>             
        </form>
        <small>Need an account? <Link to="/">Register here</Link></small>
    </StyledPaper>
    </Box>
    </Grid>
  </Grid>
  </div>        
</React.Fragment>
     );
}
 
export default Login;