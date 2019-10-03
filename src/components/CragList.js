import React from 'react';
import PropTypes from 'prop-types';
import Crag from './Crag';

const CragList = ({ crags }) => (
  <ul>
    {crags.map(crag =>
      <Crag
        key={crag.id}
        {...crag}
      />
    )}
  </ul>
);

CragList.propTypes = {
  crags: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired
};

export default CragList;
