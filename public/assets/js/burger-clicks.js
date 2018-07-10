$(function() {
  // eat burger on click
  $(".eat").on("click", function(event) {
    event.preventDefault();
    // console.log("hit");
    var devouredBurger = {
      id: parseInt($(this).data("id"))
    };
    console.log(devouredBurger);
    $.ajax("/api/burgers/" + $(this).data("id"), {
      type: "PUT",
      data: devouredBurger
    }).then(function() {
      console.log("burger was eaten");
      location.reload();
    });
  });

  // remove burger on click
  $(".remove").on("click", function(event) {
    var id = $(this).data("id");
    var removeBurger = {
      id: parseInt(id)
    }
    console.log("remove", id);

    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
      data: removeBurger
    }).then(
      function() {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
    });
  });
});
