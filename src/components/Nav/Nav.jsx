import s from './Nav.module.css';

// console.log(s);

const Nav = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <a href="#m">1 Profile </a>
      </div>
      <div className={s.item}>
        <a href="#m">2 Massages </a>
      </div>
      <div className={s.item}>
        <a href="#n">3 News</a>
      </div>
      <div className={s.item}>
        <a href="#m">4 Music</a>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <a href="#n">5 Settings</a>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <h5>Iron</h5>
      </div>
    </nav>
  );
};

export default Nav;
