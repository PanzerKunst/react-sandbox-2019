import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { getUrlQueryStrings } from '../services/browser';
import { fetchCragsIfNeeded, deleteCrag } from '../reducers/crag/actions';
import { deleteRoutesForCrag } from '../reducers/route/actions';
import RouteListContainer from '../containers/RouteListContainer';
import AddRouteFormContainer from '../containers/AddRouteFormContainer';

const CragDetails = ({ crag, cragsError, dispatch, history }) => {
  dispatch(fetchCragsIfNeeded());

  if (!crag) {
    if (cragsError === 'RECEIVE') return (<p className="error">Error fetching crag list :'(</p>);
    return null;
  }

  const { id, name, latitude, longitude } = crag;

  const onClick = () => {
    dispatch(deleteRoutesForCrag(id));
    dispatch(deleteCrag(id));

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
  })),
  cragsError: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  const id = Number(getUrlQueryStrings().id);

  return {
    crag: state.crags.items.find(crag => crag.id === id),
    cragsError: state.crags.error
  };
};

const CragDetailsContainer = connect(
  mapStateToProps
)(withRouter(CragDetails));

export default CragDetailsContainer;
