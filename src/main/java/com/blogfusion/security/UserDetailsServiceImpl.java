package com.blogfusion.security;

import com.blogfusion.model.entity.UserEntity;
import com.blogfusion.services.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserService userService;

    public UserDetailsServiceImpl(UserService userService) {
        this.userService = userService;
    }


    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        UserEntity userEntity = userService.getUserByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException(String.format("UserEntity with email %s not found", email)));
        return null;
    }
}
