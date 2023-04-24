import React, { useState, useEffect } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import {Container ,Card,Row, Col, Button} from 'react-bootstrap';  
import {db} from '../firebase';
import { collection, addDoc, getDocs } from "firebase/firestore";
import  {Link, useNavigate, useLocation  } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';



const UserForm = () =>  {

    const [users, setUsers] = useState([]);

    const navigate = useNavigate();
    const location = useLocation();

    const useremailname = location?.state?.email
    const username = location?.state?.name


    //console.log(location?.state?.email);
    // const onNavigHandler = () => {
    //     const user = users.filter((thisUser )=> thisUser.id == id);
    //     navigate(`/dashboard/:id`,{state:users})

    //    // `/profile/${user.id}`
    // }
    const onNavigHandler = (e,userDet) => {
        e.preventDefault();
        console.log('test')
        console.log("useredet",userDet)
       // console.log("useredet",value2)

        navigate(`/dashboard`,{state:{userDetails:userDet}})

       // `/profile/${user.id}`
    }
    const fetchPost = async () => {
       
        await getDocs(collection(db, "inputdetails"))
            .then((querySnapshot)=>{              
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                    setUsers(newData);                
                //console.log(users, newData);
            })
       
    }


    useEffect(()=>{
        fetchPost();
    }, [])


  return (
    <div className="container-sm">
        <Header/> 
    <Container className='p-4'>  
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
            
          <th scope='col'>Name</th>
          <th scope='col'>Age</th>
          <th scope='col'>Gender</th>
          <th scope='col'>Height</th>
          <th scope='col'>Weight</th>
          <th scope='col'>Waist</th>
          <th scope='col'>Neck</th>
          <th scope='col'>Hip</th>
          <th scope='col'>Activity Level</th>
          <th scope='col'>Goals</th>
          <th scope='col'>Activity</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>

    { useremailname?.includes('admin') &&

        users?users.map((user,i) =>  {
            return( 
            
            (  user?.user?.length > 0  ) &&

                    <tr key={i}>
                    <td>
                        <div className='d-flex align-items-center'>
                        <img
                            src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                            alt=''
                            style={{ width: '45px', height: '45px' }}
                            className='rounded-circle'
                        />
                        <div className='ms-3'>
                            <p className='fw-bold mb-1'>{user.user}</p>
                            <p className='text-muted mb-0'>{user.email}</p>
                        </div>
                        </div>
                    </td>
                    <td className="text-warning">
                    {user.age}
                    </td>
                    <td className="text-warning">
                {user.gender}
            </td>
            <td className="text-warning">
                     {user.height}

            </td>
            <td className="text-warning">
                     {user.weight}
            </td>
            <td className="text-warning">
                    {user.waist}
          </td>
            <td className="text-warning">
                    {user.neck}
            </td>
            <td className="text-warning">
                    {user.hip}
            </td>
            <td className="text-warning"align='center'>
                    {user.activity}
           </td>
            <td className="text-warning">
                    {user.goals}
            </td>
            <td>
            <button onClick = {(e) => onNavigHandler(e,user)}>CHECK</button>
            {/* <Link to= {{pathname:'/dashboard',
                state: [{id: "1",user:"Priya"
                    }]}}>
                <MDBBtn color='warning'  rounded size='sm'>
                    CHECK
                </MDBBtn>
                </Link> */}

            </td>
            </tr>

    )
    }):[]     
        
}
    
    {

    users?users.map((user,i) =>  {
        return( 
          
          (  user?.user?.length > 0 && user?.email === useremailname ) &&

                    <tr key={i}>
                    <td>
                        <div className='d-flex align-items-center'>
                        <img
                            src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                            alt=''
                            style={{ width: '45px', height: '45px' }}
                            className='rounded-circle'
                        />
                        <div className='ms-3'>
                            <p className='fw-bold mb-1'>{user.user}</p>
                            <p className='text-muted mb-0'>{user.email}</p>
                        </div>
                        </div>
                    </td>
                    <td className="text-warning">
                    {user.age}
                    </td>
                    <td className="text-warning">
                {user.gender}
            </td>
            <td className="text-warning">
                     {user.height}

            </td>
            <td className="text-warning">
                     {user.weight}
            </td>
            <td className="text-warning">
                    {user.waist}
          </td>
            <td className="text-warning">
                    {user.neck}
            </td>
            <td className="text-warning">
                    {user.hip}
            </td>
            <td className="text-warning"align='center'>
                    {user.activity}
           </td>
            <td className="text-warning">
                    {user.goals}
            </td>
            <td>
            <Button onClick = {(e) => onNavigHandler(e,user)}>CHECK</Button>
            {/* <Link to= {{pathname:'/dashboard',
                state: [{id: "1",user:"Priya"
                    }]}}>
                <MDBBtn color='warning'  rounded size='sm'>
                    CHECK
                </MDBBtn>
                </Link> */}

            </td>
            </tr>

    )
    }):[]     
        
}
        </MDBTableBody>
        </MDBTable>
        </Container>  
        <Footer/> 
        </div>

  ) };


export default UserForm;


// state: [{id: i, user: user.user, age : user.age,
//     height:user.height,
//     weight:user.weight,
//     gender:user.gender,
//     neck:user.neck,
//     waist:user.waist,
//     hip:user.hip,
//     activity:user.activity,
//     goals:user.goals,
//     }]}}>

//           // <Link to= {`/dashboard/${i}`}> 

// users?.map((data,i)=> return {} (
//     <p key={i}>
//         {data.age}
//     </p>


        

