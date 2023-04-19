import classes from './css/Header.module.css'
import logo from './img/logo.png'

const Header = () => {
    return (
        <div className={classes.container}>
            <img src={logo} alt="logo" className={classes.logo}/>
            <div className={classes.name}>WeFeR</div>
            <div className={classes.description}>FIBO X KHAO KHEOW ZOO</div>
        </div>
    );
}

export default Header;