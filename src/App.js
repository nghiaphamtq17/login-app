import LoginPage from "./components/LoginPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Category from "./components/Category";

function App() {
  return (
    <Router>
      <Switch>
        {/* cac trang website */}
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/category" exact component={Category} />
      </Switch>
    </Router>
  );
}

export default App;
