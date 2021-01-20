// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".burger").on("click", function(event) {
    var id = $(this).data("id");
    var newEat = $(this).data("neweat");

    var newEatenState = {
      eaten: newEat
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatenState
    }).then(
      function() {
        console.log("changed eaten to", newEat);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = $("#bu").val().trim()

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: {burger_name: newBurger, devoured: $(`input[name="devoured"]:checked`).val()}
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    let id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  })
});
