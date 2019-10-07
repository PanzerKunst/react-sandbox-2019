import { connect } from 'react-redux';
import CragDetails from '../components/CragDetails';
import { getUrlQueryStrings } from '../services/browser';
import { deleteCrag } from '../reducers/actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => {
  const id = Number(getUrlQueryStrings().id);
  return { crag: state.crags.find(crag => crag.id === id) };
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
