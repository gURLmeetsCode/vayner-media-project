
$("document").ready(function(){


  $.ajax({
    type: 'GET',
    url: 'http://jsonplaceholder.typicode.com/albums',
    success: function(albums){
      // console.log('success', album);
      $.each(albums, function(index, album){
        if(album.userId == 1){
          $('.user_1-id').append('<p> '+ album.id +' </p>');
          $('.user_1-title').append('<p> '+ album.title + ' </p>');
        }
        if(album.userId == 2){
          $('.user_2-id').append('<p>'+ album.id +' </p>');
          $('.user_2-title').append('<p> '+ album.title + ' </p>');
        }
      });
    }
  });
});
