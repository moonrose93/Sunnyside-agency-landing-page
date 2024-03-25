
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


/*Here we added event listener to the document itself and we say if the event on click dont target the hambureger menu the other elements from the menu then the menu
to be displayed none.
So basically we have to include the hamburger icon itself so that the event listener of the hamburger icon to be triggered.

-Ako eventot na klik ne gi targetira ovie mesta togas menito da bide sokrieno.

Na samiot dokument stavame event listener i ako toj event listener na clik ne gi targetira posakuvanite elementi togas menito ke se se sokrie ako eventot
gi targetira posakuvanite elementi togas menito ke si ostane.*/