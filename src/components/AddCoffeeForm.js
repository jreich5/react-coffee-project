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
      <h3>Add Coffee</h3>
      <form>
        <div className="form-group">
          <label htmlFor="add-coffee-name-inpt">Coffee Name</label>
          <input id="add-coffee-name-inpt" type="text" className="form-control" placeholder="Enter new coffee name" onChange={e => setName(e.target.value)}/>
        </div>
        <label htmlFor="add-coffee-roast-inpt">Coffee Roast</label>
        <select className="form-control" id="add-coffee-roast-inpt" onChange={e => setRoast(e.target.value)}>
          <option value="light">Light</option>
          <option value="medium">Medium</option>
          <option value="dark">Dark</option>
        </select>
        <button className="btn btn-primary btn-block mt-3" onClick={submitCoffee}>Add Coffee</button>
      </form>
    </div>
  );
}

export default AddCoffeeForm;