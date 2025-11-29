package com.adithya.netflixclone.service;

public interface WatchlistService {

    String addToWatchlist(Long movieId, String userEmail);

    String removeFromWatchlist(Long movieId, String userEmail);

    Object getUserWatchlist(String userEmail);
}
