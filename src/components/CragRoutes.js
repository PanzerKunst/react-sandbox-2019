import React from 'react';
import PropTypes from 'prop-types';

const CragRoutes = ({ routes }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Grade</th>
      </tr>
    </thead>
    <tbody>
      {routes.map(({ id, name, grade }) =>
        <tr key={id}>
          <td>{name}</td>
          <td>{grade}</td>
        </tr>
      )}
    </tbody>
  </table>
);

CragRoutes.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      grade: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default CragRoutes;
