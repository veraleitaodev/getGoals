
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
    // Alert box
    $(".my-progress-bar").click(function() {
        alert("Ops! This progress bar is not working yet.");
    });
  });