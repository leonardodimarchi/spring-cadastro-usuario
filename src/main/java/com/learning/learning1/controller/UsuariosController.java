package com.learning.learning1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.learning.learning1.model.Usuario;
import com.learning.learning1.repository.Usuarios;



@Controller
@RequestMapping("/usuarios")
public class UsuariosController {
	
	@Autowired
	private Usuarios usuarios;
	
	@RequestMapping
	public ModelAndView tela() {
		return new ModelAndView("usuarios");
	}
	
	@RequestMapping("/mostrarUsuarios")
	@ResponseBody
	public List<Usuario> mostrarUsuarios(){
		return usuarios.findAll();
	}
}
