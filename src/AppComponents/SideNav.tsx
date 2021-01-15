//imports
import React from 'react';
import { Link } from 'react-router-dom'
import { SideNavTabs } from './SideNavChildren/SideNavTabs'

//component that loops over SideNavTabs and creates buttons/paths for SPA
const SideNav: React.FC = () => {
  return (
    <div className='side-nav-container'>
      <nav className='nav-bar'>
        <ul className='nav-tab-items'>
          {/* loops over side nav object and creates li element for each object */}
          {SideNavTabs.map((tab, index) => (
              <Link className="btnLink" to={tab.path}>
                 <button className="mainButton" key={index} title={tab.title}>{tab.title}</button>
              </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default SideNav;