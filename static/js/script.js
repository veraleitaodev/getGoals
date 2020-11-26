$(document).ready(function () {
  //code for navbar from maximize library
  $(".sidenav").sidenav();
  $("select").formSelect();
  $(".collapsible").collapsible();
  $(".tooltipped").tooltip();
  $(".datepicker").datepicker({
    format: "dd/mm/yyyy",
    showClearBtn: true,
    i18n: {
      done: "Select",
    },
  });
  $(".parallax").parallax();
  $(".modal").modal();
  // Alert boxs
  $(".upload-image").click(function () {
    alert("Ops! This feature is not working yet.");
  });
  // fade out flash messages - code obtained from 
  // https://stackoverflow.com/questions/33424138/how-to-remove-a-div-with-fade-out-effect-in-javascript to fade out and hide element


  const elementToFade = document.getElementById("flashMessage");

  elementToFade.onanimationend = (e) => {
    if (e.srcElement.classList.contains("fade-out")) {
      elementToFade.parentNode.removeChild(elementToFade);
    }
  };

        // To fade away:
  elementToFade.classList.add("fade-out");
});
