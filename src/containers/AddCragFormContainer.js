import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addCrag } from '../reducers/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const AddCragForm = ({ dispatch, history }) => {
  const [name, setName] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

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
        <label htmlFor="latitude" className="required">Latitude</label>
        <input type="number" id="latitude" name="latitude" value={latitude} className="form-control" required onChange={e => setLatitude(Number(e.target.value))} />
      </div>
      <div className="form-group">
        <label htmlFor="longitude" className="required">Longitude</label>
        <input type="number" id="longitude" name="longitude" value={longitude} className="form-control" required onChange={e => setLongitude(Number(e.target.value))} />
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
