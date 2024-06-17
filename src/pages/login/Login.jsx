import { useRef } from "react";
import { useState } from "react";
import css from "./Login.module.scss";
import { Link } from "react-router-dom";
import { ChevronRight } from "@material-ui/icons";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signIn, setSignIn] = useState(false)

  return (
    <div className={`${css.register}`}>
      {/* <div className={`${css.top}`}> */}
      <div className={css.logingradient}>

        <div className={`${css.wrapper}`}>
          <img
            className={`${css.logo}`}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <button onClick={() => setSignIn(true)} className={`${css.loginButton}`}>Sign In</button>
        </div>
        {/* </div> */}

        <div className={`${css.container}`}>
          {!signIn ? <>
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>
              Ready to watch? start now.
            </p>

            <Link style={{ textDecoration: 'none' }} to="/"><button className={`${css.registerButton}`}>
              Get Started <span><ChevronRight /></span>
            </button>
            </Link>
          </> :
            <form>
              <h1>Sign In</h1>
              <input type="email" placeholder="Email or phone number" />
              <input type="password" placeholder="Password" />
              <button className="loginButton">Sign In</button>
              <span>
                New to Netflix? <b>Sign up now.</b>
              </span>
              <small>
                This page is protected by Google reCAPTCHA to ensure you're not a
                bot. <b>Learn more</b>.
              </small>
            </form>}
        </div>
      </div>
    </div>
  );
}