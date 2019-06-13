//api//
    	fetch("https://api.themoviedb.org/3/movie/upcoming?page=1&language=en-US&api_key=8fe7ed2a38151374ac57c4c5cd8d8a01")
    	  .then(function(response) {
    	    return response.json();
    	  })
    		.then(function(response) {
    			console.log(response);
    		  console.log(response.results);
    		  let movie = response.results;
    			let output = "";
    			for(let i = 0; i < movie.length; i++){
    				let id = response.results[i].id;
    				id = JSON.stringify(id);
    				let favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    				if(favoriteMovies.indexOf(id) === -1){
    					output += `
    					<div class="peliculas">
    						<div class="overlay">
    						<div class="addBtn">
    						<span><i class="material-icons favorite" onclick="favorite('${movie[i].id}')">favorite</i></span></div>
    						<div class="movie">
    							<h2>${movie[i].title}</h2>
    								<p id="p_rating"><strong>Rating:</strong> <span>${movie[i].vote_average} / 10 </span> </p>
    								<p><strong>Release date:</strong> <span>${movie[i].release_date} <i class="material-icons date">date_range</i> </span></p>
    								<a onclick="movieSelected('${movie[i].id}')" href="#">Detalles</a>
    						</div>
    						</div>
    						<div class="peliculas_img">
    							<img src="http://image.tmdb.org/t/p/w400/${movie[i].poster_path}" onerror="this.onerror=null;this.src='../images/imageNotFound.png';">
    						</div>
    					</div>
    					`;
    				} else {
    					output += `
    					<div class="peliculas">
    					<div class="overlay">
    					<div class="addBtn">
    					<span><i class="material-icons favoriteMarked" onclick="favorite('${movie[i].id}')">favorite</i></span></div>
    					<div class="movie">
    						<h2>${movie[i].title}</h2>
    							<p id="p_rating"><strong>Rating:</strong> <span>${movie[i].vote_average} / 10 </span> </p>
    							<p><strong>Release date:</strong> <span>${movie[i].release_date} <i class="material-icons date">date_range</i> </span></p>
    							<a onclick="movieSelected('${movie[i].id}')" href="#">DEtalles</a>
    					</div>
    					</div>
    					<div class="peliculas_img">
    						<img src="http://image.tmdb.org/t/p/w400/${movie[i].poster_path}" onerror="this.onerror=null;this.src='../images/imageNotFound.png';">
    					</div>
    				</div>
    				`;
    				}
    			}
    			// Display movies.
    			let movieInfo = document.getElementById("movies");
    			movieInfo.innerHTML = output;


    		})
    		// If theres an error, logs the error in console.
    		.catch( (err) =>{
    			console.log(err);
    		})
        
