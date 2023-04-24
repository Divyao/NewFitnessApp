import React, { useState, useEffect } from 'react';
import {  MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import {Container , Button} from 'react-bootstrap';  
import {db} from '../firebase';
import { collection, getDocs } from "firebase/firestore";
import  { useNavigate, useLocation  } from 'react-router-dom';


const UserForm = () =>  {

    const [users, setUsers] = useState([]);

    const navigate = useNavigate();
    const location = useLocation();

    const useremailname = location?.state?.email
   // const username = location?.state?.name


    const onNavigHandler = (e,userDet) => {
        e.preventDefault();
        console.log('test')
        console.log("useredet",userDet)
       // console.log("useredet",value2)

        navigate(`/dashboard`,{state:{userDetails:userDet}})

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
    <div >
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
            <Button onClick = {(e) => onNavigHandler(e,user)}>CHECK</Button>

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

            </td>
            </tr>

    )
    }):[]     
        
}
        </MDBTableBody>
        </MDBTable>
        </Container>  
        </div>

  ) };


export default UserForm;


