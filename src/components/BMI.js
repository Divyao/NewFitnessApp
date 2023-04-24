import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card,Row, Col} from 'react-bootstrap'; 
import { MDBBadge} from 'mdb-react-ui-kit';

import * as React from 'react';

const BMI = (props) => {
    const { bmiprop } = props;

    return(

        <div className="App">    
    
    <div className="App">  
   <Container className='p-4'>  
     <Row>  
  <Card  
    bg= "success"
    text="white"  
    style={{width:"25%"}}  
    className="m-2"  
  >  
    <Card.Header>BMI</Card.Header>  
    <Card.Body>  
      <Card.Text>  
       BMI: 
      <MDBBadge color='dark'   pill>
        {bmiprop.bmi}
       </MDBBadge>
      </Card.Text> 
      <Card.Text>  
      Healthy Bmi Range:  
      <MDBBadge color='dark' pill>
        {bmiprop['healthy_bmi_range']}
       </MDBBadge>
      </Card.Text>  

    </Card.Body>  
  </Card>  
</Row>  
</Container>  
    </div>  
    </div>

    )
}

export default BMI;




