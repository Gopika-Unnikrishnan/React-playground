import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert';

const FormInput = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [sex, setSex] = useState("");
    const [showWarning, setShowWarning] = useState(false)



    useEffect(() => {
        if (age == 0) {
            setShowWarning(false) // this is wrong logic
        } else if(age <=18){
            setShowWarning(true)
        } else {
            setShowWarning(false)
        }
    }, [age])

    const handleSubmitForms = (event) => {
        event.preventDefault();
       const data= {name, age, sex}
       fetch("http://localhost:5000", { 
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
       })
    }

    return (
        <div>
            <h3> plese fill this form</h3>
            <h6> this form isonly for people above 18</h6>
            <Form onSubmit={handleSubmitForms}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="Enter your age" onChange={(event) => setAge(event.target.value)} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Sex</Form.Label>
                    <Form.Select onChange={(event) => setSex(event.target.value)}>
                        <option disabled>Select</option>
                        <option>male</option>
                        <option>female</option>
                        <option>transgender</option>
                    </Form.Select>
                </Form.Group>
                {showWarning ? <Alert variant='danger'> you should be over 18</Alert> : ""}
                <Button variant='success' type="submit" disabled={showWarning}>
                    submit
                </Button>
            </Form>
           
        </div>
    );
};

export default FormInput;


