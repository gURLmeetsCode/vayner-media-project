// Logic for users API

$("document").ready(function(){


  $.ajax({
    type: 'GET',
    url: 'http://jsonplaceholder.typicode.com/users',
    success: function(users){
      // console.log('success', user);

      $.each(users, function(index, user){
        if(user.id == 1){
          $('.user-name_1').append('<p> '+ user.name +' </p>');
        }
        if(user.id == 2){
          $('.user-name_2').append('<p> '+ user.name +' </p>');
        }
      });
    }
  });

// Logic for albums API

  $.ajax({
    type: 'GET',
    url: 'http://jsonplaceholder.typicode.com/albums',
    success: function(albums){
      // console.log('success', album);
      var album_data = [];
      var album_data_2 = [];

      $.each(albums, function(index, album){

         if(album.userId == 1){
           album_data.push("<h4 id=''"+index+"''>"+album.id+"</h4>");
           album_data.push("<h4 id=''"+index+"''>"+album.title+" </h4>");
         }
        if(album.userId == 2){
          album_data_2.push("<h4 id=''"+index+"''>"+album.id+"</h4>");
          album_data_2.push("<h4 id=''"+index+"''>"+album.title+" </h4>");
         }
      });
      $('.album-id').append(album_data[0]);
      $('.album-title').append(album_data[1]);
      $('.album-id-2').append(album_data[2]);
      $('.album-title-2').append(album_data[3]);
      $('.album-id-3').append(album_data[4]);
      $('.album-title-3').append(album_data[5]);
      $('.album-id-4').append(album_data[6]);
      $('.album-title-4').append(album_data[7]);
      $('.album-id-5').append(album_data[8]);
      $('.album-title-5').append(album_data[9]);
      $('.album-id-6').append(album_data[10]);
      $('.album-title-6').append(album_data[11]);
      $('.album-id-7').append(album_data[12]);
      $('.album-title-7').append(album_data[13]);
      $('.album-id-8').append(album_data[14]);
      $('.album-title-8').append(album_data[15]);
      $('.album-id-9').append(album_data[16]);
      $('.album-title-9').append(album_data[17]);
      $('.album-id-10').append(album_data[18]);
      $('.album-title-10').append(album_data[19]);
      $('.album-id-11').append(album_data_2[0]);
      $('.album-title-11').append(album_data_2[1]);
      $('.album-id-12').append(album_data_2[2]);
      $('.album-title-12').append(album_data_2[3]);
      $('.album-id-13').append(album_data_2[4]);
      $('.album-title-13').append(album_data_2[5]);
      $('.album-id-14').append(album_data_2[6]);
      $('.album-title-14').append(album_data_2[7]);
      $('.album-id-15').append(album_data_2[8]);
      $('.album-title-15').append(album_data_2[9]);
      $('.album-id-16').append(album_data_2[10]);
      $('.album-title-16').append(album_data_2[11]);
      $('.album-id-17').append(album_data_2[12]);
      $('.album-title-17').append(album_data_2[13]);
      $('.album-id-18').append(album_data_2[14]);
      $('.album-title-18').append(album_data_2[15]);
      $('.album-id-19').append(album_data_2[16]);
      $('.album-title-19').append(album_data_2[17]);
      $('.album-id-20').append(album_data_2[18]);
      $('.album-title-20').append(album_data_2[19]);
    }
  });
});

// Logic for Drag and Drop functionality

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    // This is should not just pipe data from one table to the next. The selected target should update the table-row it is dropped on
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
