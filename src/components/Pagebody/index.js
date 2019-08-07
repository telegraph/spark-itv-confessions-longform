import React from 'react';
import Sidebar from '../Sidebar';

import makeVisible from '../../hooks/makeVisible';

import './style.scss';

function Pagebody({
  children, anchor, sidebar, nopadding, nopaddingtop
}) {
  const [bodyContent] = makeVisible();

  return (
    <>
      <div className={`pagebody ${sidebar ? 'with-sidebar' : ''} ${nopadding ? 'no-padding' : ''} ${nopaddingtop ? 'no-padding-top' : ''}`} id={anchor}>
        <div className="pagebody__content" ref={bodyContent}>
          {children}
        </div>
        {sidebar && <Sidebar />}
      </div>
    </>
  );
}

export default Pagebody;
