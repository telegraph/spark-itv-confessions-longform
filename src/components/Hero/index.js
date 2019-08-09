import React, { useEffect, useState } from 'react';
import ReadMore from '../ReadMore';

import './style.scss';

import confessionLogo from '../../assets/hero/confession_logo.svg';
import connect from '../../assets/hero/connect.svg';
import fingerLeft from '../../assets/hero/fingerprint_left.svg';
import fingerRight from '../../assets/hero/fingerprint_right.svg';
import map from '../../assets/hero/map.png';
import photo from '../../assets/hero/photo.png';

function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    // On mount
    setTimeout(() => {
      setLoaded(true);
    }, 300);
  }, []);

  return (
    <div className="hero">
      <div className="hero__absoluted">
        <img src={connect} alt="" />
        <img src={fingerLeft} alt="" />
        <img src={fingerRight} alt="" />
        <img src={map} alt="" />
        <img src={photo} alt="" />
      </div>
      <div className={`hero__content ${loaded ? 'visible' : ''}`}>
        <img src={confessionLogo} alt="A Confession" />
        <h1>
          Five choices under pressure
        </h1>
        <p className="hero__content__copy">
          In a case of abduction, every choice a detective makes has consequences. Here are just five. Could you do the right thing?
        </p>
      </div>
      <ReadMore content="Scroll to read on" />
    </div>
  );
}

export default Hero;
