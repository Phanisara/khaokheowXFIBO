import {useState, useEffect} from 'react';
import Axios from 'axios';
import {NavLink} from 'react-router-dom'
import classes from './css/data.module.css';
import Header from '../components/Header';
import { Table } from 'semantic-ui-react';

function DataPage() {
  const [sumData, setSumData] = useState(null);
  const [data, setData] = useState(null);
  const [name, setName] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    Axios.get('https://script.google.com/macros/s/AKfycbxdoWoNztaIT9qXGw3CM_igJi1kZl8u0d5VBvpV_TBAlMR_9pU8gsTNgBVLbdCky6Dq/exec?readSheet=Conclusion')
    .then(res => setSumData(res.data));
  }, []);

  if (!sumData) {
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
            <div className={classes.dataPosition}> 
              <div className={classes.containDropdown}>
                <div className={classes.containDropdownList}>
                  <select className={classes.selectID}>
                    <option value="">Select ID of system</option>
                  </select>
                  <select className={classes.selectID}>
                    <option value="">Select Name of Animal</option>
                  </select>
                </div>
              </div>
              <div className={classes.containTable}>
                <Table className={classes.table}>
                      <thead>
                        <tr>
                          <th className={classes.thID1}>ID</th>
                          <th className={classes.thID3}>Date</th>
                          <th className={classes.thID3}>Time</th>
                          <th className={classes.thID5}>Name</th>
                          <th className={classes.thID5}>Type animal</th>
                          <th className={classes.thID5}>Body weight (kg.)</th>
                          <th className={classes.thID5}>Food weight (kg.)</th>
                          <th className={classes.thID5}>Eating time (min)</th>
                        </tr>
                      </thead>
                  </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  console.log(sumData); // logging the data for testing

  const allID = [];
  for (let i = 0; i < sumData.length; i++) {
    if (!allID.includes(sumData[i].ID)) {
      allID.push(sumData[i].ID);
    }
  }
  allID.sort((a, b) => a - b); // Sort the array in ascending order
  console.log(allID);

  const changeID = (e) => {
    let nameList = [];
    for (let j = 0; j < sumData.length; j++) { // use different variable name for the inner loop
      if (String(sumData[j].ID) === String(e.target.value)) {
        nameList.push(sumData[j].Name); // store the ID and Name in an object
      }
    } 
    nameList = nameList.sort();
    console.log(nameList);
    setName(nameList);
  }

  const changeName = (e) => {
    if(e.target.value !== null){
      getData(e.target.value);
    }
  }

  const getData = (e) => {
    Axios.get(`https://script.google.com/macros/s/AKfycbxdoWoNztaIT9qXGw3CM_igJi1kZl8u0d5VBvpV_TBAlMR_9pU8gsTNgBVLbdCky6Dq/exec?readSheet=${e}`)
      .then(res => setData(res.data)); 
  }
  console.log(data);

  let records = [];
  let number = [];
  let lastIndex = 0;
  let firstIndex = 0;

  if(data !== null){
    const recordPerPage = 9;
    lastIndex = currentPage * recordPerPage;
    firstIndex = lastIndex - recordPerPage;
    records = data.slice(firstIndex, lastIndex);
    const npage = Math.ceil(data.length / recordPerPage);
    number = [...Array(npage + 1).keys()].slice(1)
  }

  if(!data){
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
              <div className={classes.dataPosition}> 
                <div className={classes.containDropdown}>
                  <div className={classes.containDropdownList}>
                    <select className={classes.selectID} onChange={changeID}>
                      <option value="">Select ID of system</option>
                      {allID.map((val, idx) => (
                        <option key={idx} value={val}>{val}</option>))
                      }
                    </select>
                    <select className={classes.selectID} onChange={changeName}>
                      <option value="">Select Name of Animal</option>
                      {name.map((val, idx) => (
                        <option key={idx} value={val}>{val}</option>))
                      }
                    </select>
                  </div>
                </div>
                <div className={classes.containTable}>
                  <Table className={classes.table}>
                    <thead>
                      <tr>
                        <th className={classes.thID1}>ID</th>
                        <th className={classes.thID3}>Date</th>
                        <th className={classes.thID3}>Time</th>
                        <th className={classes.thID5}>Name</th>
                        <th className={classes.thID5}>Type animal</th>
                        <th className={classes.thID5}>Body weight (kg.)</th>
                        <th className={classes.thID5}>Food weight (kg.)</th>
                        <th className={classes.thID5}>Eating time (min)</th>
                      </tr>
                    </thead>
                  </Table>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }

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
            <div className={classes.dataPositions}> 
              <div className={classes.containDropdown}>
                <div className={classes.containDropdownList}>
                  <select className={classes.selectID} onChange={changeID}>
                    <option value="">Select ID of system</option>
                    {allID.map((val, idx) => (
                      <option key={idx} value={val}>{val}</option>))
                    }
                  </select>
                  <select className={classes.selectID} onChange={changeName}>
                    <option value="">Select Name of Animal</option>
                    {name.map((val, idx) => (
                      <option key={idx} value={val}>{val}</option>))
                    }
                  </select>
                </div>
              </div>
              <div className={classes.containTable}>
                <Table className={classes.table}>
                  <thead>
                    <tr>
                      <th className={classes.thID1}>ID</th>
                      <th className={classes.thID3}>Date</th>
                      <th className={classes.thID3}>Time</th>
                      <th className={classes.thID5}>Name</th>
                      <th className={classes.thID5}>Type animal</th>
                      <th className={classes.thID5}>Body weight (kg.)</th>
                      <th className={classes.thID5}>Food weight (kg.)</th>
                      <th className={classes.thID5}>Eating time (min)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {records.map((val, idx) => (
                      <tr key={idx}>
                        <td className={classes.thID2}>{val.ID}</td>
                        <td className={classes.thID4}>{val.Date}</td>
                        <td className={classes.thID4}>{val.Time}</td>
                        <td className={classes.thID6}>{val.Name}</td>
                        <td className={classes.thID6}>{val.TypeAnimal}</td>
                        <td className={classes.thID6}>{val.BodyWeight}</td>
                        <td className={classes.thID6}>{val.FoodWeight}</td>
                        <td className={classes.thID6}>{val.ETP}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <nav className={classes.containPagination}>
                    <ul className={classes.pagination}>
                      <a href='/data/#' className={classes.pageLink} onClick={prePage}>previous</a>
                      {
                        number.map((val, idx) => (
                          <li className={`${classes.pageItems} ${currentPage === val ? 'active' : ''}`} key={idx}>
                            <a href='/data/#' className={classes.pageItems1} onClick={() => changePage(val)}>{val}</a>
                          </li>
                        ))
                      }
                      <a href='/data/#' className={classes.pageLink} onClick={nextPage}>next</a>
                    </ul>
                  </nav>
              </div>
            </div>
          </div>
        </div>
    </div>
  );

  function prePage() {
    if(currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
    else if(currentPage === firstIndex) {
      setCurrentPage(currentPage);
    }
  }

  function changePage(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if(currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
    else if(currentPage === lastIndex) {
      setCurrentPage(currentPage);
    }
  }
}

export default DataPage;