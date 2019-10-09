import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCragsIfNeeded } from '../reducers/actions';
import CragListItem from '../components/CragListItem';

const CragList = ({ crags: { isFetching, items, lastUpdated, error }, dispatch }) => {
  dispatch(fetchCragsIfNeeded());

  return (
    <div>
      {lastUpdated && (
        <span>Last updated at {new Date(lastUpdated).toLocaleTimeString()}.</span>
      )}
      {isFetching && items.length === 0 && <h2>Loading...</h2>}
      {error !== 'RECEIVE' && !isFetching && items.length === 0 && <h2>Empty.</h2>}
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
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  crags: state.crags
});

const CragListContainer = connect(
  mapStateToProps
)(CragList);

export default CragListContainer;
