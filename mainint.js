//api//
window.onload = function() {
  fetch("https://api.themoviedb.org/3/movie/550?api_key=8fe7ed2a38151374ac57c4c5cd8d8a01")
   .then(function(response) {
     return response.json();
   })
   .then(function(resultado) {

     document.querySelector("h2").innerHTML = resultado.data.title
     document.querySelector("body").innerHTML += '<img src= "'+ resultado.data.image_url + '" alt="">'
   })

   .catch(function(error) {
     console.log(error);
   })

}

var url = "https://api.themoviedb.org/3/movie/550?api_key=8fe7ed2a38151374ac57c4c5cd8d8a01"

fetch(url)
  .then(function(response){
    return response.json();
  })

  .then(function(responseJSON){
      let movie = responseJSON.results;
      let output = "";
      for(let i = 0; i < movie.length; i++){
        let id = responseJSON.results[i].id;
      id = JSON.stringfy(id);
      let favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
      if(favoriteMovies.indexOf(id) === -1){
        output +=
      }
      }
  })
