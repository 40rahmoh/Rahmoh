// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle= document.querySelector(".nav-toggle");
const links= document.querySelector(".links");
navToggle.addEventListener('click', function(){
   // console.log  // console.log(link.classlist.contains("links"))
   // console.log(link.classlist.contains("show-links"))
   if(links.classList.contains("show-links")){
       links.classList.remove("show-links");
   }else{
       links.classList.add("show-links")
   }
//    links.classlist.contains("random")
})

 