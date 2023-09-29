import { useEffect, useState } from "react";
import axios from "axios";

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
    <div className="App">
      <h1>Hello Welcome to Game News! Popularity 10</h1>
      {gameNews.length > 0 ? (
        gameNews.map((news, index) => (
          <div key={index}>
            <h2>{news.title}</h2>
            <p>
              {new Date(news.publishedAt).toLocaleString("en-us", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <img src={news.urlToImage} alt={news.title} />
            <p>{news.author}</p>
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
