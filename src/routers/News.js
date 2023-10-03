import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function News({ gameNews }) {
  const { id } = useParams();
  return (
    <div>
      <h1>{gameNews[id].title}</h1>
      <div>
        <div>
          <img
            src={gameNews[id].urlToImage}
            alt={gameNews[id].title}
            className={"img"}
          />
          <p>
            {new Date(gameNews[id].publishedAt).toLocaleString("en-us", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p>{gameNews[id].author}</p>
          <span>{gameNews[id].description}</span>
          <br />
          <Link to={gameNews[id].url}>Link </Link>
        </div>
      </div>
    </div>
  );
}
