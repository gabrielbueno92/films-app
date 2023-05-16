import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../data/httpClient"
import { GetMovieImg } from "../utils/GetMovieImg"
import classes from "../styles/MovieDetails.module.css"

export function MovieDetails() {
    const {movieId} = useParams();
    const [movie, setMovie] = useState([]);
    const [genre, setGenre] = useState([]);
    useEffect(() => {
        get("/movie/" + movieId).then((data)=>{
            setMovie(data)
            setGenre(data.genres[0])
        })
    }, [movieId]);

    
    const imageUrl= GetMovieImg(movie.poster_path,500)
    return (
        <div className={classes.MovieDetailsContainer}>
            <img className={classes.MovieImage} src={imageUrl} alt={movie.title}></img>
            <div className={classes.MovieDetails}>
                <p className={classes.MovieTitle}>
                {movie.title}
                </p>
                <p> <strong>Genre: </strong>
                    {genre.name}
                </p>
                <p> <strong>Description: </strong>
                    {movie.overview}
                </p>
            </div>
        </div>
    );
}