$(function() {
  $(".eat").on('click', function(event) {
    event.preventDefault();
    console.log('hit');
    var devouredBurger = {
      id: parseInt($(this).attr('name'))
    };
    console.log(devouredBurger);
    $.ajax("/api/burgers/" + $(this).attr('name'), {
      type: "PUT",
      data: devouredBurger
    }).then(function() {
      console.log('burger was eaten');
      location.reload();
    });
  });
});
