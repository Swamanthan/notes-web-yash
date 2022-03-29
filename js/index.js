function myFunction() {
  var x = document.getElementById("navigation");
  if (x.style.display === "block") {
    x.style.display = "none";
    document.getElementById("menu").style.transform = 'rotate(180deg)';
    document.getElementById("menu").style.transition= '1s';
  } else {
    x.style.display = "block";
    document.getElementById("menu").style.transform = 'rotate(90deg)';
    document.getElementById("menu").style.transition= '1s';
  }

}