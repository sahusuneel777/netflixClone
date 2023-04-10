import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom"
import css from "./navbar.module.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null)
  }

  console.log(isScrolled);

  return (
    <div className={isScrolled ? `${css.navbar} ${css.scrolled}` : `${css.navbar}`}>
      <div className={`${css.container}`}>
        <div className={`${css.left}`}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="netflix logo"
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className={`${css.right}`}>
          <Search className={`${css.icon}`} />
          <span>KID</span>
          <Notifications className={`${css.icon}`} />
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="profile"
          />
          <div className={`${css.profile}`}>
            <ArrowDropDown className={`${css.icon}`} />
            <div className={`${css.options}`}>
              <span>Settings</span>
              <Link to="/login"><span>Logout</span></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
