import React from 'react';
import PropTypes from 'prop-types';
import CoffeeList from './CoffeeList.js';
import CoffeeForms from './CoffeeForms.js';

CoffeePage.propTypes = {
  coffees: PropTypes.array,
}

function CoffeePage({ coffees, addCoffee, searchCoffees }) {

  return (
    <main className='container text-center mt-5'>
      <h1>Coffee!</h1>
      <hr/>
      <div className='row'>
        <CoffeeList coffees={coffees} />
        <CoffeeForms coffees={coffees} addCoffee={addCoffee} searchCoffees={searchCoffees} />
      </div>
    </main>
  )

}

export default CoffeePage;

