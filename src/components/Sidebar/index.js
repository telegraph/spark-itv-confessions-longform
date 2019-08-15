import React from 'react';
import './style.scss';
import { sidebars } from '../../data';

export default function Sidebar({ sidebar }) {
  return (
    <aside className="sidebar">
      <div className="sidebar__inner">
        <div className="sidebar__inner__img">
         {sidebar.img && <img loading="lazy" src={sidebar.img} alt="" />}
        </div>
        <div className="sidebar__inner__stickynote">
          <div className="sidebar__inner__stickynote__inner">
            <h3>Police Terms</h3>
            {sidebar.sticky.map(para => (
              <>
                <h4 className="stickynote-title">{para.title}</h4>
                <p className="stickynote-copy">{para.copy}</p>
              </>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};