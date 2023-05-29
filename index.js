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


function getMiddle(s)

{  const start= parseInt(s.length / 2)
  if( s.length % 2 === 0){
    console.log(s.slice(start-1, start+1))
  }else{
    console.log(s.slice(start, start+1))
  }
  
}

console.log(getMiddle("test"))
console.log(getMiddle("testing")  ) //7 % 2 3..lkjl return index 3 



