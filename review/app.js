// local reviews data
const reviews = [
  {
    id: 1,
    name: 'Breakthrough',
    job: 'web developer',
    img: "images/img1.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'Rahmoh',
    job: 'web designer',
    img: "images/img2.jpg",
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'Moses',
    job: 'intern',
    img: "images/img3.jpeg",
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'Emmanuel',
    job: 'the boss',
    img: "images/img4.jpg",
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];
// select items
const img=document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

// get styles
const prevBtn=document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");
//  starting item
let currentItem = 0;
// Load initial Item
window.addEventListener('DOMContentLoaded',function () {
  const item=reviews[currentItem]
  // console.log(item)
  img.src=item.img;
  author.textContent=item.name;
  job.textContent=item.job;
  info.textContent=item.text;
});
function showPerson(person){
  const item=reviews[person]
  img.src=item.img;
  author.textContent=item.name;
  job.textContent=item.job;
  info.textContent=item.text;
}
// next item
nextBtn.addEventListener('click', function(){
  currentItem++
  if (currentItem > reviews.length - 1){
    currentItem = 0;
  }
  showPerson(currentItem)
});
//prev item
prevBtn.addEventListener('click', function () {
  currentItem--
  if (currentItem < 0) {
    currentItem=reviews.length - 1
    
  }
  showPerson(currentItem)
});
// console.log(reviews.length)
randomBtn.addEventListener('click', function(){
  // console.log("hello")
  currentItem=Math.floor(Math.random() * reviews.length)
  showPerson(currentItem)
})
// 


