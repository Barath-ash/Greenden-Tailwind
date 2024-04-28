var side = document.getElementById("sidenav")
var  menu = document.getElementById("menuicon")

var closeicon = document.getElementById("closenav")

 menu.addEventListener("click", function(){
    side.style.right = 0
})
closeicon.addEventListener("click", function(){
    side.style.right = "-50%"
})
