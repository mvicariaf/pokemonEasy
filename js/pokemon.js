var $textBoxPokemon = $('#searchPokemon');
var $button = $('#btn-pokemon');
var obj;

$button.on("click", function(e) {
  e.preventDefault();
  $.get('http://pokeapi.co/api/v1/pokemon/' + $textBoxPokemon.val()+"/", function getPokemon (response){  
  obj = response;
  var types = response.types;
  var descriptionUri = response.descriptions[1].resource_uri;
  var urlApi = "http://pokeapi.co" + descriptionUri;
  $('.row-bg').removeAttr("hidden");
  $('.empty').children().empty();
  $('h2').append("Name: " + response.name);
  $('h3').append("Type: ");
  response.types.forEach(function(element,i,types){  
     $('h3').append(types[i].name +" ");
   })
  $('h4').append("Description: ");
  $.get(urlApi, function getDescription( response){
    $('.desc').append(response.description);

    });
  
  });
});
