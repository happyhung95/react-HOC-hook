import React, { useState } from "react";

import useApi from "../Hooks/useApi";
import useForm from "../Hooks/useForm";
import Form from "./Form";

const WithApiAccess = (Component) => {
  function Wrapper() {
    const [searchKey, setSearchKey] = useState("");
    const [value, handleChange] = useForm();
    const [data, error] = useApi(searchKey);
    const handleSubmit = (e) => {
      e.preventDefault();
      setSearchKey(value);
    };
    return (
      <div>
        <h2> I am the wrapper, I'll wrap you!</h2>
        <Form handleChange={handleChange} handleSubmit={handleSubmit} />
        <Component data={data} error={error} />
      </div>
    );
  }
  return Wrapper;
};

export default WithApiAccess;
