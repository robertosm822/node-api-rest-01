(function($){
	
	function replaceAll(str, find, replace) {
		return str.replace(new RegExp(find, 'g'), replace);
	}
	function mostrarFilms(films){
		
		var film = JSON.parse(films); 
		var html="";
		for(x=0; x < film.length; x++){
			
			html += '<a href="'+film[x]+'" target="_blank">'+film[x]+'</a><br>';
		}
		//console.log(html);
		return html;
	}
	
	
	
	$(document).ready(function(){
		const listData = function(){
			$.get('http://localhost:3000/planets/', function(result){
				//console.log(result.data);
				if(!result.data.length){
					return;
				}
				var tmpl='';
				result.data.forEach(function(planet){
					//console.log(planet);
				
					tmpl = '<tr>'+
									'<td>'+planet._id+'</td>'+	
									'<td>'+planet.name+'</td>'+
									'<td>'+ mostrarFilms( planet.films ) +'</td>'+
								'</tr>';
					$('#list_table tbody').append(tmpl);
				});
			});
		}
		const searchByName = function(){
			$('#btn_search').on('click', function(){
			
				var Name = $('input[name="name"]').val();
				$.get('http://localhost:3000/planets/search?name='+Name, function(result){
					//if(!result.data.length){
					//	return;
					//}
					console.log(result[0]);
					$('#result_search').html("");
					for(x=0; x < result.length; x++){
						$('#result_search').append(
							result[x].name + " - [" + result[x].date +"]<br>"
						);
					}
				});
			});
		}
		
		searchByName();
		listData();
	});
	
})(jQuery)