const toggleBar = document.querySelector('.fa-bars');
const navSection = document.querySelector('.toggle-nav-section');
const navLink = document.querySelectorAll('.toggle-nav-link');
let w = window.innerWidth;

const userName = document.querySelector('#user-name')
const modal = document.querySelector('#modal');
const submitBtn = document.querySelector('#submit');
const modalClose = document.querySelector('#modal-close')


let defaultContactMethod = 'email';

document.querySelectorAll('input[type="radio"][name="contact"]').forEach((radio) => {
  if (radio.checked) {
    defaultContactMethod = radio.value;
  }
});

submitBtn.addEventListener('click', function(e){
    const nameInput = document.querySelector('#name');
    const mailInput = document.querySelector('#email');
    const telInput = document.querySelector('#tel');
    const msgInput = document.querySelector('#msg');

    const marketingConsentInput = document.querySelector('#marketingConsent');



    e.preventDefault();
    
    if(!nameInput.value){
        modal.style.display = 'none'  
    }else{
        userName.innerHTML = nameInput.value;
        modal.style.display = 'block';
    }
   

    // Reset the form
    nameInput.value = '';
    mailInput.value = '';
    telInput.value = ''
     msgInput.value = ''
    marketingConsentInput.checked = false;
    document.querySelectorAll('input[type="radio"][name="contact"]').forEach((radio) => {
        radio.checked = (radio.value === defaultContactMethod);
      });
   
})







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


