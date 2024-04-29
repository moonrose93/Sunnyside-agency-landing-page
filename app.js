
const hamburgerIcon = document.getElementById("icon-hamburger");
const menu = document.getElementById("menu-mobile");

const menuBox = document.getElementById('menu-box')
const about = document.getElementById("about");
const services = document.getElementById("services");
const contact = document.getElementById("contact");
const projects = document.getElementById("projects");

hamburgerIcon.addEventListener('click', ()=>{

    if(menu.style.display = "none"){
        menu.style.display = "block";
    }
    
})

document.addEventListener('click',(event)=>{
    if(event.target !== hamburgerIcon && event.target !== menu && event.target !== menuBox &&event.target !== about && event.target !== services && event.target !== contact && event.target !== projects){
        menu.style.display ="none";
    }
})


