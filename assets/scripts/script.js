function toggleMenu() {
  var menu = document.getElementById("navbarMenu");
  menu.classList.toggle("expanded");
}

var slideIndex1 = 1;
  var slideIndex2 = 1;

  function plusSlides1(n) {
    showSlides1((slideIndex1 += n));
  }

  function currentSlide1(n) {
    showSlides1((slideIndex1 = n));
  }

  function showSlides1(n) {
    var i;
    var slides1 = document.querySelectorAll("#makanan .slideshow");
    var dots1 = document.querySelectorAll("#makanan .dot");
    if (n > slides1.length) {
      slideIndex1 = 1;
    }
    if (n < 1) {
      slideIndex1 = slides1.length;
    }
    for (i = 0; i < slides1.length; i++) {
      slides1[i].style.display = "none";
    }
    for (i = 0; i < dots1.length; i++) {
      dots1[i].className = dots1[i].className.replace(" active", "");
    }
    slides1[slideIndex1 - 1].style.display = "block";
    dots1[slideIndex1 - 1].className += " active";
  }

  function plusSlides2(n) {
    showSlides2((slideIndex2 += n));
  }

  function currentSlide2(n) {
    showSlides2((slideIndex2 = n));
  }

  function showSlides2(n) {
    var i;
    var slides2 = document.querySelectorAll("#minuman .slideshow");
    var dots2 = document.querySelectorAll("#minuman .dot");
    if (n > slides2.length) {
      slideIndex2 = 1;
    }
    if (n < 1) {
      slideIndex2 = slides2.length;
    }
    for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";
    }
    for (i = 0; i < dots2.length; i++) {
      dots2[i].className = dots2[i].className.replace(" active", "");
    }
    slides2[slideIndex2 - 1].style.display = "block";
    dots2[slideIndex2 - 1].className += " active";
  }

  showSlides1(slideIndex1);
  showSlides2(slideIndex2);