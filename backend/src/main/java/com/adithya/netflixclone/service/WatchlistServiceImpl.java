package com.adithya.netflixclone.service;

import com.adithya.netflixclone.entity.Movie;
import com.adithya.netflixclone.entity.User;
import com.adithya.netflixclone.entity.Watchlist;
import com.adithya.netflixclone.repository.MovieRepository;
import com.adithya.netflixclone.repository.UserRepository;
import com.adithya.netflixclone.repository.WatchlistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WatchlistServiceImpl implements WatchlistService {

    @Autowired
    private WatchlistRepository watchlistRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MovieRepository movieRepository;

    @Override
    public String addToWatchlist(Long movieId, String userEmail) {

        User user = userRepository.findByEmail(userEmail)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Movie movie = movieRepository.findById(movieId)
                .orElseThrow(() -> new RuntimeException("Movie not found"));

        // Check for duplicate
        boolean exists = watchlistRepository.findByUserAndMovie(user, movie).isPresent();

        if (exists) {
            return "Movie already in watchlist";
        }

        Watchlist newItem = new Watchlist(user, movie);
        watchlistRepository.save(newItem);

        return "Movie added to watchlist";
    }

    @Override
    public String removeFromWatchlist(Long movieId, String userEmail) {

        User user = userRepository.findByEmail(userEmail)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Movie movie = movieRepository.findById(movieId)
                .orElseThrow(() -> new RuntimeException("Movie not found"));

        Watchlist item = watchlistRepository.findByUserAndMovie(user, movie)
                .orElseThrow(() -> new RuntimeException("Movie not in watchlist"));

        watchlistRepository.delete(item);

        return "Movie removed from watchlist";
    }

    @Override
    public Object getUserWatchlist(String userEmail) {
        User user = userRepository.findByEmail(userEmail)
                .orElseThrow(() -> new RuntimeException("User not found"));

        List<Watchlist> list = watchlistRepository.findByUser(user);

        return list.stream().map(item -> item.getMovie()).toList();
    }
}
