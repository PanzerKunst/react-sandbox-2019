import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCragsIfNeeded } from '../reducers/actions';
import CragListItem from '../components/CragListItem';

const CragList = ({ crags: { isFetching, items, lastUpdated, isError }, dispatch }) => {
  dispatch(fetchCragsIfNeeded());

  return (
    <div>
      {lastUpdated && (
        <span>Last updated at {new Date(lastUpdated).toLocaleTimeString()}.</span>
      )}
      {isFetching && items.length === 0 && <h2>Loading...</h2>}
      {!isError && !isFetching && items.length === 0 && <h2>Empty.</h2>}
      {!isError && items.length > 0 && (
        <ul className="styleless">
          {items.map(crag =>
            <CragListItem
              key={crag.id}
              {...crag}
            />
          )}
        </ul>
      )}
      {isError && <p className="error">Error fetching crags list :'(</p>}
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
    isError: PropTypes.bool.isRequired
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
