import logo from './logo.svg';
import './App.css';
import BaseNav from './components/base/nav';
import Mnist  from './components/mnist';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <BaseNav />
        <Switch>
          <Route path="/mnist" exact component={Mnist} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
