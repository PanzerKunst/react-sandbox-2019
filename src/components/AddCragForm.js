import React, { useState } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { addCrag } from '../reducers/actions';

const AddCragForm = ({ dispatch, history }) => {
  const [name, setName] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    dispatch(addCrag(name.trim()));
    history.push('/');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="crag-name" className="required">Name</label>
        <input type="text" id="crag-name" name="crag-name" value={name} className="form-control" onChange={e => setName(e.target.value)} />
      </div>
      <button type="submit">Add Crag</button>
    </form>
  );
};

AddCragForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(AddCragForm);
