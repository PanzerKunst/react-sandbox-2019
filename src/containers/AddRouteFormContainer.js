import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addRoute } from '../reducers/actions';
import { connect } from 'react-redux';

const AddRouteForm = ({ cragId, dispatch }) => {
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    dispatch(addRoute({
      name: name.trim(),
      grade,
      cragId
    }));

    setName('');
    setGrade('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="route-name" className="required">Name</label>
        <input type="text" id="route-name" name="route-name" value={name} className="form-control" required onChange={e => setName(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="grade" className="required">Grade</label>
        <input type="text" id="grade" name="grade" value={grade} className="form-control" required onChange={e => setGrade(e.target.value.trim())} />
      </div>
      <button type="submit">Add Route</button>
    </form>
  );
};

AddRouteForm.propTypes = {
  cragId: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
};

const AddRouteFormContainer = connect()(AddRouteForm);

export default AddRouteFormContainer;
