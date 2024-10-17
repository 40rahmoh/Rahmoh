// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle= document.querySelector(".nav-Toggle");
const navbarMenu= document.querySelector(".navbar-menu");
navToggle.addEventListener('click', function(){
    navbarMenu.classList.toggle('active';)
    if(links.classList.contains("show-links")){
        links.classList.remove("show-links");
    }else{
        links.classList.add("show-links")
    }

})