import React from 'react';
import PropTypes from 'prop-types';

Coffee.propTypes = {
  coffee: PropTypes.object  
}

function Coffee({ coffee }) {
  return (
      <article className='col-6 text-left'>
        <h3>{coffee.name} <small>{coffee.roast}</small></h3>
      </article>
    )
}

export default Coffee;