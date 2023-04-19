import classes from './css/editData.module.css'
import Header from '../components/Header';

function EditPage() {
  return (
    <div className={classes.container}>
      <Header></Header>
      <div className={classes.title}>EDIT DATA</div>

      <div className={classes.containData}>
        <div className={classes.data}>

        </div>
      </div>
    </div>
  );
}

export default EditPage;