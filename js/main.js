
let nav=document.getElementById("nav")


function scroll(){

    if(document.documentElement.scrollTop>200){
        nav.classList.add("scroly");
    }else{
        nav.classList.remove("scroly");

    }
}

window.onscroll= function(){
    scroll()
}

window.onload= function (){
    let website= new CountUp('web-count', 0, 250, 0 , 3)
    website.start()
    let mob= new CountUp('mob-count', 0, 100, 0 , 3)
    mob.start()
    let user= new CountUp('user-count', 0, 10000, 0 , 3)
    user.start()
    let video= new CountUp('video-count', 0, 30, 0 , 3)
    video.start()
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
function val() {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  } 
  val();

  document.getElementById("rights").innerHTML= new Date().getFullYear();
  