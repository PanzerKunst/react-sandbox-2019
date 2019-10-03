import React from 'react';
import PropTypes from 'prop-types';
import DeleteCragLinkContainer from '../containers/DeleteCragLinkContainer';

const CragListItem = ({ id, name }) => (
  <li>
    <span>{name}</span>
    <DeleteCragLinkContainer id={id} />
  </li>
);

CragListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

export default CragListItem;
