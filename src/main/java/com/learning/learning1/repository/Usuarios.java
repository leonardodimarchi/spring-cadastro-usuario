package com.learning.learning1.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.learning.learning1.model.Usuario;

public interface Usuarios extends JpaRepository<Usuario, Long> {

	public Usuario findByNome(String nome);
	public Usuario findByNomeAndEmailContaining(String nome, String email);
	
	@Query("SELECT u FROM Usuario u WHERE u.nome = 'leo'")
	public Usuario buscarNome();
}
