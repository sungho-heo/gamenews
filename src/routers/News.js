import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "../css/News.module.css";

export default function News({ gameNews }) {
  const { id } = useParams();
  return (
    <div>
      <h1 className={style.title}>{gameNews[id].title}</h1>
      <div className={style.newsBox}>
        <div className={style.newsMain}>
          <p>
            {new Date(gameNews[id].publishedAt).toLocaleString("en-us", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <img
            src={gameNews[id].urlToImage}
            alt={gameNews[id].title}
            className={style.detailImage}
          />
          <p>{gameNews[id].author}</p>
          <span>{gameNews[id].description}</span>
          <br />
          <Link to={gameNews[id].url}>Link </Link>
        </div>
      </div>
    </div>
  );
}
