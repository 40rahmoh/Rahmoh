//using selectors inside the element
// traversing the dom 
const questions=document.querySelectorAll(".question")
const btns=document.querySelectorAll(".question-btn")
btns.forEach(function(btn){
    btn.addEventListener('click', function(){
        questions.forEach(function(quest){
            if(quest!==questions){
                quest.classList.remove("show-text")
            }
        })
        questions.classList.toggle("show-text")
    })
})

//  btns.forEach(function(btn){
//     btn.addEventListener("click", function(e){
//         console.log(e.currentTarget.parentElement.parentElement)
//         const question = e.currentTarget.parentElement.parentElement
//         console.log(question)
//     })
//  })

