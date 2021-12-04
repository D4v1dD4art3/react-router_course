import React from 'react';
import { Outlet } from 'react-router-dom';

const Welcome = (props) => {
  return (
    <div>
      <h1>The welcome page</h1>

      <Outlet />
    </div>
  );
};

export default Welcome;
