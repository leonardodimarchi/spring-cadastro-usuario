var linhasHtml;

$.ajax({
	url:"/usuarios/mostrarUsuarios",
	type:"PUT"
}).done(e=>{
	var usuarios = e
	
	linhaHtml = ''
	if(usuarios.length != 0){
		for(usuario of usuarios){
			linhasHtml+='<tr>'
						+'<td>' + usuario.id +'</td>'
						+'<td>' + usuario.email +'</td>'
						+'<td>' + usuario.senha +'</td>'
						+'<td>' + usuario.endereco.rua+', '+usuario.endereco.numero+' - '+usuario.endereco.bairro+'</td>'
						+'<td><button onclick="editarUsuario()" value='+ usuario.id +'> Editar </button> </td>'
						+'<td><button onclick="excluirUsuario()" value='+ usuario.id +'> Remover </button> </td>'
					+'</tr>' 
		}	
		$("#bodyTodosUsuarios").html(linhasHtml)
	}
}).fail(()=>{
	alert("Falha no ajax Usuarios.js")
})

function editarUsuario(){
	var idBotao = $(event.currentTarget).attr('value')
	
	window.location.href="/index/editar/"+idBotao	
	
}

function excluirUsuario(){
	var idBotao = $(event.currentTarget).attr('value')
	
	if(confirm("Deseja mesmo excluir o usuario "+idBotao+" ?") == true){
		$.ajax({
			url:`/usuarios/excluir/${idBotao}`,
			type:"PUT"
		}).done(e=>{
			window.location.href="/usuarios"
		}).fail(()=>{
			alert("Falha no ajax - Exclusao de Usuarios (usuarios.js)")
		})
	}
	
}