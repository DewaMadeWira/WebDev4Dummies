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


// Form Alert
