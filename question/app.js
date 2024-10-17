//using selectors inside the element
// traversing the dom
const questions=document.querySelectorAll(".question")
const btns=document.querySelectorAll(".question-btn")
questions.forEach(function(question){
  const btn=question.querySelector(".question-btn")
  // console.log(btn)
  btn.addEventListener('click', function(){
    questions.forEach(function(quest){
      if(quest!==question){
        quest.classList.remove("show-text")
       }//else{
      //   quest.classList.add("show-text")
      // }
    })
    question.classList.toggle("show-text")
  })

})

// btns.forEach(function(btn) {
//   btn.addEventListener("click", function(e){
//     // console.log(e.currentTarget.parentElement.parentElement)
//     const question = e.currentTarget.parentElement.parentElement
//     // console.log(question)
//     question.classList.toggle("show-text")

//   })
// })
