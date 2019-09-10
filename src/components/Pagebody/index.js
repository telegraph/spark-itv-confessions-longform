import React from 'react';
import Sidebar from '../Sidebar';

import makeVisible from '../../hooks/makeVisible';

import './style.scss';

function Pagebody({
  children, anchor, flipSidebar, sidebar, nopadding, nopaddingtop, nopaddingbottom
}) {
  const [bodyContent] = makeVisible();

  return (
    <>
      <div className={`pagebody ${sidebar ? 'with-sidebar' : ''} ${flipSidebar ? 'sidebar-flipped' : ''} ${nopadding ? 'no-padding' : ''} ${nopaddingtop ? 'no-padding-top' : ''} ${nopaddingbottom ? 'no-padding-bottom' : ''}`} id={anchor}>
        <div className="pagebody__content" ref={bodyContent}>
          {children}
        </div>
        {sidebar && <Sidebar sidebar={sidebar} />}
      </div>
    </>
  );
}

export default Pagebody;
