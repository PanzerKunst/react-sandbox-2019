import { connect } from 'react-redux';
import RouteList from '../components/RouteList';
import { deleteRoute } from '../reducers/actions';

const mapDispatchToProps = dispatch => ({
  onDeleteClick: id => {
    dispatch(deleteRoute(id));
  }
});

const RouteListContainer = connect(
  undefined,
  mapDispatchToProps
)(RouteList);

export default RouteListContainer;
