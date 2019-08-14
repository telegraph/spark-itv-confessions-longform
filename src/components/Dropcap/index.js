import React from 'react';

import './style.scss';

const Dropcap = ({ children }) => (
  <span className="dropcap">
    <span className="dropcap__letter">
      {children}
    </span>
  </span>
);

export default Dropcap;
