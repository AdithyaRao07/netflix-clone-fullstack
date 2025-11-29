package com.adithya.netflixclone.service;

import com.adithya.netflixclone.dto.AuthResponse;
import com.adithya.netflixclone.dto.LoginRequest;
import com.adithya.netflixclone.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    // LOGIN LOGIC
    public AuthResponse login(LoginRequest request) {

        try {
            // Authenticate email + password
            Authentication auth = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(),
                            request.getPassword()
                    )
            );

            // If authentication successful → generate JWT
            String token = jwtUtil.generateToken(request.getEmail());

            return new AuthResponse(token, "Login successful");

        } catch (AuthenticationException e) {
            return new AuthResponse(null, "Invalid email or password");
        }
    }
}
