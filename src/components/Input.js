import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import  { useState, useEffect , useContext} from 'react';
import { TextField,  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import {db} from '../firebase';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import {Button} from 'react-bootstrap';  
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
//import  UserContext from '../Context';







// import axios  from 'axios';
// import Typography from '@mui/material/Typography';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Bodyfat from './Bodyfat';
// import Idealweight from './Idealweight';
// import BMI from './BMI';
// import Macros from './macros';
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import {database} from './firebase/firebase'
// import {ref,push,child,update} from "firebase/database";



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const genderList = [
  {
    value: 'male',
    label: 'male',
  },
  {
    value: 'female',
    label: 'female',
  },

]

const goalsList = [
  {
    value: 'maintain weight',
    label: 'maintain',
  },
  {
    value: 'Mild weight loss',
    label: 'mildlose',
  },
  {
    value: 'Weight loss',
    label: 'weightlose',
  },
  {
    value: 'Extreme weight loss',
    label: 'extremelose',
  },
  {
    value: 'Mild weight gain',
    label: 'mildgain',
  },
  {
    value: 'Weight gain',
    label: 'weightgain',
  },
  {
    value: 'Extreme weight gain',
    label: 'extremegain',
  }
];

const activelyLevelList = [
  {
    value: '1',
    label: '1',
  },
  {
    value: '2',
    label: '2',
  },
  {
    value: '3',
    label: '3',
  },
  {
    value: '4',
    label: '4',
  },
  {
    value: '5',
    label: '5',
  },
  {
    value: '6',
    label: '6',
  },
  {
    value: '7',
    label: '7',
  }
  ]

 const InputDetails = () => {
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [gender, setGender] = useState('');
    const [neck, setNeck] = useState('');
    const [waist, setWaist] = useState('');
    const [hip, setHip] = useState('');
    const [activity, setActivity] = useState('');
    const [goals, setGoals] = useState('');
    const [user, setUser] = useState('');
    const [inputBtn,setInpBtn]=useState(false)
    const [emailInp,setEmailInp]=useState('')
    // const [details, setDetails] = useState({});
    // const [bodyfat, setBodyfat] = useState('');
    // const [idealWeight, setIdealWeight] = useState('');
    // const [bmiValue ,setBMIValue] = useState('');
    // const [macroValue ,setMacroValue] = useState('');
    // const [showDetails, setShowDetails] = useState(false);

    const nav = useNavigate();
    const location = useLocation();

    const state = location.state?.email

    //console.log("getemail" , location.state?.email);

    const onSubmitHandler = (e) => {
        e.preventDefault();

    }

    const handleSubmit = async (e) => {
        
     // console.log(state);
        e.preventDefault();
        setInpBtn(true) 
       // setEmailInp(location.state?.email); 
        let obj = {
            user: user,
            age : age,
            height:height,
            weight:weight,
            gender:gender,
            neck:neck,
            waist:waist,
            hip:hip,
            activity:activity,
            goals:goals,
            email:state
           
        }       
       
        try {
            const docRef = await addDoc(collection(db, "inputdetails"), obj
            );
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }

        setAge('')
        setHeight('');
        setWeight('');
        setGender('');
        setGoals('');
        setActivity('');
        setWaist('');
        setHip('');
        setNeck('');
        setUser('');

        nav("/user",{state:{email:state,name:user}})
        setInpBtn(false)

    }
    // const handleSubmit = () => {
    //     let obj = {
    //         age : age,
    //         height:height,
    //         weight:weight,
    //         gender:gender,
    //         neck:neck,
    //         waist:waist,
    //         hip:hip,
    //         activity:activity,
    //         goals:goals,
    //         user: user
    //     }       
    //     const newPostKey = push(child(ref(database), 'posts')).key;
    //     const updates = {};
    //     updates['/' + newPostKey] = obj
    //     return update(ref(database), updates);

    //     setAge('')
    //     setHeight('');
    //     setWeight('');
    //     setGender('');
    //     setGoals('');
    //     setActivity('');
    //     setWaist('');
    //     setHip('');
    //     setNeck('');
    //     setUser('');
    // }


    return(
      <React.Fragment>
         <Header/> 
      <CssBaseline />
      <Container fixed>
        <Box sx={{ height: '150vh' }} >
        <div align="center">
       <form onSubmit={onSubmitHandler}>
       <br/>
       <h1>Enter Details</h1>
       <TextField  label="User" value={user} onChange=  { (e) => setUser(e.target.value) } />
         <TextField  label="Age" value={age} onChange=  { (e) => setAge(e.target.value) } />
         {/* <TextField label="Gender" value={gender} onChange={(e) => setGender(e.target.value)} /> */}
         <TextField
          id="outlined-select-activity"
          select
          label="gender"
          defaultValue="male"
          value={gender} 
          onChange={(e) => setGender(e.target.value)}
        >
          {genderList.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

         <TextField  label="Height" value={height} onChange={(e) => setHeight(e.target.value)} />
         <br/>
         <br/>
        <TextField  label="Weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
        <br/>
         <br/>
         <TextField label="neck" value={neck} onChange={(e) => setNeck(e.target.value)} />
         <TextField  label="waist" value={waist} onChange={(e) => setWaist(e.target.value)} />
         <TextField  label="hip" value={hip} onChange={(e) => setHip(e.target.value)} />
         <br/>
         <br/>
         <TextField
          id="outlined-select-activity"
          select
          label="Activity Level"
          defaultValue="5"
          value={activity} 
          onChange={(e) => setActivity(e.target.value)}
        >
          {activelyLevelList.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        {/* <TextField label="Activity Level" value={activity} onChange={(e) => setActivity(e.target.value)} /> */}
        {/* <TextField label="goal" value={goals} onChange={(e) => setGoals(e.target.value)} /> */}

        <TextField
          id="outlined-select-goal"
          select
          label="goal"
          defaultValue="extremelose"
          value={goals} 
          onChange={(e) => setGoals(e.target.value)}
        >
          {goalsList.map((option) => (
            <MenuItem key={option.label} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <br/>
         <br/>
        <div className="btn-container">
                        <Button
                            type="submit"
                            className="btn"
                            disabled={inputBtn}
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
        </div>
         {/* <button color="primary"  onClick={()=>handleSubmit()}  >Calculate</button> */}
         {/* <Button variant="contained" color="primary" onClick={handleSubmit}>
           Submit
         </Button> */}
         <br/>
         <br/>
       </form>
       </div>
      
    </Box>
      </Container>
      <Footer />
    </React.Fragment>
    )
 }

 export default InputDetails;