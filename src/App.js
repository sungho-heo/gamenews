import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./routers/Home.js";
import News from "./routers/News.js";

function App() {
  const [gameNews, setGameNews] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/everything?q=Game&pageSize=20&language=en&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const data = response.data;
      const gameArray = data.articles;
      setGameNews(gameArray);
    };
    getData();
  }, [gameNews]);
  return (
    <div className={"container"}>
      <Router>
        <h1>Hello Welcome to Game News! Popularity 20</h1>
        <h3>
          <Link to="/">Home</Link>
        </h3>
        <Routes>
          <Route path="/" element={<Home gameNews={gameNews} />}></Route>
          <Route
            path="/news/:id"
            element={<News gameNews={gameNews} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
