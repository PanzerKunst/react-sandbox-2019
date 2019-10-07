import React from 'react';
import PropTypes from 'prop-types';

const RouteList = ({ routes, onDeleteClick }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Grade</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {routes.map(({ id, name, grade }) =>
        <tr key={id}>
          <td>{name}</td>
          <td>{grade}</td>
          <td><a href="#" onClick={() => onDeleteClick(id) /* eslint-disable-line jsx-a11y/anchor-is-valid */}>x</a></td>
        </tr>
      )}
    </tbody>
  </table>
);

RouteList.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      grade: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default RouteList;
