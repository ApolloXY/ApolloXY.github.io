function Loader() {
  var yVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myBody").style.display = "block";
}
