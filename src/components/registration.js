import React, {useState,useEffect} from 'react';
import { TextField, Button, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Link, useNavigate } from 'react-router-dom';
import {auth} from "../firebase";
import {createUserWithEmailAndPassword} from 'firebase/auth'


const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    maxWidth: 500,
    color: theme.palette.text.primary,
  }));

 
const RegisterForm = () => {
    const [name, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [regBtn,setRegBtn]=useState(false)
    const [currentUser, setCurrentUser] = useState(null);
    const [file,setFile]=useState(null)
    const [loading,setLoading]=useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [emailError, setEmailError] = useState(false)

  


  useEffect(()=>{
    window.scrollTo(0,0);
  })
 
    const nav = useNavigate();

     const handleSubmit = async (e)  => {

        e.preventDefault()

        setRegBtn(true);
        setEmailError(false)
        setPasswordError(false)

        if (email == '' ) {
            setEmailError(true)
        }
        if ( password.length < 6) {
            setPasswordError(true)
            alert('Password should be min 6 digit')
            
        }

        //if (!passwordError){
       if (email && password  ) {
        let obj = {
            name: name,
            email : email,
            password: password
           
        }       
       
        try {
            createUserWithEmailAndPassword(auth, email, password);      
            setCurrentUser(true);
          } catch (error) {
            console.log(error);
          }
          
        nav("/login")

        setFirstName('')
        setEmail('');
        setPassword('');
        setRegBtn(false);


        }
        
    
    }


    return (
        <React.Fragment >
            <Grid style={{ backgroundColor: 'black' }} container wrap="nowrap" spacing={2}>
                <Grid item xs zeroMinWidth>
                     <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }} >
                        <StyledPaper  
                        sx={{
                            my: 12.5,
                            mx: 'auto',
                            p: 2,
                            
                        }}
                        >
            <h2 align ="center">Register Form</h2>
            <div>
            <form onSubmit={handleSubmit} >
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label=" Name"
                        onChange={e => setFirstName(e.target.value)}
                        value={name}
                        fullWidth
                        required
                    />
                </Stack>
                <TextField
                    type="email"
                    variant='outlined'
                    color='secondary'
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    error={emailError}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <TextField
                    type="password"
                    variant='outlined'
                    color='secondary'
                    label="Password should be min 6"

                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    error={passwordError}
                    required
                    fullWidth
                    sx={{mb: 4}}
                />
               

                <Button variant="outlined" color="secondary" type="submit">Register </Button>
                
            </form>
            </div>
            <small>Already have an account? <Link to="/login">Login Here</Link></small>
                        </StyledPaper>
                    </Box>
                </Grid>
            </Grid>


        </React.Fragment>
    )
}
 
export default RegisterForm;