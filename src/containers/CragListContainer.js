import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCragsIfNeeded } from '../reducers/crag/actions';
import CragListItem from '../components/CragListItem';

const CragList = ({ crags: { isFetching, items, lastUpdated, error }, routesError, dispatch }) => {
  dispatch(fetchCragsIfNeeded());

  return (
    <div>
      {lastUpdated && (
        <span>Last updated at {new Date(lastUpdated).toLocaleTimeString()}.</span>
      )}
      {isFetching && <h2>Loading crags...</h2>}
      {error !== 'RECEIVE' && !isFetching && items.length === 0 && <h2>No crags</h2>}
      {error !== 'RECEIVE' && items.length > 0 && (
        <ul className="styleless">
          {items.map(crag =>
            <CragListItem
              key={crag.id}
              {...crag}
            />
          )}
        </ul>
      )}
      {error === 'RECEIVE' && <p className="error">Error fetching crag list :'(</p>}
      {error === 'DELETE' && <p className="error">Error deleting crag :'(</p>}
      {error === 'ADD' && <p className="error">Error adding crag :'(</p>}
      {routesError === 'DELETE_FOR_CRAG' && <p className="error">Error deleting crag's routes :'(</p>}
    </div>
  );
};

CragList.propTypes = {
  crags: PropTypes.objectOf(PropTypes.shape({
    isFetching: PropTypes.bool.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired
    })).isRequired,
    lastUpdated: PropTypes.object,
    error: PropTypes.string
  })).isRequired,
  routesError: PropTypes.string,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  crags: state.crags,
  routesError: state.routes.error
});

const CragListContainer = connect(
  mapStateToProps
)(CragList);

export default CragListContainer;
