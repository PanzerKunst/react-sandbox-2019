import { connect } from 'react-redux';
import CragDetails from '../components/CragDetails';
import { getUrlQueryStrings } from '../services/browser';
import { deleteCrag } from '../reducers/actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => {
  const id = Number(getUrlQueryStrings().id);
  const routesAtThisCrag = state.routes.filter(route => route.cragId === id);

  return {
    crag: state.crags.find(crag => crag.id === id),
    routes: routesAtThisCrag.sort((a, b) => b.grade.localeCompare(a.grade))
  };
};

const mapDispatchToProps = (dispatch) => ({
  onDeleteClick: id => {
    dispatch(deleteCrag(id));
  }
});

const CragDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CragDetails));

export default CragDetailsContainer;
