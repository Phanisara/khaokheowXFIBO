import classes from './css/data.module.css'
import Header from '../components/Header';

function DataPage() {
  return (
    <div className={classes.container}>
      <Header></Header>
      <div className={classes.title}>DATA TABLE</div>

      <div className={classes.containData}>
        <div className={classes.data}>

        </div>
      </div>
    </div>
  );
}

export default DataPage;