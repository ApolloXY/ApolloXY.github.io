 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = ((winScroll * 1.1) / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
 
  var Hshadow = document.getElementById("header");
   
  if (winScroll > 1) {
  Hshadow.classList.add("Hactive");
  }else{
   Hshadow.classList.remove("Hactive");
  }
}
