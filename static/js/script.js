$(document).ready(function () {
  //code for navbar from maximize library
  $(".sidenav").sidenav();
  //code for dropdown form from maximize library
  $("select").formSelect();
  //code for SMART collapsible text boxes from maximize library
  $(".collapsible").collapsible();
  //code for edit and delete icons from maximize library
  $(".tooltipped").tooltip();
  //code for date input in input form from maximize library
  $(".datepicker").datepicker();
  //code for home page parallax from maximize library
  $(".parallax").parallax();
  //code for confirmation modal used in delete from maximize library
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