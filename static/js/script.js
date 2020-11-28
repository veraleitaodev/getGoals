$(document).ready(function () {
  //code for navbar from maximize library
  $(".sidenav").sidenav();
  $("select").formSelect();
  $(".collapsible").collapsible();
  $(".tooltipped").tooltip();
  $(document).ready(function () {
    $(".datepicker").datepicker();
  });
  $(".parallax").parallax();
  $(".modal").modal();
  // Alert boxs
  $(".upload-image").click(function () {
    alert("Ops! This feature is not working yet.");
  });
  /* fade out flash messages - code obtained from
https://stackoverflow.com/questions/553402/how-to-fadeout-remove-a-div-in-jquery
to fade out and hide element */
  $("#flashMessage").fadeOut(3000, function () {
    $(this).remove();
  });
});
