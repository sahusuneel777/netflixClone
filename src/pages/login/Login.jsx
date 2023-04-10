
import { Link } from "react-router-dom";
import css from "./Login.module.scss";

export default function Login() {
  return (
    <div className={`${css.login}`}>
      <div className={`${css.top}`}>
        <div className={`${css.wrapper}`}>
          <img
            className={`${css.logo}`}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className={`${css.container}`}>
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />
          <Link to='/'> <button className={`${css.loginButton}`}>WATCH FOR FREE</button></Link>
          {/* <button className={`${css.loginButton}`}>Sign In</button> */}
          <span>
            New to Netflix? <b>Sign up now.</b>
          </span>
          {/* <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small> */}
        </form>
      </div>
    </div>
  );
}