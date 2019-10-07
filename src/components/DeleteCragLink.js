import React from 'react';
import PropTypes from 'prop-types';

const DeleteCragLink = ({ onClick }) => (
  <a href="#" onClick={onClick /* eslint-disable-line jsx-a11y/anchor-is-valid */}>x</a>
);

DeleteCragLink.propTypes = {
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default DeleteCragLink;
