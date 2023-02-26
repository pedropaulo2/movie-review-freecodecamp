import express from "express";
import MovieDB from "./moviedb.controller.js";

const moviesRouter = express.Router();

moviesRouter.route("/movies").get(MovieDB.apiGetMovies);
moviesRouter.route("/search/:q").get(MovieDB.apiGetSearch);

export default moviesRouter;
