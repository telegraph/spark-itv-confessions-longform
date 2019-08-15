import React from 'react';

import './style.scss';

function Broughttyb({logo}) {
  return (
    <div className="partner">
      <div className="partner__inner">
        <p>Brought to you by</p>
        <img loading="lazy" src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default Broughttyb;
