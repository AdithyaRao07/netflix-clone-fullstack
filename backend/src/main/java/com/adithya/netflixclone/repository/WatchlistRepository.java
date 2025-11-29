package com.adithya.netflixclone.repository;

import com.adithya.netflixclone.entity.Movie;
import com.adithya.netflixclone.entity.User;
import com.adithya.netflixclone.entity.Watchlist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface WatchlistRepository extends JpaRepository<Watchlist, Long> {

    // Get watchlist for a specific user
    List<Watchlist> findByUser(User user);

    // Check if a user already saved a specific movie
    Optional<Watchlist> findByUserAndMovie(User user, Movie movie);
}
