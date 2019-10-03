import { connect } from 'react-redux';
import DeleteCragLink from '../components/DeleteCragLink';
import { deleteCrag } from '../actions';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(deleteCrag(ownProps.id))
});

const DeleteCragLinkContainer = connect(
  undefined,
  mapDispatchToProps
)(DeleteCragLink);

export default DeleteCragLinkContainer;
