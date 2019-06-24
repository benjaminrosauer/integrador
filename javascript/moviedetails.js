


function movieSelected(id) {

  sessionStorage.setItem('movieId', id);
  window.location = 'movie.html';
  return false;
}

function holaPelicula (){

  let movieId= sessionStorage.getItem('movieId');
  axios.get('https://api.themoviedb.org/3/movie/434?api_key=8fe7ed2a38151374ac57c4c5cd8d8a01&language=en-US')
  .then((response)=>{
    console.log(response);
    let movie = response.overview;
    let output =
    '<div class="row"> <div class="col-md-4">   <h4 >${movie[i].overview}</h4> <img src="http://image.tmdb.org/t/p/w400/${movie[i].poster_path}" > </div> <div class="col-md-8"></div></div> ';
    let movieInfo = document.getElementById("movie");
    movieInfo.innerHTML = output;
  })

}
}
