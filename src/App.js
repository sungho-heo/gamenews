import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [gameNews, setGameNews] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}v2/everything?q=game&pageSize=10&language=en&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const data = response.data;
      const gameArray = data.articles;
      setGameNews(gameArray);
    };
    getData();
  }, [gameNews]);
  return (
    <div className="App">
      <h2>Hello</h2>
      {gameNews.length > 0 ? (
        gameNews.map((news, index) => (
          <div key={index}>
            <h3>{news.title}</h3>
            <span>{news.author}</span>
            <span>{news.description}</span>
          </div>
        ))
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
}

export default App;
