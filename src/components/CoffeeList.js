import React from 'react';
import PropTypes from 'prop-types';
import Coffee from './Coffee.js';

CoffeeList.propTypes = {
  coffees: PropTypes.array.isRequired
}

function CoffeeList({ coffees }) {

  return (
      <section className="col-7">
        <div className="row">
          {coffees.map(coffee => <Coffee coffee={coffee} key={coffee.id} />)}
        </div>
      </section>
    );
}

export default CoffeeList;