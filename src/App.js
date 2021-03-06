import './App.css';
import Sidebar from "./Sidebar/Sidebar";
import Chat from "./Chat/Chat";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signin from "./Signin/Signin";
import { useStateValue } from "./StateProvider";

function App() {
  const { user } = useStateValue()[0];

  return (
    <div className="app">
      { !user ? (
        <Signin />
      ) : (
        <div className="app__body">
          <Router>
            <Switch>
              <Route path="/rooms/:roomId" >
                <Sidebar />
                <Chat />
              </Route>
              <Route path="/" >
                <Sidebar />
                <h1 className="app__bodyInfo">Start a new chat or go to an existing chat.</h1>
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
