import {Link} from 'react-router-dom'
import Google from '../Google'

import './index.css'

const SignUp = () => (
  <div className="signup-container">
    <div className="container">
      <img
        src="https://res.cloudinary.com/db1l4o1jw/image/upload/v1632547531/currency-conversion_hpvxer.jpg"
        alt="logo"
        className="logo"
      />
      <div className="login-container">
        <label htmlFor="username" className="name">
          Username
        </label>
        <input type="text" id="gmail" />
        <label htmlFor="gmail" className="name">
          Gmail
        </label>
        <input type="text" id="username" />
        <label htmlFor="password" className="name">
          Password
        </label>
        <input type="password" id="password" />
        <label htmlFor="password" className="name">
          Confirm Password
        </label>
        <input type="password" id="password" />
        <button type="submit" className="submit">
          Sign Up
        </button>
        <p className="sign-in">
          Already Registered,then please Sign In
          <Link to="/login">Sign In</Link>
        </p>
        <Google />
      </div>
    </div>
  </div>
)

export default SignUp
