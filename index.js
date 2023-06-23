const toggleBar = document.querySelector('.fa-bars');
const navSection = document.querySelector('.toggle-nav-section');
const navLink = document.querySelectorAll('.toggle-nav-link');
let w = window.innerWidth;
const form = document.querySelector('#form');
const modal = document.querySelector('#modal');
const userName = document.querySelector('#user-name');
const modalClose = document.querySelector('#modal-close');



form.addEventListener('submit', function(e){
    const nameValue = document.querySelector('#name').value;
    const inputs = document.querySelectorAll('input');
    const textArea = document.querySelector('textarea');
    const marketingConsentInput = document.querySelector('#marketingConsent');
    let radioEmail =  form.querySelectorAll('input[type="radio"][name="contact"]')[0]

        
    e.preventDefault();
    modal.style.display = 'block';
    userName.innerHTML = nameValue;

    //Reset input values 
    inputs.forEach((input) => {
        input.value = ''
    })
    textArea.value = ''
    radioEmail.checked = true
    marketingConsentInput.checked = false;   
})


//Modal popup close, and go to the top
modalClose.addEventListener('click', function(){ 
    modal.style.display = 'none'
    setTimeout(()=>{
        window.scrollTo(0,0)
    },300)
 })


// nb. height and visibility used to display/hide navbar to enable smooth display animation.
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

// Sets scroll bar to the top when mouse leaves info section. addEventListener can only be applied to a individual element. So this for loop loops through each element with class name 'info' and attaches event listener.
let teamMemberBox = document.getElementsByClassName('team-member');
let infoBox = document.getElementsByClassName('info');

for (let i = 0; i < infoBox.length; i++) {
    teamMemberBox[i].addEventListener('mouseleave', function() {
    infoBox[i].scrollTop = 0;
    console.log("Scroll function working for element " + i);
  });
}

// Scroll bar function for touchscreens (eg. phone)
document.addEventListener('touchend', function(event) {
    for (let i = 0; i < infoBox.length; i++) {
      if (!teamMemberBox[i].contains(event.target)) {
        infoBox[i].scrollTop = 0;
        console.log("Scroll function working for element " + i);
      }
    }
  });