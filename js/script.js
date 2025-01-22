hamburger = document.querySelector(".hamburger-menu");
hamburger.onclick = function(){
    navBar = document.querySelector(".nav-link-container");
    navBar.classList.toggle("active");
}