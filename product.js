var side = document.getElementById("sidenav");
var menu = document.getElementById("menuicon");

var closeicon = document.getElementById("closenav");

menu.addEventListener("click", function () {
  side.style.right = 0;
});
closeicon.addEventListener("click", function () {
  side.style.right = "-50%";
});

// search function

var productcontainer = document.getElementById("search-container");
var search = document.getElementById("search");
var productlist = productcontainer.querySelector("div");

search.addEventListener("keyup", function (event) {
  var enteredvalue = event.target.value.toUpperCase();
  for (count = 0; count < productlist.length; count = count + 1) {
    var productname = productlist[count].querySelector("h1").textContent;

    if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
      productlist[count].style.display = "none";
    } else {
      productlist[count].style.display = "block";
    }
  }
});
