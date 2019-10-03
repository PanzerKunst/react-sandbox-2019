import React from 'react';
import PropTypes from 'prop-types';

const Crag = ({ name }) => (
  <li>
    {name}
  </li>
);

Crag.propTypes = {
  name: PropTypes.string.isRequired
};

export default Crag;
