import React from 'react';
import { connect } from 'react-redux';
import { addCrag } from '../actions';

const AddCragForm = ({ dispatch }) => {
  let input;

  return (
    <section role="main">
      <form onSubmit={e => {
        e.preventDefault();

        if (!input.value.trim()) {
          return;
        }

        dispatch(addCrag(input.value));
        input.value = '';
      }}>
        <input type="text" ref={node => {
          input = node;
        }} />
        <button type="submit">
          Add Crag
        </button>
      </form>
    </section>
  );
};

const AddCragFormContainer = connect()(AddCragForm);

export default AddCragFormContainer;
