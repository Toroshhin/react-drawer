import React from 'react';
import state from '../store';

const DashBoard = () => {

  return (
    <div onLoad={() => state.items[1].active = true}>
      Dashboard
    </div>
  );
}

export default DashBoard;
