const toggleBar = document.querySelector('.fa-bars');
const navSection = document.querySelector('.togle-nav-section');
const navLink = document.querySelectorAll('.toggle-nav-link');
let w = window.innerWidth;


navLink.forEach( (link) => {
    link.addEventListener("click", function(){
        navSection.style.visibility = "hidden";
        navSection.style.height = '1px';
    })
})


const displayNav = () => {
    if(navSection.style.visibility === "hidden" && navSection.style.height === '1px'){
        navSection.style.visibility = "visible";
        navSection.style.height = '170px';
    }else{
        navSection.style.visibility = "hidden";
        navSection.style.height = '1px'; 
    }
}

toggleBar.addEventListener("click", displayNav);
window.addEventListener('resize', resizing);


function resizing(){  
    if(w > 768){
        navSection.style.visibility = "hidden";
        navSection.style.height = '1px';
    }
}


