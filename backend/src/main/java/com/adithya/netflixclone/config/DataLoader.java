package com.adithya.netflixclone.config;

import com.adithya.netflixclone.entity.Movie;
import com.adithya.netflixclone.repository.MovieRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataLoader {

    @Bean
    CommandLineRunner loadMovies(MovieRepository movieRepository) {
        return args -> {

            // Prevent duplicate insertion on every restart
            if (movieRepository.count() > 0) {
                System.out.println("Movies already loaded. Skipping DataLoader...");
                return;
            }

            Movie m1 = new Movie(null, "The Godfather", "Mafia crime family story",
                    "Crime", 9.2, 1972,
                    "https://dummyimage.com/600x400/000/fff&text=Godfather",
                    "https://youtube.com/some_trailer");

            Movie m2 = new Movie(null, "Inception", "Dream heist sci-fi thriller",
                    "Sci-Fi", 8.8, 2010,
                    "https://dummyimage.com/600x400/000/fff&text=Inception",
                    "https://youtube.com/some_trailer");

            Movie m3 = new Movie(null, "Interstellar", "Space-time exploration movie",
                    "Sci-Fi", 8.6, 2014,
                    "https://dummyimage.com/600x400/000/fff&text=Interstellar",
                    "https://youtube.com/some_trailer");

            Movie m4 = new Movie(null, "The Dark Knight", "Batman vs Joker action thriller",
                    "Action", 9.0, 2008,
                    "https://dummyimage.com/600x400/000/fff&text=DarkKnight",
                    "https://youtube.com/some_trailer");

            Movie m5 = new Movie(null, "Avengers Endgame", "Superhero finale battle",
                    "Action", 8.4, 2019,
                    "https://dummyimage.com/600x400/000/fff&text=Endgame",
                    "https://youtube.com/some_trailer");

            Movie m6 = new Movie(null, "Joker", "Psychological crime drama",
                    "Drama", 8.4, 2019,
                    "https://dummyimage.com/600x400/000/fff&text=Joker",
                    "https://youtube.com/some_trailer");

            Movie m7 = new Movie(null, "Parasite", "Korean thriller about class divide",
                    "Thriller", 8.6, 2019,
                    "https://dummyimage.com/600x400/000/fff&text=Parasite",
                    "https://youtube.com/some_trailer");

            Movie m8 = new Movie(null, "Frozen 2", "Magical fantasy adventure",
                    "Animation", 6.9, 2019,
                    "https://dummyimage.com/600x400/000/fff&text=Frozen2",
                    "https://youtube.com/some_trailer");

            movieRepository.save(m1);
            movieRepository.save(m2);
            movieRepository.save(m3);
            movieRepository.save(m4);
            movieRepository.save(m5);
            movieRepository.save(m6);
            movieRepository.save(m7);
            movieRepository.save(m8);

            System.out.println("Sample movies loaded successfully!");
        };
    }
}
