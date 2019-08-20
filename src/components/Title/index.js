import React from 'react';

import './style.scss';

function Title({ copy, img, highlighted, highlightImg }) {
  return (
    <div className="title" style={{ backgroundImage: `url(${img})` }}>
      <div className="title__inner">
        <h2 className="title__content">
          { copy } <span className="highlight">
            <span className={`highlight__background ${highlighted}`} style={{ backgroundImage: `url(${highlightImg})` }}></span>
            { highlighted }
          </span>
        </h2>
      </div>
    </div>
  );
}

export default Title;
