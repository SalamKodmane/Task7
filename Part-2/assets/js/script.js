// Task 1 

let black = document.querySelector(".black");
let red = document.querySelector(".red");
let gold = document.querySelector(".gold");
let white = document.querySelector(".white");
let green = document.querySelector(".green");
let HeroImg =document.querySelector(".HeroImg");
let task1 = document.querySelector(".task1");
black.addEventListener('click' ,() =>{
    task1.style.background ="#c72724"
    HeroImg.src ="./assets/img/Black.png"
})
green.addEventListener('click' ,() =>{
    task1.style.background ="#78909c"
    HeroImg.src ="./assets/img/Green.png"
})
gold.addEventListener('click' ,() =>{
    task1.style.background ="#c4c4c6"
    HeroImg.src ="./assets/img/Gold.png"
})
white.addEventListener('click' ,() =>{
    task1.style.background ="#c49ec4"
    HeroImg.src ="./assets/img/White.png"
})
red.addEventListener('click' ,() =>{
    task1.style.background ="black"
    HeroImg.src ="./assets/img/Red.png"
})

// Task 2

let moonBtn = document.querySelector(".moonbtn");
let sunBtn = document.querySelector(".sunbtn");
let dark = document.getElementById("dark");
moonBtn.addEventListener('click' , () =>{
    dark.style.background ="black"
    dark.style.color ="white";
    sunBtn.style.display = "block";
    moonBtn.style.display ="none"
})
sunBtn.addEventListener('click' , () =>{
    dark.style.background ="white"
    dark.style.color ="black";
    sunBtn.style.display = "none";
    moonBtn.style.display ="block"
})

// Task 3 

const ques = document.querySelectorAll(".questions");

ques.forEach(questions => {
    questions.addEventListener("click", () => {
        questions.classList.toggle("active");
    }) 
})

// Task 4

let stars = document.querySelectorAll('.star');
let paraghraf = document.querySelector('.paraghraf');
let count = document.querySelector('.count');
stars.forEach((star,index)=>{
  star.addEventListener('click',()=>{
    let current_star=index+1;
    count.innerText=`${current_star} of 5`;
    stars.forEach((star,i)=>{
        if(current_star>=i+1){
         star.classList.add("active")
         if(i == 0){
            paraghraf.innerText=`I Hate it`;
         }
         else if(i == 1){
            paraghraf.innerText=`I don't mind`;
         }
         else if(i == 2){
            paraghraf.innerText=`It is awesome`;
         }
         else if(i == 3){
            paraghraf.innerText=`I really like it`;
         }
         else if(i == 4){
            paraghraf.innerText=`I very love it`;
         }
        else{
            paraghraf.innerText=`No rating`;
        }
        }else{
            star.classList.remove("active")
        }
    });
  });
});

// Addtional Task

var search_input = document.querySelector("#search_input");

search_input.addEventListener("keyup", function(e){
  var span_items = document.querySelectorAll(".table_body .name span");
  var table_body = document.querySelector(".table_body ul");
  var search_item = e.target.value.toLowerCase();
 
 span_items.forEach(function(item){
   if(item.textContent.toLowerCase().indexOf(search_item) != -1){
      item.closest("li").style.display = "block";
   }
   else{
     item.closest("li").style.display = "none";
     }
 })
  
});