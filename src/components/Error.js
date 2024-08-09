import { useRouteError } from "react-router-dom";
import React from "react";
const Error = () => {
  const err = useRouteError();

  return (
    <>
      <div className="error">
        <p>OOPS!</p>
        <p>{err.status + " " + err.statusText}</p>
      </div>
    </>
  );
};

export default Error;
