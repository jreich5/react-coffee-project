import React from 'react';
import PropTypes from 'prop-types';
import SearchCoffeesForm from './SearchCoffeesForm.js';
import AddCoffeeForm from './AddCoffeeForm.js';

CoffeeForms.propTypes = {
  searchCoffees: PropTypes.func
}

function CoffeeForms({ searchCoffees, addCoffee }) {
  return (
    <div>
      <SearchCoffeesForm searchCoffees={searchCoffees} />
      <AddCoffeeForm addCoffee={addCoffee} />
    </div>
  )
}

export default CoffeeForms;