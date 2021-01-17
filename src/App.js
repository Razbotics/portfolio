import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <Router>
      <Route path="/contact" component={ContactPage} />
      <Route path="/about-me" component={AboutMePage} />
      <Route path="/projects" component={ProjectsPage} />
      <Route exact path="/" component={HomePage} />
    </Router>
  );
}

export default App;
