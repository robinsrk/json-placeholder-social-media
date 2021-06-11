import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import CreatePost from "./components/CreatePost/CreatePost";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/createpost" component={CreatePost} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
