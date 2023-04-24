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
            <Card.Header>Body fat Percentage</Card.Header>  
            <Card.Body>  
            <Card.Text>  
            Body Fat (U.S. Navy Method): 
            <p className="text-dark">
                {bodyfatprop['Body Fat (U.S. Navy Method)']}
            </p>
            </Card.Text> 

            <Card.Text>  
            Body Fat Category: 
            <p className="text-dark">
                    {bodyfatprop['Body Fat Category']}
            </p>
            </Card.Text>  

            <Card.Text>  
            Body Fat Mass: 
            <p className="text-dark">
                {bodyfatprop['Body Fat Mass']}
            </p>
            </Card.Text> 

            <Card.Text>  
            Lean Body Mass: 
            <p className="text-dark">
                {bodyfatprop['Lean Body Mass']}
            </p>
            </Card.Text>

            <Card.Text>  
            Body Fat (BMI method): 
            <p className="text-dark">
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
            <Card.Header>BMI</Card.Header>  
            <Card.Body>  
            <Card.Text>  
            BMI : 
            <p className="text-dark">
                {bmiprop.bmi}
            </p>
            </Card.Text> 
            <Card.Text>  
            Healthy Bmi Range :   
            <p className="text-dark">
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
            <Card.Header>Ideal Weight</Card.Header>  
            <Card.Body> 
            <Card.Text>  
            Hamwi : 
            <p className="text-dark">
                {idealwtprop.Hamwi}
            </p>
            </Card.Text> 
            <Card.Text>  
            Devine : 
            <p className="text-dark">
                {idealwtprop.Devine}
            </p>
            </Card.Text> 
            <Card.Text>  
            Miller :  
            <p className="text-dark">
                {idealwtprop.Miller}
            </p>
            </Card.Text>  
            <Card.Text>  
            Robinson : 
            <p className="text-dark">
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
             <Card.Header>Macro Calculator</Card.Header>  
            <Card.Body> 
            <Card.Text>  
            Calorie: 
            <p className="text-dark">
                {macroprop?.calorie}
            </p>
            </Card.Text> 
            <Card.Text> Balanced: </Card.Text>
            <Card.Text>  
            Protein : 
            <p className="text-dark">
                {macroprop?.balanced?.protein} 
            </p>
            </Card.Text> 
            <Card.Text>  
            Fat :  
            <p className="text-dark">
                {macroprop?.balanced?.fat}
            </p>
            </Card.Text>  
            <Card.Text>  
            Carbs : 
            <p className="text-dark">
                {macroprop?.balanced?.carbs}
            </p>
            </Card.Text>
            <Card.Text> Low Fat: </Card.Text>
            <Card.Text>  
            Protein : 
            <p className="text-dark">
                {macroprop?.lowfat?.protein} 
            </p>
            </Card.Text> 
            <Card.Text>  
            Fat :  
            <p className="text-dark">
                {macroprop?.lowfat?.fat}
            </p>
            </Card.Text>  
            <Card.Text>  
            Carbs : 
            <p className="text-dark">
                {macroprop?.lowfat?.carbs}
            </p>
            </Card.Text>

            <Card.Text> Low Carbs: </Card.Text>
            <Card.Text>  
            Protein : 
            <p className="text-dark">
                {macroprop?.lowcarbs?.protein} 
            </p>
            </Card.Text> 
            <Card.Text>  
            Fat :  
            <p className="text-dark">
                {macroprop?.lowcarbs?.fat}
            </p>
            </Card.Text>  
            <Card.Text>  
            Carbs : 
            <p className="text-dark">
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

