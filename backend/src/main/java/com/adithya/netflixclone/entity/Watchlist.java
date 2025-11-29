package com.adithya.netflixclone.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "watchlist")
public class Watchlist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Each watchlist item belongs to ONE user
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    // Each watchlist item belongs to ONE movie
    @ManyToOne
    @JoinColumn(name = "movie_id")
    private Movie movie;

    public Watchlist() {}

    public Watchlist(User user, Movie movie) {
        this.user = user;
        this.movie = movie;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
    }
}
