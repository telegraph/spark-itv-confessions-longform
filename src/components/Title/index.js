import React from 'react';

import './style.scss';

function Title({ copy, img }) {

  return (
    <div className="title" style={{ backgroundImage: `url(${img})` }}>
      <div className="title__inner">
        <h2 className="title__content">
          { copy }
        </h2>
        {/* <img src={img} alt={copy} /> */}
      </div>
    </div>
  );
}

export default Title;
