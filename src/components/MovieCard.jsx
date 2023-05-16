import classes from "../styles/MovieCard.module.css"
import { Link } from "react-router-dom";

export function MovieCard({movie}) {
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return(
        <li className={classes.MovieCard}>
            <Link className={classes.LinkMovieCard} to={"/movies/" + movie.id}>
                <img className={classes.MovieImage} src={imageUrl} alt={movie.title}></img>
                <div className={classes.MovieTitle}>{movie.title}</div>
            </Link>
        </li>
    );
}