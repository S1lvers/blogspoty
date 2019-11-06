package com.blogfusion.services;

import com.blogfusion.model.entity.UserEntity;
import com.blogfusion.model.enums.AuthorityType;
import com.blogfusion.model.repositories.UserRepository;
import com.blogfusion.model.request.SignupRequest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Set;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public Optional<UserEntity> getUserByEmail(String email) {
        return email == null ? Optional.empty() : userRepository.findByEmail(email);
    }

    public UserEntity createUser(SignupRequest signupRequest) {
        UserEntity user = new UserEntity()
                .setEmail(signupRequest.getEmail())
                .setUsername(signupRequest.getUsername())
                .setPassword(passwordEncoder.encode(signupRequest.getPassword()))
                .setAuthorities(Set.of(AuthorityType.ROLE_USER));
        return userRepository.save(user);
    }

    public UserEntity updateUser(UserEntity userEntity) {
        return userRepository.save(userEntity);
    }
}
