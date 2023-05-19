import {useState, useEffect} from 'react';
import Axios from 'axios';
import {NavLink} from 'react-router-dom'
import classes from './css/editData.module.css'
import Header from '../components/Header';

function EditPage() {
  const [data, setData] = useState(null);
  const [name, setName] = useState([]);
  const [saveID, setSaveID] = useState(null);
  const [saveName, setSaveName] = useState(null);
  const [saveNewName, setSaveNewName] = useState(null);

  useEffect(() => {
    setInterval(() => {Axios.get('https://script.google.com/macros/s/AKfycbxdoWoNztaIT9qXGw3CM_igJi1kZl8u0d5VBvpV_TBAlMR_9pU8gsTNgBVLbdCky6Dq/exec?readSheet=Conclusion')
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
                <input className={classes.inputID} type="text" name="name"/>
                <input className={classes.inputName} type="text" name="name"/>
            </div>
            
            <div className={classes.containButton}>
              <button type="cancel" className={classes.btn}>cancel</button>
              <button type="save" className={classes.btn}>update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }

  console.log(data); // logging the data for testing

  const allID = [];
  for (let i = 0; i < data.length; i++) {
    if (!allID.includes(data[i].ID)) {
      allID.push(data[i].ID);
    }
  }
  allID.sort((a, b) => a - b); // Sort the array in ascending order
  console.log(allID);

  const changeID = (e) => {
    setSaveID(Number(e.target.value))
    let nameList = [];
    for (let j = 0; j < data.length; j++) { // use different variable name for the inner loop
      if (String(data[j].ID) === String(e.target.value)) {
        nameList.push(data[j].Name); // store the ID and Name in an object
      }
    } 
    console.log(nameList);
    setName(nameList.sort());
  }

  const changeName = (e) => {
    setSaveName(String(e.target.value))
    console.log(saveName);
  }

  const save = (e) => {
    console.log({
      saveID,
      saveName,
      saveNewName
    });

    let NAME = saveName;
    let NEWNAME = saveNewName;
    const ID = saveID;

    if (NEWNAME  === null) {
      NEWNAME = NAME;
    }

    Axios.get(`https://script.google.com/macros/s/AKfycbxdoWoNztaIT9qXGw3CM_igJi1kZl8u0d5VBvpV_TBAlMR_9pU8gsTNgBVLbdCky6Dq/exec?editSheet=${NAME}&newName=${NEWNAME}&ID=${ID}`)
        .then(res => console.log('Edit data!', res))
        .catch(err => console.log(err.response.data))
    window.location.reload(true)
  };  

  const cancel = (e) => {
    console.log('Cancel')
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

            <div className={classes.containAnimalData}>
                <div className={classes.p1}>SYSTEM ID:</div>
                <div className={classes.p2}>NAME:</div>
                <input className={classes.inputID} placeholder={saveID} type="text" name="name" onChange={(e) => setSaveID(Number(e.target.value))}/>
                <input className={classes.inputName} placeholder={saveName} type="text" name="name" onChange={(e) => setSaveNewName(String(e.target.value))}/>
            </div>
            
            <div className={classes.containButton}>
              <button type="cancel" className={classes.btn} onClick={cancel}>cancel</button>
              <button type="save" className={classes.btn} onClick={save}>update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditPage;