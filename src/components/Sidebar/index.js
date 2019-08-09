import React from 'react';
import './style.scss';
import { sidebars } from '../../data';

export default function Sidebar({ sidebar }) {
  return (
    <aside className="sidebar">
      <div className="sidebar__inner">
        <div className="sidebar__inner__img">
         {sidebar.img && <img src={sidebar.img} alt="" />}
        </div>
        <div className="sidebar__inner__stickynote">
          <div className="sidebar__inner__stickynote__inner">
            <h3>Police Terms</h3>
            {sidebar.sticky.map(para => (
              <>
                <h4>{para.title}</h4>
                <p>{para.copy}</p>
              </>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};