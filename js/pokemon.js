var $textBoxPokemon = $('#searchPokemon');
var $textBoxType = $('#searchType');
var $buttonPokemon = $('#btn-pokemon');
var $buttonType = $('#btn-type');
var obj;

$buttonPokemon.on("click", function(e) {
  e.preventDefault();
  $.get('http://pokeapi.co/api/v1/pokemon/' + $textBoxPokemon.val()+"/", function getPokemon (response){  
 
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

$buttonType.on("click", function(e) {
  e.preventDefault();
 
  $.get('http://pokeapi.co/api/v2/type/' + $textBoxType.val()+"/", function getType (response){  
  var pokemonsNames = [];
  var pokemons = response.pokemon
  console.log(response);
  $('.row-bg').removeAttr("hidden");
  $('.empty').children().empty();
  $('h3').append(response.name);

  for (var i=0; i<10; i++ ){
      pokemonsNames[i] = pokemons[i].pokemon.name;
      $('ul').append("<li>" + pokemonsNames[i] + "</li>");
       //inicializa cogiendo la primera imagen del objeto de artista
    
  };
  });
});

