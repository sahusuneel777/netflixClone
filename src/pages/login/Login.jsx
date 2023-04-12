import { useRef } from "react";
import { useState } from "react";
import css from "./Login.module.scss";
import { Link } from "react-router-dom";
import { ChevronRight } from "@material-ui/icons";

export default function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  return (
    <div className={`${css.register}`}>
      {/* <div className={`${css.top}`}> */}
      <div className={`${css.wrapper}`}>
        <img
          className={`${css.logo}`}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          alt=""
        />
        <button className={`${css.loginButton}`}>Sign In</button>
      </div>
      {/* </div> */}
      <div className={`${css.container}`}>
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? start now.
        </p>

          <Link style={{textDecoration:'none'}} to="/"><button  className={`${css.registerButton}`}>
            Get Started <span><ChevronRight/></span>
          </button>
          </Link>

      </div>
    </div>
  );
}