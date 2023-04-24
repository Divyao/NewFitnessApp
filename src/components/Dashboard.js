import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container } from 'react-bootstrap'; 
import * as React from 'react';
import  { useState, useEffect } from 'react';
import axios  from 'axios';
import Bodyfat from './Bodyfat';
import { useLocation } from 'react-router-dom';


//import img1 from './img1.jpg';  
function ExerciseCard() {  

    const [bodyfat, setBodyfat] = useState('');
    const [idealWeight, setIdealWeight] = useState('');
    const [bmiValue ,setBMIValue] = useState('');
    const [macroValue ,setMacroValue] = useState('');

    
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
          activitylevel: newUserDet.activity,
          goal:  newUserDet.goals
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    

  return (  
    <div className="container-sm">
     <Container className='p-4'>  
    <Bodyfat bodyfatprop={bodyfat} bmiprop ={bmiValue} idealwtprop={idealWeight} macroprop ={macroValue}/> 
    </Container>
    </div>

  );  
}  
export default ExerciseCard;