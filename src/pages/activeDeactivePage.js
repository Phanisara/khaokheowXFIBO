import {useState, useEffect} from 'react';
import {NavLink, Link} from 'react-router-dom'
import Axios from 'axios';
import classes from './css/activeDeactive.module.css'
import Header from '../components/Header';

function ActiveDeactivePage() {

  return(
    <div className={classes.container}>
      <Header></Header>
      <div className={classes.options}>
        <div className={classes.title}>SETTING DATA</div>
          <nav className = {classes.nav}>
                <ul>
                  <li>
                    <NavLink to = '/setting-edit' className = {classes.choose} style = {({ isActive }) => { return{ color: isActive ? "#34550efd" : "#D0D6AA", fontWeight:  isActive ? "bold" : "light"}}}>
                        Edit data
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to = '/setting-delete' className = {classes.choose} style = {({ isActive }) => { return{ color: isActive ? "#34550efd" : " #D0D6AA", fontWeight:  isActive ? "bold" : "light"}}}>
                        Delete data
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to = '/setting-active-deactive' className = {classes.choose} style = {({ isActive }) => { return{ color: isActive ? "#34550efd" :  "#D0D6AA", fontWeight:  isActive ? "bold" : "light"}}}>
                        Active-Deactive data
                    </NavLink>
                  </li>
                </ul>
          </nav>
      </div>
        <div className={classes.containData}>
          <div className={classes.data}>
          </div>
        </div>
    </div>
  );
}

export default ActiveDeactivePage;