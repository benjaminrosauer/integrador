fetch("https://api.themoviedb.org/3/movie/upcoming?page=1&language=en-US&api_key=8fe7ed2a38151374ac57c4c5cd8d8a01")
  .then(function(response) {
    return response.json();
  })
  
        var settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://api.themoviedb.org/3/movie/upcoming?page=1&language=en-US",
          "method": "GET",
          "headers": {},
          "data": "{}"
        }

        $.ajax(settings).done(function (response) {
          console.log(response);
        });
