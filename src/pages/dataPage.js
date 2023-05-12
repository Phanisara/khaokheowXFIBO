// import {useState, useEffect} from 'react';
// import Axios from 'axios';
import {NavLink} from 'react-router-dom'
import classes from './css/data.module.css'
import Header from '../components/Header';

function DataPage() {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   Axios.get('https://script.google.com/macros/s/AKfycby-x6RUjpANiag6OnYOezHb2eyt9ScZYZEz892fayhV-q6z7_hPgPZTTTIUxXcV0cla/exec?read=Conclusion')
  //     .then(res => setData(res))
  //     .catch(err => console.log(err.response.data))
  // }, []);

  return (
    <div className={classes.container}>
      <Header></Header>
      <div className={classes.options}>
        <div className={classes.title}>DATA TABLE</div>
          <nav className = {classes.nav}>
                <ul>
                  <li>
                    <NavLink to = '/' className = {classes.choose} style = {({ isActive }) => { return{ color: isActive ? "#34550efd" : "#D0D6AA", fontWeight:  isActive ? "bold" : "light"}}}>
                        Data summary
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to = '/data' className = {classes.choose} style = {({ isActive }) => { return{ color: isActive ? "#34550efd" : " #D0D6AA", fontWeight:  isActive ? "bold" : "light"}}}>
                        Specified data
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

export default DataPage;