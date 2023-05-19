import classes from './css/createData.module.css'
import Header from '../components/Header';
import Axios from 'axios';
import React, { useState } from 'react';

function CreatePage() {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [id, setId] = useState('');
  const [weight, setWeight] = useState('');

  const save = (e) => {
    // e.preventDefault();
    console.log({
      name,
      type,
      id,
      weight,
    });

    const NAME = name;
    const ID = id;
    const TYPE = type;
    const WEIGHT = weight;
    Axios.get(`https://script.google.com/macros/s/AKfycbxhrUDhKk0OkOus8GjUbtF6unKpBVdDdKSh4YpCxjIvxeXFAlBMs4SX6XB7ukyW8GNW/exec?createNewSheet=${NAME}&ID=${ID}&Type=${TYPE}&FirstWeight=${WEIGHT}`)
        .then(res => console.log('Create data!!', res))
        .catch(err => console.log(err.response.data))
  };  

  const cancel = (e) => {
    console.log('Cancel')
  };


  return (
    <div className={classes.container}>
      <Header></Header>
      <div className={classes.title}>CREATE DATA</div>

      <div className={classes.containData}>
        <div className={classes.data}>
          <div className={classes.containerCreate}>
            <form className={classes.formFormat}>

              <div className={classes.formGroup}>
                <label>NAME</label>
                <label className={classes.startInput}>:</label>
                <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name}/>
              </div>
              
              <div className={classes.formGroup}>
                <label>TYPE OF ANIMAL</label>
                <label className={classes.startInput}>:</label>
                <input type="text" name="type" onChange={(e) => setType(e.target.value)} value={type} />
              </div>

              <div className={classes.formGroup}>
                <label>SYSTEM ID</label>
                <label className={classes.startInput}>:</label>
                <input type="text" name="id" onChange={(e) => setId(e.target.value)} value={id} />
              </div>

              <div className={classes.formGroup}>
                <label>WEIGHT INITIAL (kg.)</label>
                <label className={classes.startInput}>:</label>
                <input type="number" name="weight" onChange={(e) => setWeight(e.target.value)} value={weight}/>
              </div>

              <div className={classes.formGroupButton}>
                <button type="cancel" className={classes.btn} onClick={cancel}>cancel</button>
                <button type="save" className={classes.btn} onClick={save}>save</button>
              </div>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePage;