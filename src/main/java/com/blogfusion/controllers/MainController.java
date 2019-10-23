package com.blogfusion.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {

    @RequestMapping("/")
    public String index() {
        return "forward:/static/index.html";
    }

    @GetMapping("/login")
    public String getLoginPage() {
        return "forward:/static/index.html";
    }

}
