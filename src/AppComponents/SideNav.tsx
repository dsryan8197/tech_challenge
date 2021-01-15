import React from 'react';
import { Link } from 'react-router-dom'
import { SideNavTabs } from './SideNavChildren/SideNavTabs'

const SideNav: React.FC = () => {
  return (
    <div className='side-nav-container'>
      <nav className='side-nav-bar'>
        <ul className='nav-tab-items'>
          {/* loops over side nav object and creates li element for each object */}
          {SideNavTabs.map((tab, index) => (
              <Link to={tab.path}>
                 <button key={index} title={tab.title}>{tab.title}</button>
              </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default SideNav;