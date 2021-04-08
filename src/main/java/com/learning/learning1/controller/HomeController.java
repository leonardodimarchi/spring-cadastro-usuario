package com.learning.learning1.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;


//Ao receber a url "/", faça tal coisa
@Controller
@RequestMapping({"/","/index"})
public class HomeController {
	
	@RequestMapping
	public ModelAndView tela() {
		return new ModelAndView("index");
	}
}
