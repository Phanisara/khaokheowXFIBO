import React, {useState} from 'react';
import { NavLink} from 'react-router-dom'
import list from './img/list.png'
import data from './img/folder.png'
import edit from './img/edit.png'
import create from './img/add.png'
import classes from './css/SideBar.module.css';

const SideBar = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const menuItem = [
        {
            path:"/",
            name:"Data Table",
            icon: data
        },
        {
            path:"/edit",
            name:"Edit Data",
            icon: edit
        },
        {
            path:"/create",
            name:"Create Data",
            icon: create
        }]

    return (
        <div className={classes.container}>
            <div style={{width: isOpen ? '250px':'60px'}} className={classes.sidebar}>
                <div className={classes.top} onClick={toggle} style={{marginLeft: isOpen ? '160px':'19px'}}>
                    <img src={list} alt='list' width='22px' height='22px'/>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className={classes.link}>
                            <div className={classes.icon}><img src={item.icon} alt='icon' width='22px' height='22px'/></div>
                            <div className={classes.text} style={{display: isOpen ? 'block':'none'}}>{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>

    );
}

export default SideBar;