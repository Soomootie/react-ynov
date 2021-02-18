import React from 'react';
import {NavLink} from "react-router-dom";

/**
 * 404 Error
 * @return {JSX.Element}
 * @constructor
 */
const NotFound = () => {
  return (
    <div>
      <h1>404 - Not found</h1>
      <NavLink to="/">
        <button>Return to home</button>
      </NavLink>
    </div>
  );
};

export default NotFound;
