import { connect } from 'react-redux';
import CragList from '../components/CragList';

const mapStateToProps = (state) => ({
  crags: state.crags
});

const CragListContainer = connect(
  mapStateToProps
)(CragList);

export default CragListContainer;
