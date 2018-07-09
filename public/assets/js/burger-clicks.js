$(function() {
  // handles eat burger click
  $(".eat").on('click', function(event) {
    event.preventDefault();
    console.log('hit');
    var devouredBurger = {
      id: parseInt($(this).data('id'))
    };
    console.log(devouredBurger);
    $.ajax("/api/burgers/" + $(this).data('id'), {
      type: "PUT",
      data: devouredBurger
    }).then(function() {
      console.log('burger was eaten');
      location.reload();
    });
  });

  // handles remove burger click
  $(".remove").on('click', function(event) {
    console.log('hit2');
    var id = $(this).data('id');
    
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(function() {
      console.log('burger was removed');
      location.reload();
    });
  });
});
