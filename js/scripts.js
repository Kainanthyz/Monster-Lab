/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
function HideandShow(i){
    var x = document.getElementById(i);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};

function changeImage(i2) {
    var y = document.getElementById(i2);
    if (y.src == "../img/Setas/down-arrow.png"){
        y.src = "../img/Setas/right-arrow.png";
    } else {
        y.src = "../img/Setas/down-arrow.png";
    }
};