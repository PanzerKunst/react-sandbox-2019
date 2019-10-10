import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRoutesIfNeeded, deleteRoute } from '../reducers/route/actions';

const RouteList = ({ cragId, routes: { isFetching, items, error }, dispatch }) => {
  dispatch(fetchRoutesIfNeeded());

  return (
    <div>
      {isFetching && items.length === 0 && <h2>Loading routes...</h2>}
      {error !== 'RECEIVE' && !isFetching && (<table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Grade</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.filter(r => r.cragId === cragId).map(({ id, name, grade }) =>
            <tr key={id}>
              <td>{name}</td>
              <td>{grade}</td>
              <td><a href="#" onClick={() => dispatch(deleteRoute(id)) /* eslint-disable-line jsx-a11y/anchor-is-valid */}>x</a></td>
            </tr>
          )}
        </tbody>
      </table>)}
      {error === 'RECEIVE' && <p className="error">Error fetching route list :'(</p>}
      {error === 'DELETE' && <p className="error">Error deleting route :'(</p>}
    </div>
  );
};

RouteList.propTypes = {
  cragId: PropTypes.number.isRequired,
  routes: PropTypes.objectOf(PropTypes.shape({
    isFetching: PropTypes.bool.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      grade: PropTypes.string.isRequired
    })).isRequired,
    error: PropTypes.string
  })).isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  routes: state.routes
});

const RouteListContainer = connect(
  mapStateToProps
)(RouteList);

export default RouteListContainer;
