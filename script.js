window.addEventListener("load", function() {
  startShowSlides()
});
let slideIndex = 0;
let timeoutId;
showSlides();
function plusSlides(n) {
  slideIndex += n;
  showSlides();
}
function currentSlide(n) {
  slideIndex = n;
  showSlides();
}
function startShowSlides() { let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (slideIndex >= slides.length) {slideIndex = 0}
  if (slideIndex < 0) {slideIndex = slides.length - 1}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
    slideIndex++;
    timeoutId = setTimeout(startShowSlides, 5000);
}
function stopShowSlides(){
  clearTimeout(timeoutId);
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (slideIndex >= slides.length) {slideIndex = 0}
  if (slideIndex < 0) {slideIndex = slides.length - 1}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
}
let slideIndexImg = [1, 1, 1, 1, 1, 1, 1, 1, 1];
let slideId = ["slideshow1", "slideshow2", "slideshow3", "slideshow4", "slideshow5", "slideshow6", "slideshow7", "slideshow8", "slideshow9"];
showSlidesImg(slideIndexImg[0], 0);
showSlidesImg(slideIndexImg[1], 1);
showSlidesImg(slideIndexImg[2], 2);
showSlidesImg(slideIndexImg[3], 3);
showSlidesImg(slideIndexImg[4], 4);
showSlidesImg(slideIndexImg[5], 5);
showSlidesImg(slideIndexImg[6], 6);
showSlidesImg(slideIndexImg[7], 7);
showSlidesImg(slideIndexImg[8], 8);

function plusSlidesImg(n, no) {
  showSlidesImg(slideIndexImg[no] += n, no);
}

function currentSlideImg(n, no) {
  showSlidesImg(slideIndexImg[no] = n, no);
}

function showSlidesImg(n, no) {
  let i;
  let slides = document.getElementsByClassName(slideId[no]);
  let dots = document.getElementsByClassName("demo");
  if (n > slides.length) {
    slideIndexImg[no] = 1
  }
  if (n < 1) {
    slideIndexImg[no] = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexImg[no] - 1].style.display = "block";
  dots[slideIndexImg[no] - 1].className += " active";
}
 

 
 