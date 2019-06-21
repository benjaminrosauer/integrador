// fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=8fe7ed2a38151374ac57c4c5cd8d8a01&language=en-US")
//   .then(function(response) {
//     return response.json();
//   })
//   .then()
//
//   var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://api.themoviedb.org/3/movie/upcoming?page=1&language=en-US",
//     "method": "GET",
//     "headers": {},
//     "data": "{}"
//   }
//
//   $.ajax(settings).done(function (response) {
//     console.log(response);
//   });

fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=8fe7ed2a38151374ac57c4c5cd8d8a01&language=en-US").then(function(response) {
    return response.json();
  })
  .then(function(response) {
    console.log(response);
    let res = response;
    let elementoListado = document.querySelector('#listadoGeneros');

    for(var i = 0; i < res.genres.length; i++ ) {
      console.log(res.genres[i]['name']);
      // Aca pongan el HTML en el cual se veria el carrousel de las peliculas
      elementoListado.innerHTML += "<li><a href='carouselDePeliculas.html?idGenero=" + res.genres[i]['id'] + "'>" + res.genres[i]['name'] + '</li>';
    }
  });
