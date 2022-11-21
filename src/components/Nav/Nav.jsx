import s from './Nav.module.css';
import {NavLink} from "react-router-dom";

// console.log(s);

const Nav = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" className={NaveData => NaveData.isActive ? s.activeLink : s.item}>Profile </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" className={NaveData => NaveData.isActive ? s.activeLink : s.item}>Massages </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" className={NaveData => NaveData.isActive ? s.activeLink : s.item}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" className={NaveData => NaveData.isActive ? s.activeLink : s.item}>Music</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/settings" className={NaveData => NaveData.isActive ? s.activeLink : s.item}>Settings</NavLink>
      </div>
      {/* <div className={`${s.item} ${s.active}`}>
        <h5>Iron</h5>
      </div> */}
    </nav>
  );
};

export default Nav;
