import React from 'react';

import makeVisible from '../../hooks/makeVisible';

import './style.scss';

function Pagebody({
  children, anchor
}) {
  const [bodyContent] = makeVisible();

  return (
    <div className="pagebody" id={anchor}>
      <div className="pagebody__content" ref={bodyContent}>
        {children}
      </div>
    </div>
  );
}

export default Pagebody;
