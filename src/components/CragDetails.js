import React from 'react';
import PropTypes from 'prop-types';

const CragDetails = ({ crag: { id, name, latitude, longitude }, onDeleteClick, history }) => {
  const onClick = () => {
    onDeleteClick(id);
    history.push('/');
  };

  return (
    <section>
      <article>
        <h1>{name}</h1>
        <div>
          <label>Latitude:</label><span>{latitude}</span>
        </div>
        <div>
          <label>Longitude:</label><span>{longitude}</span>
        </div>
      </article>
      <div className="centered-contents">
        <button onClick={onClick}>Delete Crag</button>
      </div>
    </section>
  );
};

CragDetails.propTypes = {
  crag: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default CragDetails;
