import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert';

const FormInput = () => {
    const [formData,setFormData] = useState({
        name : "",
        email : "",
        gender : "",
        agreement : "",
        selectedOption : ""
    });

    const handleSubmit = (e) =>{
        e.preventDefault();
        return (
            console.log(formData)
        )
    }

    const handleChange = (e) => {
        const {name,value,type,checked} = e.target;
        setFormData({...formData,[name]: type === "checkbox" ? checked : value});
    };

    return(
        <form onSubmit={handleSubmit} className="custom-form">
        <div>
        <label>Name</label>
        <input
        required
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Gender</label>
        <div>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={formData.gender === 'male'}
            onChange={handleChange}
          />
          <label>Male</label>
        </div>
        <div>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={formData.gender === 'female'}
            onChange={handleChange}
          />
          <label>Female</label>
        </div>
      </div>

      <div>
        <label htmlFor="agreement">
          <input
            type="checkbox"
            id="agreement"
            name="agreement"
            checked={formData.agreement}
            onChange={handleChange}
          />
          I agree to the terms and conditions
        </label>
      </div>

      <div>
        <label>Choose an option</label>
        <select
          id="selectedOption"
          name="selectedOption"
          value={formData.selectedOption}
          onChange={handleChange}
        >
          <option value="">Select...</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <button type="submit">
        Submit
      </button>

     </form>
    )
};

export default FormInput;


