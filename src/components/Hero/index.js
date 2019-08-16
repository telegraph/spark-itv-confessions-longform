import React, { useEffect, useState } from 'react';
import ReadMore from '../ReadMore';
import Typist from 'react-typist';

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
        <img className="hero__absoluted__connect" src={connect} alt="connect" />
        <img className="hero__absoluted__f-print-l" src={fingerLeft} alt="fingerprint" />
        <img className="hero__absoluted__f-print-r" src={fingerRight} alt="fingerprint" />
        <img className="hero__absoluted__map" src={map} alt="map" />
        <img className="hero__absoluted__photo" src={photo} alt="Print" />
      </div>
      <div className="hero__content">
        <img className="hero__content__logo" src={confessionLogo} alt="A Confession" />
        <Typist cursor={{show: false}}>
          <h1>
            Five choices under pressure
        </h1>
        </Typist>
        <p className="hero__content__copy">
          In a case of abduction, every choice a detective makes has consequences. Here are just five. Could you do the right thing?
        </p>
      </div>
      <ReadMore content="Scroll to read on" />
    </div>
  );
}

export default Hero;
