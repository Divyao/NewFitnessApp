import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card,Row, Col} from 'react-bootstrap'; 
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
//import Container  from '@mui/material/Container';
import  { useState, useEffect } from 'react';
import axios  from 'axios';
import Bodyfat from './Bodyfat';
import { useLocation , useParams} from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import  {Link, useNavigate  } from 'react-router-dom';






import { TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
//import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Bodyfat from './Bodyfat';
// import Idealweight from './Idealweight';
// import { styled } from '@mui/material/styles';
// import Grid from '@mui/material/Grid';
// import BMI from './BMI';
// import Macros from './macros';
// import MenuItem from '@mui/material/MenuItem';
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";



//import img1 from './img1.jpg';  
function ExerciseCard() {  

    const [details, setDetails] = useState({});
    const [bodyfat, setBodyfat] = useState('');
    const [idealWeight, setIdealWeight] = useState('');
    const [bmiValue ,setBMIValue] = useState('');
    const [macroValue ,setMacroValue] = useState('');
    const [showDetails, setShowDetails] = useState(false);

    // const {id}= useParams();
    // const location = useLocation();
    // const state = location.state;
    // const check = state.map((map) => {
    //     console.log(map.user);
    //     console.log(map.age);
    // })

    // const user = state.filter((thisProject )=> thisProject.id == id);

  //  console.log(user)
    // console.log(check);

    const nav = useNavigate();
    const location = useLocation();

    const newUserDet = location.state?.userDetails

    console.log(newUserDet);

    const options = {

                method: 'GET',
                url: 'https://fitness-calculator.p.rapidapi.com/bodyfat',
                params: {age: newUserDet.age,
                          height: newUserDet.height,
                          weight: newUserDet.weight,
                          gender: newUserDet.gender,
                          neck: newUserDet.neck,
                          waist: newUserDet.waist,
                          hip: newUserDet.hip},
                
                headers: {
                  'X-RapidAPI-Key': '4a0b82339bmshb4ed0c2cc0b76ebp1156aajsn3acd1ddc6749',
                  'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
                }
    };

    const bmi = {
                method: 'GET',
                url: 'https://fitness-calculator.p.rapidapi.com/bmi',
                params: {age: "25", weight: "70", height: "170"},
                headers: {
                  'X-RapidAPI-Key': '4a0b82339bmshb4ed0c2cc0b76ebp1156aajsn3acd1ddc6749',
                  'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
                }
    };

    const idealWtreq = {
        method: 'GET',
        url: 'https://fitness-calculator.p.rapidapi.com/idealweight',
        params: {
          height: newUserDet.height,
          gender: newUserDet.gender,
},
        headers: {
          'X-RapidAPI-Key': '4a0b82339bmshb4ed0c2cc0b76ebp1156aajsn3acd1ddc6749',
          'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
        }
    }

    const macroNutri = {
        method: 'GET',
        url: 'https://fitness-calculator.p.rapidapi.com/macrocalculator',
        params: {

          age: newUserDet.age,
          height: newUserDet.height,
          weight: newUserDet.weight,
          gender: newUserDet.gender,
          activitylevel: newUserDet.activitylevel,
          goal:  newUserDet.goal
        },
        headers: {
          'X-RapidAPI-Key': '4a0b82339bmshb4ed0c2cc0b76ebp1156aajsn3acd1ddc6749',
          'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
        }
    };

             
    const macroData = async () => {
        try {
                   await axios.request(macroNutri).then(function (response) {
                    setMacroValue(response.data.data)
                    })
            } catch (e) {
                    console.log(e);
            }
    };

    const idealWtData = async () => {
        try {
                   await axios.request(idealWtreq).then(function (response) {
                    setIdealWeight(response.data.data)
                    })
            } catch (e) {
                    console.log(e);
            }
    };


    axios.request(macroNutri).then(function (response) {
        
        setMacroValue(response.data.data)
      }).catch(function (error) {
        console.error(error);
      });
   
    const bmiUserData = async () => {
        try {
                   await axios.request(bmi).then(function (response) {
                    setBMIValue(response.data.data)
                    })
            } catch (e) {
                    console.log(e);
            }
    };

                
    const getUserData = async () => {
        try {
                   await axios.request(options).then(function (response) {
                    setBodyfat(response.data.data)
                    })
            } catch (e) {
                    console.log(e);
            }
            };

    useEffect(() => {
        window.scrollTo(0,0)
        getUserData();
        bmiUserData();
        idealWtData();
        macroData();
    }, []);

    

  return (  
    <div className="container-sm">
     <Header/> 
     <Container className='p-4'>  
    <Bodyfat bodyfatprop={bodyfat} bmiprop ={bmiValue} idealwtprop={idealWeight} macroprop ={macroValue}/> 
    </Container>
    <Footer/>
    </div>

  );  
}  
export default ExerciseCard;