// import {useState, useEffect} from 'react';
// import Axios from 'axios';
// import classes from './css/editData.module.css'
// import Header from '../components/Header';

function EditPage() {
  // const [data, setData] = useState(null);
  // const [dropdownID, setDropdownID] = useState(null);
  // const [dropdownName, setDropdownName] = useState(null);

  // useEffect(() => {
  //   Axios.get('https://script.google.com/macros/s/AKfycbz7s7jkCXXJ_jgLvX9GfyOMJkZkCaz1yQgfAoZxyTmooB7m6dg-qantIySykZngWmNG/exec?readSheet=Conclusion')
  //     .then(res => setData(res.data)) // get the response data instead of the whole response object
  // }, []);

  // if (!data) {
  //   return (
  //     <div className={classes.container}>
  //       <Header></Header>
  //       <div className={classes.title}>EDIT DATA</div>
  //       <div className={classes.containData}>
  //         <div className={classes.data}>
  //           <div className={classes.containDropdown}>
  //             <select>
  //               <option value="">Select ID of system</option>
  //             </select>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }

  // console.log(data); // logging the data for testing

  // const allID = [];
  // for (let i = 0; i < data.length; i++) {
  //   if (!allID.includes(data[i].ID)) {
  //     allID.push(data[i].ID);
  //   }
  // }
  // allID.sort((a, b) => a - b); // Sort the array in ascending order
  // console.log(allID);

  // const collectedData = [];
  // for (let i = 0; i < allID.length; i++) {
  //   for (let j = 0; j < data.length; j++) { // use different variable name for the inner loop
  //     if (data[j].ID === allID[i]) {
  //       collectedData.push({ID: allID[i], Name: data[j].Name}); // store the ID and Name in an object
  //     }
  //   }
  // }
  // console.log(collectedData);

  // const changeName = (e) => {

  // }

  // return (
  //   <div className={classes.container}>
  //     <Header></Header>
  //     <div className={classes.title}>EDIT DATA</div>
  //     <div className={classes.containData}>
  //       <div className={classes.data}>
  //         <div className={classes.containDropdown}>
  //           <div className={classes.containDropdownList}>
  //             <select className={classes.selectID}>
  //               <option value="">Select ID of system</option>
  //               {allID.map((val, idx) => (
  //                 <option key={idx}>{val}</option>))
  //               }
  //             </select>
  //             <select className={classes.selectID}>
  //               <option value="">Select ID of system</option>
  //               {allID.map((val, idx) => (
  //                 <option key={idx}>{val}</option>))
  //               }
  //             </select>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default EditPage;