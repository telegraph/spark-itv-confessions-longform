import React from 'react';

import './style.scss';

const Credits = () => (
  <div className="row paragraph transition">
    <div className="content-width">
      <div className="credits">
        <div className="credits__inner">
          <div className="credit-listing">
            Produced by
          <span className="credit-name"><strong>Telegraph Spark</strong></span>
          </div>

          <div className="credit-listing">
            Commissioning Editor
          <span className="credit-name"><strong>Simon Lewis</strong></span>
            Words
          <span className="credit-name"><strong>Chas Newkey-Burden</strong></span>
          </div>

          <div className="credit-listing">
            Head of Design
          <span className="credit-name"><strong>Matt Brant</strong></span>

            Digital Designer
          <span className="credit-name"><strong>Betty Guerra</strong></span>
          </div>

          <div className="credit-listing">
            Digital Developer
          <span className="credit-name"><strong>Alex Hooper</strong></span>

            Project Manager
          <span className="credit-name"><strong>Harrie Dumenil</strong></span>
          </div>

          <div className="credit-listing">
            Picture Editor
          <span className="credit-name"><strong>Alex Kelly</strong></span>

            Web Editor
          <span className="credit-name"><strong>Elin Evans</strong></span>
          </div>

          <div className="credit-listing">
            Sub Editor
          <span className="credit-name"><strong>Tim Cumming</strong></span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Credits;
