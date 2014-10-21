function movieQuery(movie){
  var promise = $.ajax({
    url: 'movieSearch.php',
    type: 'get',
    dataType: 'json',
    data: {
      query: movie
    }
  });
  
  return promise;
}


var movieList = {
  movieTemplate: Handlebars.compile($('#movie-template').html()),
  container: document.getElementById('movie-list'),


  render: function(movies){
    var html = '';

    for (var i = 0; i < movies.length; i++) {
      html += this.movieTemplate(movies[i]);
    }
    
    this.container.innerHTML = html;
  },
};



$('.search-form').on('submit', function(e){
  e.preventDefault();
  var searchTerm = $('#movie-field').val();
  var query = movieQuery(searchTerm);
  
  query.done(function(data) {  
    movieList.render(data.movies);
    
  });
    
  query.fail(function() {
    toastr.error('There was an error locating your search');
  });

  this.reset();
});