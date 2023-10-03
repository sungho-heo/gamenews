import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home({ gameNews }) {
  return (
    <div className={"gameNews"}>
      {gameNews.length > 0 ? (
        gameNews.map((news, index) => (
          <div key={index} className={"news"}>
            <Link to={`/news/${index}`} params={{ testvalue: "hello" }}>
              <img src={news.urlToImage} alt={news.title} className={"img"} />
            </Link>
            <p>{news.title}</p>
          </div>
        ))
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
}
