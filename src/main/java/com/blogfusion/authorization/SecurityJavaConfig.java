package com.blogfusion.authorization;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import static com.blogfusion.model.enums.AuthorityType.*;


@Configuration
@EnableWebSecurity
public class SecurityJavaConfig extends WebSecurityConfigurerAdapter {

    //todo enable csrf
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable()
                .authorizeRequests()
                .antMatchers(permitedApi).permitAll()
                .antMatchers(userRoleApi).hasAnyAuthority(ROLE_USER.name(), ROLE_ADMIN.name())
                .antMatchers(adminRoleApi).hasAuthority(ROLE_ADMIN.name());
    }



    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    private static String[] permitedApi = {"/api/login"};
    private static String[] userRoleApi = {"/api/logout", "/api/user**"};
    private static String[] adminRoleApi = {"/api/admin"};
}
