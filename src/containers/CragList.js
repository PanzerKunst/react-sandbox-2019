import { connect } from 'react-redux';
import CragListComponent from '../components/CragList';

const mapStateToProps = (state) => ({
  crags: state.crags
});

const CragList = connect(
  mapStateToProps
)(CragListComponent);

export default CragList;
