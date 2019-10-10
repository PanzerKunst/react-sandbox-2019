import React from 'react';
import PropTypes from 'prop-types';
import RouteListContainer from '../containers/RouteListContainer';
import AddRouteFormContainer from '../containers/AddRouteFormContainer';

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

      <RouteListContainer cragId={id} />
      <AddRouteFormContainer cragId={id} />

      <div className="centered-contents">
        <button onClick={onClick}>Delete Crag</button>
      </div>
    </section>
  );
};

CragDetails.propTypes = {
  crag: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
  })).isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default CragDetails;
