
$(document).ready(function(){
    //code for navbar from maximize library
    $(".sidenav").sidenav();
    $("select").formSelect();
    $(".collapsible").collapsible();
    $(".tooltipped").tooltip();
    $(".datepicker").datepicker({
        format: "dd/mm/yyyy",
        showClearBtn: true,
        i18n: {
            done: "Select"
        }
    });
    $(".parallax").parallax();
    $(".modal").modal();
    // Alert boxs
    $(".upload-image").click(function() {
        alert("Ops! This feature is not working yet.");
    });
  });