import React, { useState } from "react";

import useForm from "./Hooks/useForm";
import useApi from "./Hooks/useApi";


const App = () => {
  const [value, handleChange] = useForm();
  const [name, setName] = useState('');
  const [data, error] = useApi(name);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(value);
  };

  return (
    <div>
      <h2>I am naked, not wrapped by anything. So cold!</h2>
      <form onSubmit={handleSubmit}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>
          Country name:
          <input
            type="text"
            name="cName"
            onChange={handleChange}
          />
          <input type="submit" value="submit" />
        </label>
      </form>
      <div>{JSON.stringify(data || error)}</div>
    </div>
  );
};

export default App;
