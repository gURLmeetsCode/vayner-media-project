// Logic for API
$("document").ready(function(){


  $.ajax({
    type: 'GET',
    url: 'http://jsonplaceholder.typicode.com/albums',
    success: function(albums){
      // console.log('success', album);
      $.each(albums, function(index, album){
        if(album.userId == 1){
          $('.album-id').append('<h4> '+ album.id +' </h4>');
          $('.album-title').append('<h4> '+ album.title + ' </h4>');
        }
        if(album.userId == 2){
          $().append('<h4>'+ album.id +' </h4>');
          $().append('<h4> '+ album.title + ' </h4>');
        }
      });
    }
  });
});

// Logic for Drap and Drop functionality

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
