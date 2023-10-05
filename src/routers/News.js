import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "../css/News.module.css";

export default function News({ gameNews }) {
  const { id } = useParams();
  if (!gameNews || gameNews.length === 0 || id >= gameNews.length) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className={style.newsBox}>
        <div className={style.newsMain}>
          <h2 className={style.title}>{gameNews[id].title}</h2>
          <span>
            {new Date(gameNews[id].publishedAt).toLocaleString("en-us", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <p>Author: {gameNews[id].author}</p>
          <img
            src={gameNews[id].urlToImage}
            alt={gameNews[id].title}
            className={style.detailImage}
          />
          <span>{gameNews[id].description}</span>
          <br />
          <Link className={"link"} to={gameNews[id].url}>
            More &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
