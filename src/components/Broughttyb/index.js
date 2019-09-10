import React from 'react';

import './style.scss';

function Broughttyb({logo}) {
  return (
    <div className="partner">
      <div className="partner__inner">
        <p>Brought to you by</p>
        <a href="https://www.itv.com/" target="_blank" rel="nofollow"><img loading="lazy" src={logo} alt="logo" /></a>
      </div>
    </div>
  );
}

export default Broughttyb;
