var $textBoxPokemon = $('#searchPokemon');
var $button = $('#btn-pokemon');
var obj;

$button.on("click", function(e) {
  e.preventDefault();
  $.get('http://pokeapi.co/api/v2/pokemon/' + $textBoxPokemon.val()+"/", function getPokemon (response){  
  var types = response.types;
  $('.row-bg').removeAttr("hidden");
  $('.empty').children().empty();
  $('h2').append("Name: " + response.name);
  $('h3').append("Type: ");
  response.types.forEach(function(element,i,types){  
     $('h3').append(types[i].type.name +" ");
   })
  $('h4').append("Description: ");
  $('ul').append('<li>');
  $('ul').children().eq(0).addClass('Height');
  $('.Height').append("Height: " + response.height);
  $('ul').append('<li>');
  $('ul').children().eq(1).addClass('Weight');
  $('.Weight').append("Weight: " + response.weight);
  obj = response;
  });
});
