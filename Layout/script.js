const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.target.classList.contains("hidden")){
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
        else{
            entry.target.classList.remove('show')
        }
    }
        if(entry.target.classList.contains("hidden-vertical")){
        if(entry.isIntersecting){
            entry.target.classList.add('show-vertical')
        }
        else{
            entry.target.classList.remove('show-vertical')
        }
    }
    })
})
const hiddenElements = document.querySelectorAll('.hidden')
const hiddenElementsVertical = document.querySelectorAll('.hidden-vertical')
hiddenElements.forEach((el)=> observer.observe(el))
hiddenElementsVertical.forEach((el)=> observer.observe(el))

// Hamburger Button
let dropdown = document.querySelector(".dropdown");
let hamBtn = document.querySelector(".hamBtn");
      

      hamBtn.addEventListener("click", function () {
        if (dropdown.classList.contains("dropdown-active")) {
          dropdown.classList.remove("dropdown-active");
        } else {
          dropdown.classList.add("dropdown-active");
        }
      });

// Hamburger Button Category
let category = document.querySelector(".category")
let categoryUl = document.querySelector(".category-ul")
category.addEventListener("click", function(){
    if(categoryUl.classList.contains("show-cat")){
        categoryUl.classList.remove("show-cat")
        dropdown.style.transform ="translateY(80%)" 
    }
    else{
        categoryUl.classList.add("show-cat")
        dropdown.style.transform ="translateY(65%)"
    }
    
    // alert("PANZER ALARM !")
})

// Category button
let categoryBtn = document.querySelector(".category-btn")
let categoryNav = document.querySelector(".category-nav")

categoryBtn.addEventListener("click", function(){
    if (categoryNav.style.display == "none"){
        categoryNav.style.display = "block"
    }
    else{
        categoryNav.style.display = "none"
    }
    // if(categoryUl.classList.contains("show-cat")){
    //     categoryUl.classList.remove("show-cat")
    //     dropdown.style.transform ="translateY(80%)" 
    // }
    // else{
    //     categoryUl.classList.add("show-cat")
    //     dropdown.style.transform ="translateY(65%)"
    // }
    
    // alert("PANZER ALARM !")
})


// Card
const btn = document.querySelectorAll(".info-item")
const code_p = document.querySelectorAll(".code")
const inputBtn = document.querySelectorAll('.info-btn');

// let lastInterval = 0;
// btn[lastInterval].classList.add("info-item-active")
let cardInterval1=0;
let cardInterval2=4;
let cardInterval3=8;
let cardInterval4=12;
// let cardInterval5=16;
// let cardInterval6=20;
// let cardInterval7=24;
// let cardInterval8=24;
// alert(code_p.length)
code_p[cardInterval1].style.display ="grid"
code_p[cardInterval2].style.display ="grid"
code_p[cardInterval3].style.display ="flex"
code_p[cardInterval4].style.display ="block"
// code_p[cardInterval5].style.display ="block"
// code_p[cardInterval6].style.display ="block"
// code_p[cardInterval7].style.display ="block"
// alert(btn.length)
for (let j = 0; j <= 15; j++) {
    btn[j].addEventListener("click", function(){
        if(j>=0 && j<=3){
        
        cardInterval1=j;
        }
        if(j>=4 && j<=7){
        cardInterval2=j;
        }
        if(j>=8 && j<=11){
        cardInterval3=j;
        }
        if(j>=12 && j<=15){
        cardInterval4=j;
        }
        // if(j>=16 && j<=19){
        // cardInterval5=j;
        // }
        // if(j>=20 && j<=23){
        // cardInterval6=j;
        // }
        // if(j>=24 && j<=27){
        // cardInterval7=j;
        // }
        if(j==0||j==4){
            code_p[j].style.display="grid"
        }
        if(j==8||j==12){
            code_p[j].style.display="flex"
        }
        else{
            // alert(j)
            code_p[j].style.display="block"
        }
        
        for(let i =0; i<code_p.length; i++){
            if(i!=cardInterval1 && i!=cardInterval2 && i!=cardInterval3&& i!=cardInterval4
                //  && i!=cardInterval5 && i!=cardInterval6 && i!=cardInterval7
                 ){
                code_p[i].style.display="none"
            }
        }
    })


}

