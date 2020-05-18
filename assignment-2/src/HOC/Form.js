import React from 'react';

const Form = ({handleChange,handleSubmit}) => {

  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label>
        Country name:
        <input
          type="text"
          name="cName"
          onChange={(e)=>handleChange(e)}
        />
        <input type="submit" value="submit" />
      </label>
    </form>
  );
};

export default Form;