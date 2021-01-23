$(document).ready(function(){
    $("#myLinks").hide();
  })
  function myFunction(x) {
    x.classList.toggle("change");
    $("#myLinks").slideToggle();
  }