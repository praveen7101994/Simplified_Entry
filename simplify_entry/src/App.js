import './App.css';
import { Route, Link, Switch } from 'react-router-dom'
import Login from './Components/Login/Login'
import Header from './Components/Header/Header';
import Register from './Components/Register/Register';
import Dashboard from './Components/Dashboard/Dashboard';
import LogEntry from './Components/LogEntry/LogEntry';
import { useState } from 'react';
import Button from './Components/CommonComponents/Button/Button';
import ViewLogs from './ViewLogs/ViewLogs';

function App() {
  const [Appstate, setAppState] = useState({
    user: null
  })

  const handleLouOut = () => {
    setAppState({...Appstate, user: null})
  }
  return (
    <div className="App">
      <Header title="Simplify Entry" />
      {
        Appstate.user && (<><div><span>{Appstate?.user?.name}</span><Button title="LogOut" onClick={() => handleLouOut()} /></div></>)
      }
      <div className="NavBar">
        {
         !Appstate.user && <Link to="/Login" className="Link">Login</Link>
        }
        {
          !Appstate.user && <Link to="/Register" className="Link">Register</Link>
        }
        <Link to="/Dashboard" className="Link">Dashboard</Link>
        <Link to="/LogEntry" className="Link">Log Entry</Link>
        <Link to="/LogExit" className="Link">Log Exit</Link>
      </div>
      <Switch>
        <Route path="/" component={Header} exact/>
        <Route path="/Login">
          <Login setAppState={setAppState} Appstate={Appstate}/>
        </Route>
        <Route path="/Register">
          <Register setAppState={setAppState} Appstate={Appstate}/>
        </Route>
        <Route path="/Dashboard" component={Dashboard}/>
        <Route path="/LogEntry" >
          <LogEntry Appstate={Appstate}/>
        </Route>
        <Route path="/ViewLogs" >
          <ViewLogs Appstate={Appstate}/>
        </Route>
      </Switch>
      {/* <Route path="/" component={}/> */}
    </div>
  );
}

export default App;
