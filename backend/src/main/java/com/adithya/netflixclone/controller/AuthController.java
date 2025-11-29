package com.adithya.netflixclone.controller;

import com.adithya.netflixclone.dto.AuthResponse;
import com.adithya.netflixclone.dto.LoginRequest;
import com.adithya.netflixclone.dto.RegisterRequest;
import com.adithya.netflixclone.entity.User;
import com.adithya.netflixclone.service.AuthenticationService;
import com.adithya.netflixclone.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final UserService userService;
    private final AuthenticationService authenticationService;

    @Autowired
    public AuthController(UserService userService,
                          AuthenticationService authenticationService) {
        this.userService = userService;
        this.authenticationService = authenticationService;
    }

    @PostMapping("/login")
    public AuthResponse login(@RequestBody LoginRequest request) {
        return authenticationService.login(request);
    }

    @PostMapping("/register")
    public User register(@RequestBody RegisterRequest request) {
        return userService.registerUser(request);
    }
}
