//Edicao de usuarios, reutilizando a pagina inicial
var idUsuario = window.location.href.split('/')[5]

if(idUsuario != undefined){
	$("#titulo").text("Editar usuário - "+idUsuario)
	$("#botaoCadastrar").text("Confirmar edição")
	
	$.ajax({
		url: "/index/editarUsuario/"+idUsuario,
		type: "PUT"
	}).done(e=>{
		console.table(e)
		
		$("#inputNome").val(e.nome)
		$("#inputEmail").val(e.email)
		$("#inputSenha").val(e.senha)
		$("#inputCep").val(e.endereco.cep)
		$("#inputRua").val(e.endereco.rua)
		$("#inputNumero").val(e.endereco.numero)
		$("#inputBairro").val(e.endereco.bairro)
		$("#inputCidade").val(e.endereco.cidade)
	}).fail(()=>{
		alert("Falha no AJAX de edicao de usuario (Index.js)")
	})
}