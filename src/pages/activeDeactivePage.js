import {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom'
import Axios from 'axios';
import classes from './css/activeDeactive.module.css'
import Header from '../components/Header';

function ActiveDeactivePage() {
  const [data, setData] = useState([]);
  const [dataID, setDataID] = useState([]);
  const [name, setName] = useState([]);
  const [bfDataStatus, setBfDataStatus] = useState(null)
  const [afDataStatus, setAfDataStatus] = useState('none')
  const [saveID, setSaveID] = useState(null);
  const [saveName, setSaveName] = useState(null);

  useEffect(() => {
    setInterval(() => {Axios.get('https://script.google.com/macros/s/AKfycbwlOR-49zwh0fvhXdfmmt63H7AuXk9YMAOz-P_5i_JvLfjj-fM0CnMuCVoAYNAgi9IU/exec?readSheet=Conclusion')
    .then(res => setData(res.data)) // get the response data instead of the whole response object
    }, 5000);
  }, []);

  if (!data) {
    return (
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
          <div className={classes.containDropdown}>

            <div className={classes.containDropdownList}>
              <select className={classes.selectStatus}>
                <option value="">Select Status</option>
              </select>
              <select className={classes.selectID} >
                <option value="">Select ID of system</option>
              </select>
              <select className={classes.selectID}>
                <option value="">Select Name of Animal</option>
              </select>
            </div>

            <div className={classes.containAnimalData}>
                <div className={classes.p1}>SYSTEM ID:</div>
                <div className={classes.p2}>NAME:</div>
            </div>
            
            <div className={classes.containButton}>
              <button type="cancel" className={classes.btn}>cancel</button>
              <button type="save" className={classes.btn}>delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }

  const allStatus = []
  for (let j = 0; j < data.length; j++) { 
    if(!allStatus.includes(data[j].Status)) {
      allStatus.push(data[j].Status); 
    }
  } 
  allStatus.sort((a, b) => a - b);

  console.log(data); // logging the data for testing

  const changeStatus = (e) => {
    setBfDataStatus(e.target.value);
    if(e.target.value === 'Active') {
      setAfDataStatus('deactive');
    }
    else if(e.target.value === 'Deactive') {
      setAfDataStatus('active');
    }

    let IDList = [];
    for (let j = 0; j < data.length; j++) { 
      if (String(data[j].Status) === String(e.target.value)) {
        IDList.push(data[j].ID); 
      }
    } 
    IDList = IDList.filter((num, index) => num !== IDList[index - 1]);
    const uniqueNumbers = [...new Set(IDList)];
    IDList = uniqueNumbers.sort((a, b) => a - b);
    console.log(IDList);
    setDataID(IDList);
  }

  const changeID = (e) => {
    setSaveID(Number(e.target.value))
    let nameList = [];
    for (let j = 0; j < data.length; j++) { // use different variable name for the inner loop
      if ((String(data[j].ID) === String(e.target.value)) && (String(data[j].Status) === bfDataStatus)) {
        nameList.push(data[j].Name); // store the ID and Name in an object
      }
    } 
    console.log(nameList);
    setName(nameList);
  }

  const changeName = (e) => {
    setSaveName(String(e.target.value))
  }

  const toggleData = (e) => {
    console.log({
      saveID,
      saveName,
      afDataStatus
    });

    let STATUS = 0;
    if (afDataStatus === 'active') {
      STATUS = 1;
    }
    else if (afDataStatus === 'deactive') {
      STATUS = 0;
    }

    const NAME = saveName;
    Axios.get(`https://script.google.com/macros/s/AKfycbwlOR-49zwh0fvhXdfmmt63H7AuXk9YMAOz-P_5i_JvLfjj-fM0CnMuCVoAYNAgi9IU/exec?de_acSheetName=${NAME}&status=${STATUS}`)
        .then(res => console.log('Change status!', res))
        .catch(err => console.log(err.response.data))
    window.location.reload(true)
  };  

  const cancel = (e) => {
    console.log('Cancel');
    window.location.reload(true)
  };

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
          <div className={classes.containDropdown}>

            <div className={classes.containDropdownList}>
              <select className={classes.selectStatus} onChange={changeStatus}>
                <option value="">Select Status</option>
                {allStatus.map((val, idx) => (
                  <option key={idx} value={val}>{val}</option>))
                }
              </select>
              <select className={classes.selectID} onChange={changeID}>
                <option value="">Select ID of system</option>
                {dataID.map((val, idx) => (
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

            <div className={classes.containAnimalData}>
                <div className={classes.p1}>SYSTEM ID:</div>
                <div className={classes.p3}>{saveID}</div>
                <div className={classes.p2}>NAME:</div>
                <div className={classes.p4}>{saveName}</div>
            </div>
            
            <div className={classes.containButton}>
              <button type="cancel" className={classes.btn} onClick={cancel}>cancel</button>
              <button type="save" className={classes.btn} onClick={toggleData}>{afDataStatus}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActiveDeactivePage;