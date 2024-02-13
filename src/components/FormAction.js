import React, { useState } from 'react';
import './FormAction.css';
const FormAction = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Age: '',
    Address: '',
    EmailID: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted data:', formData);
  };

  return (
    <center>
      <div className='form'>
        <h1>FormAction</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="Name" placeholder='Username' value={formData.Name} onChange={handleChange}/>
          </label>
          <br />
          <label>
            Age:
            <input type="number" name="Age"  placeholder='Age'value={formData.Age} onChange={handleChange}/>
          </label>
          <br />
          <label>
            Address:
            <input type="text" name="Address" placeholder='Address' value={formData.Address} onChange={handleChange} />
          </label>
          <br />
          <label>
            EmailID:
            <input type="email" name="EmailID" placeholder='Email' value={formData.EmailID} onChange={handleChange} />
          </label>
          <br />
          <footer><button type="submit">Submit</button></footer>
        </form>
      </div>
    </center>
  );
};

export default FormAction;
