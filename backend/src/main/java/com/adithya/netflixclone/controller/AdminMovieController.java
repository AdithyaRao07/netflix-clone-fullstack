package com.adithya.netflixclone.controller;

import com.adithya.netflixclone.dto.MovieDTO;
import com.adithya.netflixclone.entity.Movie;
import com.adithya.netflixclone.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin/movies")
public class AdminMovieController {

    @Autowired
    private MovieService movieService;

    @PostMapping("/add")
    public Movie addMovie(@RequestBody MovieDTO movieDTO) {
        return movieService.addMovie(movieDTO);
    }

    @PutMapping("/update/{id}")
    public Movie updateMovie(@PathVariable Long id, @RequestBody MovieDTO movieDTO) {
        return movieService.updateMovie(id, movieDTO);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteMovie(@PathVariable Long id) {
        return movieService.deleteMovie(id);
    }
}
