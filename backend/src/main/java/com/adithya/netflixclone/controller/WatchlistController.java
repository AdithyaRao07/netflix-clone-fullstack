package com.adithya.netflixclone.controller;

import com.adithya.netflixclone.service.WatchlistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/watchlist")
public class WatchlistController {

    @Autowired
    private WatchlistService watchlistService;

    @PostMapping("/add/{movieId}")
    public String addToWatchlist(@PathVariable Long movieId, Authentication auth) {
        String email = auth.getName();   // get logged-in user
        return watchlistService.addToWatchlist(movieId, email);
    }

    @DeleteMapping("/remove/{movieId}")
    public String removeFromWatchlist(@PathVariable Long movieId, Authentication auth) {
        String email = auth.getName();
        return watchlistService.removeFromWatchlist(movieId, email);
    }

    @GetMapping
    public Object getUserWatchlist(Authentication auth) {
        String email = auth.getName();
        return watchlistService.getUserWatchlist(email);
    }
}
