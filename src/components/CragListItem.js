import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DeleteCragLinkContainer from '../containers/DeleteCragLinkContainer';

const CragListItem = ({ id, name }) => (
  <li>
    <Link to={`/crags?id=${id}`}>{name}</Link>
    <DeleteCragLinkContainer id={id} />
  </li>
);

CragListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

export default CragListItem;
