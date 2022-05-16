
// slides scripts

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// scroll animation script for library , sports, and hostels 

window.addEventListener('scroll', ()=>{
  const contentRow = document.querySelector('.row-1');
  const contentRowPosition = contentRow.getBoundingClientRect().top;
  const screenRowPosition = window.innerHeight /2;

  if(contentRowPosition  < screenRowPosition){
    contentRow.classList.add('activated-row-1');
  }else{
    contentRow.classList.remove('activated-row-1');
  }

})

window.addEventListener('scroll', ()=>{
  const contentRow = document.querySelector('.row-3');
  const contentRowPosition = contentRow.getBoundingClientRect().top;
  const screenRowPosition = window.innerHeight /2;

  if(contentRowPosition  < screenRowPosition){
    contentRow.classList.add('activate-row-3');
  }else{
    contentRow.classList.remove('activate-row-3');
  }

})

window.addEventListener('scroll', ()=>{
  const contentRow = document.querySelector('.row-2');
  const contentRowPosition = contentRow.getBoundingClientRect().top;
  const screenRowPosition = window.innerHeight /2;

  if(contentRowPosition  < screenRowPosition){
    contentRow.classList.add('activate-row-2');
  }else{
    contentRow.classList.remove('activate-row-2');
  }

})

window.addEventListener('scroll', ()=>{
  const contentRow = document.querySelectorAll('.card');
  const screenRowPosition = window.innerHeight /2;

  contentRow.forEach((item)=>{
    const contentRowPosition = item.getBoundingClientRect().top;

    if(contentRowPosition  < screenRowPosition){
      item.classList.add('activate-card');
    }else{
      item.classList.remove('activate-card');
    }

  })

  

})

// FAQ's scripts

var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}





