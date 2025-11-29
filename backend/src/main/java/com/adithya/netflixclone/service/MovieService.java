package com.adithya.netflixclone.service;

import com.adithya.netflixclone.dto.MovieDTO;
import java.util.List;
import com.adithya.netflixclone.entity.Movie;


public interface MovieService {

    List<MovieDTO> getAllMovies();

    Movie addMovie(MovieDTO movieDTO);

    Movie updateMovie(Long id, MovieDTO movieDTO);

    String deleteMovie(Long id);

    MovieDTO getMovieById(Long id);
}
