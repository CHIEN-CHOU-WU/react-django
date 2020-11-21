// import logo from "./logo.svg";
import "./App.css";
import Home from "./components/base/home";
import BaseNav from "./components/base/nav";
import Mnist from "./components/mnsist/mnist";
import Tetris from "./components/tetris/Tetris";
import TdAmeritrade from "./components/td/td";
import Basic from "./components/basic/basic_tutorial";
import Hook_tutorial from "./components/basic/Hook_tutorial";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// always return JSX
// return single element
// rfc
// rafce

function App() {
  return (
    <Router>
      <div className="App">
        <BaseNav />
        <br />
        <hr />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/mnist" exact component={Mnist} />
          <Route path="/tetris" exact component={Tetris} />
          <Route path="/stock" exact component={TdAmeritrade} />
          <Route path="/basictutorial" exact component={Basic} />
          <Route path="/hooktutorial" exact component={Hook_tutorial} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
