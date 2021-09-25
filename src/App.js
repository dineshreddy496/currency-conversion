import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
)

export default App
