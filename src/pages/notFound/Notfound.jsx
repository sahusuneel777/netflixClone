import React from 'react'
import css from './notfound.module.scss'
import { Link } from 'react-router-dom'

function Notfound() {
    return (
        <div className={`${css.nofound}`}>
            <div className={`${css.wrapper}`}>
                <Link style={{ textDecoration: 'none' }} to="/">
                <img
                    className={`${css.logo}`}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                    alt=""
                />
                </Link>
                {/* <button className={`${css.loginButton}`}>Sign In</button> */}
            </div>

            <div className={`${css.container}`}>

                <img className={`${css.notfoundImg}`} src={"https://res.cloudinary.com/dnv6kesmt/image/upload/v1681276664/animatedError_k4phi6.svg"} alt="Notfound" />
                <h1>Lost your way?</h1>
                <p>Sorry, we can't find that page. You'll find lots to explore on the home page.</p>
                <Link style={{ textDecoration: 'none' }} to="/"><button className={`${css.registerButton}`}>
                    Netflix Home</button>
                </Link>

            </div>
        </div>
    )
}

export default Notfound