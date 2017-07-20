var $textBoxPokemon = $('#searchPokemon');
var $button = $('#btn-pokemon');

$button.on("click", function(e) {
  e.preventDefault();
/*
$.ajax({
   url: 'http://pokeapi.co/api/v2/pokemon',
   dataType: 'json',
   data: {
     	type: "pokemon",
      	query : $textBoxPokemon.val()
    },
   success: getPokemon
   });
});
function getPokemon (response){
  //$('h2').innerText(response);
  console.log(response);
};
  */
  $.get('http://pokeapi.co/api/v2/pokemon/' + $textBoxPokemon.val()+"/", function getPokemon (response){
  //$('h2').innerText(response);
  
  $('h2').empty();
  $('h2').append(response.name);
  console.log(response);
  });
});
