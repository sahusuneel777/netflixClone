import React from "react";
import { Facebook, Twitter, Instagram, LinkedIn } from "@material-ui/icons"


import css from "./footer.module.scss";

const Footer = () => {
    return (
        <div className={css.footer}>
            <ul className={css.menuItems}>
                <li className={css.menuItem}>Terms Of Use</li>
                <li className={css.menuItem}>Privacy-Policy</li>
                <li className={css.menuItem}>About</li>
                {/* <li className={css.menuItem}>Blog</li> */}
                <li className={css.menuItem}>FAQ</li>
            </ul>
            <div className={css.infoText}>
                SUNFLIX is your ultimate online platform for movie lovers. You can explore, watch, and rate thousands of movies from various genres and languages. You can also create your own watchlists and share them with your friends. SUNFLIX is powered by Bing and uses advanced algorithms to recommend movies based on your preferences.
            </div>
            <div className={css.socialIcons}>
                <span className={css.icon}>
                    <Facebook />
                </span>

                <span className={css.icon}>
                    <Instagram />
                </span>
                <span className={css.icon}>
                    <Twitter />
                </span>
                {/* <a style={{backgroundColor:"transparent",color:"transparent"}} target="_blank" href="https://www.linkedin.com/in/suneelsahu777/"> */}
                    <span className={css.icon}>
                        <LinkedIn />
                    </span>
                {/* </a> */}
            </div>
        </div>
    );
};

export default Footer;