import React,{useState,useEffect} from 'react'
import "./Header.css"
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from "../../images/Fitness.png"
import user_icon from "../../images/user-icon.png"
import { Container,Row } from 'reactstrap'
import {BsSuitHeart,BsBag} from "react-icons/bs"
import {RxHamburgerMenu} from "react-icons/rx"
import {motion} from "framer-motion";
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import useAuth from '../Auth/useAuth';


const Header = () => {

    const {currentUser} =useAuth();

    //const totalQuantity=useSelector(state=>state.cart.totalQuantity);

const [nav,setNav]=useState(false);
const [showProfile,setShowProfile]=useState(false);
const [showMobileMenu,setShowMobileMenu]=useState(false)

const logout=()=>{
    signOut(auth).then(()=>{toast.success("Logout Successfully") ; navigate('/')}).catch((error)=>{toast.error(error.message)})
}

const navTransition=()=>{
    if(window.scrollY>100)
{
    setNav(true)
}else{
    setNav(false)
}
}

useEffect(()=>{
    window.addEventListener("scroll",navTransition); 
},[])

   

    const navigate=useNavigate();
  return (
    <div style={{ backgroundColor: 'lightblue', color: 'black'}}>
   <header className={`header ${nav && 'sticky__header'}`}>
 <Container  text="black">
    <Row>
        <div className="nav__wrapper">
            <div className="logo">
                <img onClick={()=>{navigate("/")}} src={logo} alt="logo" />
                <div>
                    <h3 className='text-black' onClick={()=>{navigate("/")}}>My Fitness App</h3>
                    {/* <p>Since 1992</p> */}
                </div>
            </div>
            <div className='text-white'onClick={()=>{setShowMobileMenu(!showMobileMenu)}}>
                <ul className='menu'>
                   {/* {NavLinks.map((nav,index)=>
                    (<li className="nav__item" key={index}>
                    <NavLink to={nav.path} className={(navclass)=>navclass.isActive?"nav__active" : "" } >
                        {nav.name}
                    </NavLink>
                    </li>)
                   )}
                     */}
                </ul>
            </div>
            <div className="nav__icons">
            <span className='fav__icon'><BsSuitHeart/>
            <span className='badge'>1</span>
            </span>
                <span className='cart__icon' ><BsBag onClick={()=>navigate("/home")}/>
                </span>
                <div className='profile'>
                <motion.img whileTap={{scale:1.1}} src={user_icon} alt="" onClick={()=>{setShowProfile(!showProfile)}}/>
            
                <div onClick={()=>{setShowProfile(!showProfile)}} className={`profile__actions ${showProfile && 'show__profileActions'}`}>
                    {
                        currentUser?<div  className='text-start text-dark'><div onClick={logout} >Logout</div></div>:
                        (
                            <div className='d-flex flex-column fw-500 text-start text-dark'>
                            <Link to='/login'>Login</Link>
                            </div>)}
                </div>

                </div>
                <div className="mobile__menu" >
                    <span onClick={()=>{setShowMobileMenu(!showMobileMenu)}}><RxHamburgerMenu/></span>
                </div>
            </div>

            
        </div>
    </Row>
 </Container>
    </header>
    </div>
  )
}

export default Header
