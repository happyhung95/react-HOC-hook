import React from "react";

import WithApiAccess from "./HOC/WithApiAccess";


const WrappedApp = ({data,error}) => {

  return (
    <div>
      <h2>I am being wrapped by HOC, so warm!</h2>
      <div>{JSON.stringify(data || error)}</div>
    </div>
  );
};

export default WithApiAccess(WrappedApp);