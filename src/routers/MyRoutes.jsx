import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import { LandingPages } from "../pages/LandingPages";
import { MovieDetails } from "../pages/MovieDetails";

function MyRoutes() {
    return (<Router>
        <Routes>
            <Route path="/" element={<LandingPages></LandingPages>}></Route>
            <Route path="/movies/:movieId" element={<MovieDetails></MovieDetails>}></Route>
        </Routes>
    </Router>);
}

export default MyRoutes;
