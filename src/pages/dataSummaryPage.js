import {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom'
import Axios from 'axios';
import classes from './css/dataSummary.module.css'
import Header from '../components/Header';
import { Table } from 'semantic-ui-react';

function DataSummaryPage() {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    Axios.get('https://script.google.com/macros/s/AKfycbwlOR-49zwh0fvhXdfmmt63H7AuXk9YMAOz-P_5i_JvLfjj-fM0CnMuCVoAYNAgi9IU/exec?readSheet=Conclusion')
    .then(res => setData(res.data)); // get the response data instead of the whole response object
  }, []);

  if (!data) {
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
            <div className={classes.containTable}>
              <Table className={classes.table}>
                    <thead>
                      <tr>
                        <th className={classes.thID1}>ID</th>
                        <th>Name</th>
                        <th>Type animal</th>
                        <th>Average weight (kg.)</th>
                        <th className={classes.thStatus}>Status</th>
                      </tr>
                    </thead>
                </Table>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const recordPerPage = 10;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / recordPerPage);
  const number = [...Array(npage + 1).keys()].slice(1)

  return(
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
            <div className={classes.containTable}>
              <Table className={classes.table}>
                    <thead>
                      <tr>
                        <th className={classes.thID1}>ID</th>
                        <th>Name</th>
                        <th>Type animal</th>
                        <th>Average weight (kg.)</th>
                        <th>Status</th>
                      </tr>
                    </thead>

                    <tbody>
                      {records.map((val, idx) => (
                        <tr key={idx}>
                          <td className={classes.thID2}>{val.ID}</td>
                          <td>{val.Name}</td>
                          <td>{val.TypeAnimal}</td>
                          <td>{val.AverageWeight}</td>
                          <td className={classes.thStatus} style={{color : val.Status === 'Active' ? '#918f23': '#c13530'}}>{val.Status}</td>
                        </tr>
                      ))}
                    </tbody>
                </Table>
                <nav className={classes.containPagination}>
                  <ul className={classes.pagination}>
                    <a href='/#' className={classes.pageLink} onClick={prePage}>previous</a>
                    {
                      number.map((val, idx) => (
                        <li className={`${classes.pageItems} ${currentPage === val ? 'active' : ''}`} key={idx}>
                          <a href='/#' className={classes.pageItems1} onClick={() => changePage(val)}>{val}</a>
                        </li>
                      ))
                    }
                    <a href='/#' className={classes.pageLink} onClick={nextPage}>next</a>
                  </ul>
                </nav>
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

export default DataSummaryPage;