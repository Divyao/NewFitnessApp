import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import  { useState} from 'react';
import { TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import {db} from '../firebase';
import { collection, addDoc } from "firebase/firestore";
import { useNavigate, useLocation } from "react-router-dom";
import {Button} from 'react-bootstrap';  


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
    return(
      <React.Fragment>
      <CssBaseline />
      <Container className="container-md" fixed>
        <Box sx={{
        height: '150vh', border: '1px dashed grey'
      }}>

          
        <div align="center">
       <form onSubmit={onSubmitHandler}>
       <br/>
       <h1>Enter Details</h1>
       <hr/>
       <br/>
       <TextField  label="User" value={user} onChange=  { (e) => setUser(e.target.value) } />
         <TextField style={{marginLeft: "2%", }} label="Age" value={age} onChange=  { (e) => setAge(e.target.value) } />
         {/* <TextField label="Gender" value={gender} onChange={(e) => setGender(e.target.value)} /> */}
         <TextField  style={{marginLeft: "2%", width:"20%"}}
          id="outlined-select-activity"
          select
          label="gender"
          defaultValue="male"
          placeholder='gender'
          value={gender} 
          onChange={(e) => setGender(e.target.value)}
        >
          {genderList.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

         <br/>
         <br/>
         <TextField  label="Height" value={height} onChange={(e) => setHeight(e.target.value)} />

        <TextField  style={{marginLeft: "2%", }} label="Weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
        <br/>
         <br/>
         <TextField label="neck" value={neck} onChange={(e) => setNeck(e.target.value)} />
         <TextField style={{marginLeft: "2%", }} label="waist" value={waist} onChange={(e) => setWaist(e.target.value)} />
         <TextField style={{marginLeft: "2%", }} label="hip" value={hip} onChange={(e) => setHip(e.target.value)} />
         <br/>
         <br/>
         <TextField
          style={{ width:"20%"}}
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

        <TextField
          style={{marginLeft: "2%", width:"20%"}}
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
         <br/>
         <br/>
       </form>
       </div>
      
    </Box>
      </Container>
    </React.Fragment>
    )
 }

 export default InputDetails;

