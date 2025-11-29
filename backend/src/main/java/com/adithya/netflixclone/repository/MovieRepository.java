package com.adithya.netflixclone.repository;

import com.adithya.netflixclone.entity.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<Movie, Long> {
}
