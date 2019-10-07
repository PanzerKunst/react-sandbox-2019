import React, { useState } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { addCrag } from '../reducers/actions';
import { connect } from 'react-redux';

const AddCragForm = ({ dispatch, history }) => {
  const [ name, setName ] = useState('');
  const [ latitude, setLatitude ] = useState('');
  const [ longitude, setLongitude ] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    dispatch(addCrag({
      name: name.trim(),
      latitude,
      longitude
    }));

    history.push('/');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="crag-name" className="required">Name</label>
        <input type="text" id="crag-name" name="crag-name" value={name} className="form-control" required onChange={e => setName(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="crag-latitude" className="required">Latitude</label>
        <input type="number" id="crag-latitude" name="crag-latitude" value={latitude} className="form-control" required onChange={e => setLatitude(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="crag-longitude" className="required">Longitude</label>
        <input type="number" id="crag-longitude" name="crag-longitude" value={longitude} className="form-control" required onChange={e => setLongitude(e.target.value)} />
      </div>
      <button type="submit">Add Crag</button>
    </form>
  );
};

AddCragForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

const AddCragFormContainer = connect()(withRouter(AddCragForm));

export default AddCragFormContainer;
