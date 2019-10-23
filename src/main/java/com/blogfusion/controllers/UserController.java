package com.blogfusion.controllers;

import com.blogfusion.model.dto.UserDto;
import com.blogfusion.model.request.SignupRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class UserController {

    //TODO
    @GetMapping("/profile")
    public ResponseEntity<UserDto> getProfile() throws Exception {
        return new ResponseEntity<>(new UserDto(), HttpStatus.OK);
    }

    //TODO
    @PostMapping("/create")
    public ResponseEntity<UserDto> registration(@RequestBody SignupRequest request) throws Exception {
        return new ResponseEntity<>(new UserDto(), HttpStatus.OK);
    }
}
