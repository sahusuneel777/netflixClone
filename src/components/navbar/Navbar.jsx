import { ArrowDropDown, Dehaze, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom"
import css from "./navbar.module.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null)
  }

  return (
    <div className={isScrolled ? `${css.navbar} ${css.scrolled}` : `${css.navbar}`}>
      <div className={`${css.container}`}>
        <div className={`${css.left}`}>
          {/* <Dehaze className={`${css.humberger}`}/> */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="netflix logo"
          />
          <div className={`${css.headerOptions}`}>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <Link style={{ color: "white", textDecoration: "none" }} to="/watchlater"><span>My List</span></Link>
          </div>
        </div>
        <div className={`${css.right}`}>
          <Search className={`${css.icon}`} />
          {/* <span>KID</span> */}
          <Notifications className={`${css.icon}`} />
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="profile"
          />
          <div className={`${css.profile}`}>
            <ArrowDropDown className={`${css.dropicon}`} />
            <div className={`${css.options}`}>
              <span>Settings</span>
              <Link style={{ textDecoration: "none", width: '100%' }} to="/login"><span>Logout</span></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
