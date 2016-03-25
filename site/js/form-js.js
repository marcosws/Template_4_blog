$(document).ready(function(){

	var arquivo = "";
	$('#imagem').click(function(){
	
		$("#imagem").val();
		$('input:file').change(function(){
			arquivo = $( this ).val().split("\\").pop();
		});	
		
	}); 
	
	$('.publicar').click(function(){
	
		var valida = true;
		var msg = "";
		var msg_final = "O Formulário não foi enviado pelas seguintes pendencias:\n";
		var cont1 = 0;
		var ocorrencia = 0;
		var itens = new Array();
		var nomesCampos = ["Titulo","Subtitulo","Autor","Fonte"];
		
		$('.input_text').each(function(){
			itens[cont1] = $(this).val();
			if(itens[cont1] === ""){
				msg += " [" + nomesCampos[cont1] + "] ";
				ocorrencia += 1;
			}
			cont1 += 1;
		});
		
		if(itens.indexOf("") !== -1){
			valida = false;
			if(ocorrencia > 1){
				msg_final += "Os campos " + msg + " Devem ser preenchidos !\n";
			}
			else{
				msg_final += "O campo " + msg + " Deve ser preenchido !\n";
			}
		}
		
		var artigo = $('.artigo').val();
		if(artigo === ""){
			valida = false;
			msg_final += "A Publicação requer a inclusão de um artigo !\n";
		}
		
		if(arquivo === ""){
			valida = false;
			msg_final += "Deve selecionar o arquivo !\n";
		}
		
		if(valida){
			$('.formulario').submit();
		}
		else{
			alert(msg_final);
		}
	});

});