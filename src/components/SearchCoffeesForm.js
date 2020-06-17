import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

SearchCoffeesForm.propTypes = {
  searchCoffees: PropTypes.func
}

function SearchCoffeesForm({ searchCoffees }) {

  const [ roastValue, setRoastValue ] = useState('all');
  const [ nameValue, setNameValue ] = useState('');

  useEffect(() => {
    searchCoffees(roastValue, nameValue);
  }, [roastValue, nameValue]);

  return (
    <form>
      <h3>Search Coffees</h3>
      <div className="form-group">
        <label htmlFor="roastSearch">Filter by roast</label>
        <select className="form-control" name="roastSearch" id="roastSearch" onChange={e => setRoastValue(e.target.value)}>
          <option value="all">All</option>
          <option value="light">Light</option>
          <option value="medium">Medium</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="searchName">Coffee Name</label>    
        <input id="searchName" type="text" className="form-control" placeholder="Search by coffee name" onChange={e => {setNameValue(e.target.value)}} />
      </div>
    </form>
  );
}


export default SearchCoffeesForm;