import React from "react";
// import data from '../../../assets'
// import {BsClipboardData} from 'react-icon/lib/bs'
//array that holds the icons in sidebar. these are grabbed by sidenav tsx to create icons in li elements
// the path is for react router to render different divs in SPA
export const SideNavTabs = [
  {
    title: "Home",
    path: "/",
    // icon: <img src={data}/>,
    cName: "nav-text",
  },
  {
    title: "Data",
    path: "/data",
    // icon: <img src={logo} />,
    cName: "nav-text",
  },
  {
    title: "Seamus",
    path: "/seamus",
    // icon: <img src={logo} />,
    cName: "nav-text",
  },
];
