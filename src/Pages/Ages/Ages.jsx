import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

const AgeInput = () => {
    const [age, setAge] = useState(0);
    const [showWarning, setWarning]= useState(false)

    const handleInputChange = (event) => {
        setAge(event.target.value);
    };
    
    useEffect(() => {
        if(age<18){
            setWarning(true)
        } else{
            setWarning(false)
        }
    }, [age])

    return (
        <div>
            <label htmlFor="ageInput">Enter Age: </label>
            <input
                type="text"
                id="ageInput"
                value={age}
                onChange={handleInputChange}
            />
            <p>{`Age: ${age}`}</p>
            {showWarning ? <p>you should be over 18</p> :<p>you are ok</p>}
<Button variant='success'>
    submit 
</Button>
        </div>
    );
};

export default AgeInput;


