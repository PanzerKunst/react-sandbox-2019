import React from 'react';
import PropTypes from 'prop-types';

const CragDetails = ({ name, latitude, longitude }) => (
  <article>
    <h1>{name}</h1>
    <article>
      <label>Latitude:</label><span>{latitude}</span>
    </article>
    <article>
      <label>Longitude:</label><span>{longitude}</span>
    </article>
  </article>
);

CragDetails.propTypes = {
  name: PropTypes.string.isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired
};

export default CragDetails;
