import React from 'react';
import PropTypes from 'prop-types';
import SearchCoffeesForm from './SearchCoffeesForm.js';
import AddCoffeeForm from './AddCoffeeForm.js';

CoffeeForms.propTypes = {
  searchCoffees: PropTypes.func
}

function CoffeeForms({ searchCoffees, addCoffee }) {
  return (
    <div className="text-left col-5">
      <SearchCoffeesForm searchCoffees={searchCoffees} />
      <hr/>
      <AddCoffeeForm addCoffee={addCoffee} />
    </div>
  )
}

export default CoffeeForms;