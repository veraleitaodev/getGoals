
$(document).ready(function(){
    //code for navbar from maximize library
    $(".sidenav").sidenav();
    $('select').formSelect();
    $('.collapsible').collapsible();
    $('.tooltipped').tooltip();
    $('.datepicker').datepicker({
        format: "dd/mm/yyyy",
        showClearBtn: true,
        i18n: {
            done: "Select"
        }
    });
    $('.parallax').parallax();
    $('.modal').modal();

    // Alert box 
    $('.my-progress-bar').click(function() {
        alert("Ops! This progress bar is not working yet.");
    });

    // Codepen progress bar obtained from https://codepen.io/gustitammam/pen/RRXGdj and adapted to this project Ï
    $(function() {
    var current_progress = 0;
    var interval = setInterval(function() {
        current_progress += 10;
        $("#dynamic")
        .css("width", current_progress + "%")
        .attr("aria-valuenow", current_progress)
        .text(current_progress + "% Complete");
        if (current_progress >= 100)
            clearInterval(interval);
    }, 1000);
    });
  });