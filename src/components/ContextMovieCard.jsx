import { useState,useEffect } from "react";
import { get } from "../data/httpClient";
import { MovieCard } from "../components/MovieCard";
import classes from "../styles/ContextMovieCard.module.css";

export function ContextMovieCard() {
    const [movies, SetMovies] = useState([]);
    useEffect(() => {
        get("/discover/movie").then((data)=>{
            SetMovies(data.results);
        })
    }, []);
    return(
        <ul className={classes.Container}>
            {movies.map((movie)=>(
                <MovieCard key={movie.id} movie={movie}></MovieCard>
            ))}
        </ul>
    );
}