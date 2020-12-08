import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";

function App() {
  return (
    <Router>
      <Route exact path="/about-me" component={AboutMePage} />
      <Route exact path="/" component={HomePage} />
    </Router>
  );
}

export default App;
