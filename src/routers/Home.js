import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
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
    <div className={"gameNews"}>
      {gameNews.length > 0 ? (
        gameNews.map((news, index) => (
          <div key={index} className={"news"}>
            {/* <p>
              {new Date(news.publishedAt).toLocaleString("en-us", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p> */}
            <img src={news.urlToImage} alt={news.title} className={"img"} />
            <p>{news.title}</p>
            {/* <p>{news.author}</p>
            <span>{news.description}</span>
            <p src={news.url}>{news.url}</p> */}
          </div>
        ))
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
}
