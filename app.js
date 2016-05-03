console.log('ok')
$('h1').css({"font-size":"30px", "color":"#106271", "margin":"40px"})
$('body').css({"display":"inline-block","width":"90%","text-align":"center"})
$('button').css({"background-color": "#82d7c3", "color":"white", "border-radius":"10%", "width":"80px","height":"50px","font-size":"16px"});
$('input').css({"width":"350px", "height":"50px","border":"1px solid 	#d4d4d4","font-size":"16px","margin-bottom":"30px"});
  $('#search').click(function() {

    $.ajax({
      url: 'http://www.omdbapi.com/?s=' + $(".movie-title").val(),
      method: 'get'
      }).done(function(movies){

        movies.Search.forEach(function(movie){
        var $newMovie = $('<div>').text(movie.Title);
        var $poster = $('<img>').attr("src", movie.Poster)
        $('.movie-list').append($newMovie);
        $($newMovie).append($poster);
        $($newMovie).css({"border": "2px solid 	#d4d4d4", "height": "40px", "width": "200px", "padding":"30px", "font-size": "20px", "color":"#82d7c3",
         "text-align":"justify", "display": "inline-block","vertical-align":"top","margin":"5px","position":"relative"});

        $($poster).css({"width":"50px","height":"80px","position":"absolute","bottom":"0","right":"0"})
      });
    });
  });
