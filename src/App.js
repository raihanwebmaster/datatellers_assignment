import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import PageNoFind from "./components/PageNoFind";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="*" exact component={PageNoFind} />
      </Switch>
    </Router>
  );
}

export default App;
