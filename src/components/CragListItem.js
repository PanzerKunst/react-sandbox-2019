import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CragListItem = ({ id, name }) => (
  <li>
    <Link to={`/crags?id=${id}`}>{name}</Link>
  </li>
);

CragListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

export default CragListItem;
