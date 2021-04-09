var usuario = {}
usuario.endereco = {}
function cadastrarUsuario(){

	//Usuario
	usuario.nome = $("#inputNome").val();
	usuario.email = $("#inputEmail").val();
	usuario.senha = $("#inputSenha").val();
	
	//Endereco
	usuario.endereco.cep = $("#inputCep").val();
	usuario.endereco.rua = $("#inputRua").val();
	usuario.endereco.numero = $("#inputNumero").val();
	usuario.endereco.bairro = $("#inputBairro").val();
	usuario.endereco.cidade = $("#inputCidade").val();
	
	//Printando
	console.log(JSON.stringify(usuario))
	
	$.ajax({
		url:"/index/cadastrar",
		type:"PUT",
		dataType: "json",
		contentType:"application/json",
		data: JSON.stringify(usuario)
	}).done(e=>{
		console.table(e)
		alert("Ajax funcionou, informacoes no console.log")
		window.location.href="/usuarios"
	}).fail(() => {
		alert("Erro no AJAX - Index.js")
	})
}

function buscarCep(){
	var cep = $("#inputCep").val()
	
	if(cep != ''){
		$.ajax({
			url:`https://viacep.com.br/ws/${cep}/json/`
		}).done(e=>{
			$("#inputRua").val(e.logradouro)
			$("#inputBairro").val(e.bairro)
			$("#inputCidade").val(e.localidade)
		}).fail(()=>{
			alert("Falha no AJAX de buscar CEP")
		})
	}else{
		alert("Coloque o CEP")
	}
}

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
		
		usuario.id = idUsuario
		usuario.endereco.id = e.endereco.id
		
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