import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import PageNoFind from "./components/PageNoFind";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} /> {/*We basically use react-router-dom to route one component to another component. The "path='/'" shows the Home page of our application.   */}
        <Route path="*" component={PageNoFind} /> {/*and path="*" used if user try to add wrong path in our URL than it will take the user in pageNotFind component  */}
      </Switch>
    </Router>
  );
}

export default App;
