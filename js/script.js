$(document).ready(function() {
  $('.square').click(
    function() {
      var thisSquare = $(this);
      if (!thisSquare.hasClass('yellow') && !thisSquare.hasClass('green')) {
        $.ajax({
          url: "https://flynn.boolean.careers/exercises/api/random/int",
          method: "GET",
          success: function(data, stato) {
            $("#risultati").html(data);
            console.log(data.response);
            if (data.response <= 5) {
              thisSquare.addClass('yellow');
              thisSquare.text(data.response)

            } else if (data.response > 5) {
              thisSquare.addClass('green');
              thisSquare.text(data.response)
            }
          },
          error: function(richiesta, stato, errori) {
            alert("E ' avvenuto un errore. " + errore);
          }
        });
      }
    }
  );
});
