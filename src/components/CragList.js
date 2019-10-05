import React from 'react';
import PropTypes from 'prop-types';
import CragListItem from './CragListItem';

const CragList = ({ crags }) => (
  <ul className="styleless">
    {crags.map(crag =>
      <CragListItem
        key={crag.id}
        {...crag}
      />
    )}
  </ul>
);

CragList.propTypes = {
  crags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default CragList;
