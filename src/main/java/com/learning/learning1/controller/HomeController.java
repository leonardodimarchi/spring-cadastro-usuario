package com.learning.learning1.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.learning.learning1.model.Usuario;
import com.learning.learning1.repository.Usuarios;

//Ao receber a url "/", faça tal coisa
@Controller
@RequestMapping("/index")
public class HomeController {
	
	@Autowired
	private Usuarios usuarios;
	
	@RequestMapping("/**")
	public ModelAndView tela() {
		return new ModelAndView("index");
	}
	
	@RequestMapping("/cadastrar")
	@ResponseBody
	public Usuario cadastrarUsuario(@RequestBody Usuario usuario) {
		return usuarios.save(usuario);
	}
	
	@RequestMapping("/editarUsuario/{id}")
	@ResponseBody
	public Optional<Usuario> editar(@PathVariable Long id){
		return usuarios.findById(id);
	}
}
