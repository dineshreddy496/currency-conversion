import {Link} from 'react-router-dom'
import Google from '../Google'
import './index.css'

const Login = () => (
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
      <input
        type="text"
        id="username"
        className="input"
        placeholder="Type your Username"
      />
      <label htmlFor="password" className="name">
        Password
      </label>
      <input
        type="password"
        id="password"
        className="input"
        placeholder="Type your Password"
      />
      <Link to="/">
        <button type="submit" className="submit">
          Sign In
        </button>
      </Link>
      <p className="new-user">
        New to website then please click on
        <Link to="/SignUp">Sign Up</Link>
      </p>
      <Google />
    </div>
  </div>
)

export default Login
