import { Switch, Route } from 'react-router-dom'
import Home from "views/Home/Index";

  function About() {
    return <h2>About</h2>;
  }
  
  function Users() {
    return <h2>Users</h2>;
  }
const Routes = () =>{
return <Switch>
<Route path="/about">
  <About />
</Route>
<Route path="/users">
  <Users />
</Route>
<Route path="/">
  <Home />
</Route>
</Switch>
}

export default Routes
