import logo from './logo.svg';
import './App.css';
//import Todo from './components/Todo';
import InputDetails from './components/Input';
import UserForm from './components/User';
import ExerciseCard from './components/Dashboard';
import RegisterForm from './components/registration';
import Login from './components/Login';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Navbar, Nav} from 'react-bootstrap';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
// import { createContext } from "react";




// export const User = createContext({loginDetails});

function App() {
  return (
    <>
   
    <Routes>
        <Route path='/' element={<RegisterForm/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<InputDetails/>}/>
        <Route path='/user' element={<UserForm/>}/>
        <Route path='/dashboard' element={<ExerciseCard/>}/>
    </Routes>

    
    </>

  );
}

export default App;
