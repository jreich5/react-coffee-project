import React from 'react';
import PropTypes from 'prop-types';

SearchCoffeesForm.propTypes = {
  searchCoffees: PropTypes.func
}

function SearchCoffeesForm({ searchCoffees }) {
  return (
    <form>
      <input type="text" placeholder="Enter search text" onChange={e => {
        searchCoffees(e.target.value);
      }} />
    </form>
  );
}

export default SearchCoffeesForm;