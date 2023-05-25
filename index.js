const toggleBar = document.querySelector('.fa-bars')
const navSection = document.querySelector('.toogle-nav-section')
const navLink = document.querySelectorAll('.toggle-nav-link')


navLink.forEach( (link) => {
    link.addEventListener("click", function(){
        navSection.style.height = '1px' 
    })
})


const displayNav = () => {
    if(navSection.style.height === '1px'){
        navSection.style.height = '170px' 
    }else{
        navSection.style.height = '1px'   
    }
}

toggleBar.addEventListener("click", displayNav)


