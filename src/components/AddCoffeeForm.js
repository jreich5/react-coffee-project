import React, { useState } from 'react';
import PropTypes from 'prop-types';

AddCoffeeForm.propTypes = {
  addCoffee: PropTypes.func
}

function AddCoffeeForm({ addCoffee }) {
  const [name, setName] = useState('');
  const [roast, setRoast] = useState('light');

  function submitCoffee(e) {
    e.preventDefault();
    addCoffee({name, roast});
  }
  
  return (
    <div>
      <h3>Add Coffee Form</h3>
      <form>
        <input id="name" type="text" placeholder="Add coffee name" onChange={e => setName(e.target.value)}/>
        <select id="roast" onChange={e => setRoast(e.target.value)}>
          <option value="light">Light</option>
          <option value="medium">Medium</option>
          <option value="dark">Dark</option>
        </select>
        <button onClick={submitCoffee}>Add Coffee</button>
      </form>
    </div>
  );
}

export default AddCoffeeForm;