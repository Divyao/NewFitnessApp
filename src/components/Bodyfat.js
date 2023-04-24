import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card,Row} from 'react-bootstrap'; 

import * as React from 'react';

const Bodyfat = (props) => {

    const { bodyfatprop } = props;
    const { bmiprop } = props;
    const { idealwtprop } = props;
    const { macroprop } = props;




    return(

        <div className="App">       
        <div className="App">  
        <Container className='p-4'>  
            <Row>  
        <Card  
            bg= "success"
            text="white"  
            style={{width:"30%"}}  
            className="m-2"  
        >  
            <Card.Header className="text-dark" >Body fat Percentage</Card.Header>  
            <Card.Body>  
            <Card.Text className="text-dark">  
            Body Fat (U.S. Navy Method): 
            <p className="text-white">
                {bodyfatprop['Body Fat (U.S. Navy Method)']}
            </p>
            </Card.Text> 

            <Card.Text className="text-dark">  
            Body Fat Category: 
            <p className="text-white">
                    {bodyfatprop['Body Fat Category']}
            </p>
            </Card.Text>  

            <Card.Text className="text-dark">  
            Body Fat Mass: 
            <p className="text-white">
                {bodyfatprop['Body Fat Mass']}
            </p>
            </Card.Text> 

            <Card.Text className="text-dark">  
            Lean Body Mass: 
            <p className="text-white">
                {bodyfatprop['Lean Body Mass']}
            </p>
            </Card.Text>

            <Card.Text className="text-dark">  
            Body Fat (BMI method): 
            <p className="text-white">
            {bodyfatprop['Body Fat (BMI method)']} 
            </p>
            </Card.Text> 
            </Card.Body>  
        </Card>  
        <Card  
            bg="warning" 
            text="white"  
            style={{width:"30%"}}  
            className="m-2"  
        >  
            <Card.Header className="text-dark">BMI</Card.Header>  
            <Card.Body>  
            <Card.Text className="text-dark">  
            BMI : 
            <p className="text-white">
                {bmiprop.bmi}
            </p>
            </Card.Text> 
            <Card.Text className="text-dark">  
            Healthy Bmi Range :   
            <p className="text-white">
                {bmiprop['healthy_bmi_range']}
            </p>
            </Card.Text>  
            </Card.Body> 

        </Card>  
        <Card  
            bg="info" 
            text="white"  
            style={{width:"30%"}}  
            className="m-2"  
        >  
            <Card.Header className="text-dark">Ideal Weight</Card.Header>  
            <Card.Body> 
            <Card.Text className="text-dark">  
            Hamwi : 
            <p className="text-white">
                {idealwtprop.Hamwi}
            </p>
            </Card.Text> 
            <Card.Text className="text-dark">  
            Devine : 
            <p className="text-white">
                {idealwtprop.Devine}
            </p>
            </Card.Text> 
            <Card.Text className="text-dark">  
            Miller :  
            <p className="text-white">
                {idealwtprop.Miller}
            </p>
            </Card.Text>  
            <Card.Text className="text-dark">  
            Robinson : 
            <p className="text-white">
                {idealwtprop.Robinson}
            </p>
            </Card.Text>
            </Card.Body> 

        </Card>  
        <Card  
            bg="secondary" 
            text="white"  
            style={{width:"30%"}}  
            className="m-2"  
        >  
             <Card.Header className="text-dark">Macro Calculator</Card.Header>  
            <Card.Body> 
            <Card.Title className="text-dark">  
            Calorie: 
            <p className="text-white">
                {macroprop?.calorie}
            </p>
            </Card.Title> 
            <Card.Title className="text-dark"> Balanced </Card.Title>
            <Card.Text className="text-dark">  
            Protein : 
            <p className="text-white">
                {macroprop?.balanced?.protein} 
            </p>
            </Card.Text> 
            <Card.Text className="text-dark">  
            Fat :  
            <p className="text-white">
                {macroprop?.balanced?.fat}
            </p>
            </Card.Text>  
            <Card.Text className="text-dark">  
            Carbs : 
            <p className="text-white">
                {macroprop?.balanced?.carbs}
            </p>
            </Card.Text>
            <Card.Title className="text-dark"> Low Fat </Card.Title>
            <Card.Text className="text-dark">  
            Protein : 
            <p className="text-white">
                {macroprop?.lowfat?.protein} 
            </p>
            </Card.Text> 
            <Card.Text className="text-dark">  
            Fat :  
            <p className="text-white">
                {macroprop?.lowfat?.fat}
            </p>
            </Card.Text>  
            <Card.Text className="text-dark">  
            Carbs : 
            <p className="text-white">
                {macroprop?.lowfat?.carbs}
            </p>
            </Card.Text>

            <Card.Title className="text-dark"> Low Carbs </Card.Title>
            <Card.Text className="text-dark">  
            Protein : 
            <p className="text-white">
                {macroprop?.lowcarbs?.protein} 
            </p>
            </Card.Text> 
            <Card.Text className="text-dark">  
            Fat :  
            <p className="text-white">
                {macroprop?.lowcarbs?.fat}
            </p>
            </Card.Text>  
            <Card.Text className="text-dark">  
            Carbs : 
            <p className="text-white">
                {macroprop?.lowcarbs?.carbs}
            </p>
            </Card.Text>
            </Card.Body> 
  
        </Card>  
        </Row>  
        </Container>  
            </div>  
            </div>

    )
}

export default Bodyfat;





// <div >
// <Card sx={{ maxWidth: 600 }}>
//   <CardContent>
//     <Typography variant='h4'  gutterBottom>
//     Body Fat percentage
//     </Typography>
//     <Typography variant="h6">
//       <br />
//       Body Fat (U.S. Navy Method): {bodyfatprop['Body Fat (U.S. Navy Method)']}
//       </Typography>
//       <Typography variant="h6">Body Fat Category: {bodyfatprop['Body Fat Category']} </Typography>
//       <Typography variant="h6">Body Fat Mass:  {bodyfatprop['Body Fat Mass']} </Typography>
//       <Typography variant="h6">Lean Body Mass:  {bodyfatprop['Lean Body Mass']} </Typography>
//       <Typography variant="h6">Body Fat (BMI method):  {bodyfatprop['Body Fat (BMI method)']} </Typography>
//     </CardContent>
//   <CardActions>
//   </CardActions>
// </Card>
// </div>

