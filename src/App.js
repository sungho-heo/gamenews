import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Home from "./routers/Home.js";
import News from "./routers/News.js";

function App() {
  return (
    <div className={"container"}>
      <Router>
        <h1>Hello Welcome to Game News! Popularity 20</h1>
        <h3>
          <Link to="/">Home</Link>
        </h3>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/news/:id" element={<News />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
