$(document).ready(function() {
    $(document).on("click", function(event) {
          if ($(event.target).closest("#menu-btn").length === 0) {
                $("#menu-btn").prop("checked", false);
          }
    });
  });