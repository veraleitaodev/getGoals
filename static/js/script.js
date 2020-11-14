//code for navbar from maximize library

$(document).ready(function(){
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
  });