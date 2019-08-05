import React, { useEffect, useState } from 'react';
import ReadMore from '../ReadMore';

import './style.scss';

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
      <div className={`hero__content ${loaded ? 'visible' : ''}`}>
        <h1>
          Five choices under pressure
        </h1>
        <p>
          In a case of abduction, every choice a detective makes has consequences. Here are just five. Could you do the right thing?
        </p>
      </div>
      <ReadMore content="Scroll to read on" />
    </div>
  );
}

export default Hero;
