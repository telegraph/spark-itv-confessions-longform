import React from 'react';

import './style.scss';

import capB from '../../assets/intro_drop_cap_B.svg';


const Dropcap = ({ children }) => (
  <span className="dropcap">
    <img src={capB} alt="B" />
  </span>
);

export default Dropcap;
