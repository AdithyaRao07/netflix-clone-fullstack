package com.adithya.netflixclone.service;

import com.adithya.netflixclone.dto.MovieDTO;
import com.adithya.netflixclone.entity.Movie;
import com.adithya.netflixclone.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MovieServiceImpl implements MovieService {

    @Autowired
    private MovieRepository movieRepository;

    @Override
    public List<MovieDTO> getAllMovies() {
        return movieRepository.findAll()
                .stream()
                .map(this::mapToDTO)
                .collect(Collectors.toList());
    }
    @Override
    public Movie addMovie(MovieDTO movieDTO) {
        Movie movie = new Movie(
                null,
                movieDTO.getTitle(),
                movieDTO.getDescription(),
                movieDTO.getGenre(),
                movieDTO.getRating(),
                movieDTO.getYear(),
                movieDTO.getThumbnailUrl(),
                movieDTO.getVideoUrl()
        );
        return movieRepository.save(movie);
    }

    @Override
    public Movie updateMovie(Long id, MovieDTO movieDTO) {
        Movie movie = movieRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Movie not found with id: " + id));

        movie.setTitle(movieDTO.getTitle());
        movie.setDescription(movieDTO.getDescription());
        movie.setGenre(movieDTO.getGenre());
        movie.setRating(movieDTO.getRating());
        movie.setYear(movieDTO.getYear());
        movie.setThumbnailUrl(movieDTO.getThumbnailUrl());
        movie.setVideoUrl(movieDTO.getVideoUrl());

        return movieRepository.save(movie);
    }

    @Override
    public String deleteMovie(Long id) {
        movieRepository.deleteById(id);
        return "Movie deleted successfully";
    }

    @Override
    public MovieDTO getMovieById(Long id) {
        Movie movie = movieRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Movie not found with id: " + id)
                );
        return mapToDTO(movie);
    }

    private MovieDTO mapToDTO(Movie movie) {
        return new MovieDTO(
                movie.getId(),
                movie.getTitle(),
                movie.getDescription(),
                movie.getGenre(),
                movie.getRating(),
                movie.getYear(),
                movie.getThumbnailUrl(),
                movie.getVideoUrl()
        );
    }
}
