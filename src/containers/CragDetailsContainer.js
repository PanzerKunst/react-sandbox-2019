import { connect } from 'react-redux';
import CragDetails from '../components/CragDetails';
import { getUrlQueryStrings } from '../services/browser';
import { deleteCrag } from '../reducers/crag/actions';
import { deleteRoutesForCrag } from '../reducers/route/actions';
import { withRouter } from 'react-router';

const mapStateToProps = state => {
  const id = Number(getUrlQueryStrings().id);

  return {
    crag: state.crags.items.find(crag => crag.id === id)
  };
};

const mapDispatchToProps = dispatch => ({
  onDeleteClick: id => {
    dispatch(deleteRoutesForCrag(id));
    dispatch(deleteCrag(id));
  }
});

const CragDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CragDetails));

export default CragDetailsContainer;
