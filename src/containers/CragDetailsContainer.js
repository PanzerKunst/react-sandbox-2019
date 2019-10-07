import { connect } from 'react-redux';
import CragDetails from '../components/CragDetails';
import { getUrlQueryStrings } from '../services/browser';

const mapStateToProps = (state) => {
  const id = Number(getUrlQueryStrings().id);
  return state.crags.find(crag => crag.id === id);
};

const CragDetailsContainer = connect(
  mapStateToProps
)(CragDetails);

export default CragDetailsContainer;
