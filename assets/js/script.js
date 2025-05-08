$(document).ready(function () {
    $('.slide-wrapper').slick({
      dots: true,
      infinite: false,
      speed: 300,
      fade: true,
      cssEase: 'linear',
      autoplay: false,
      arrows: false,
    });
  
    setInterval(function () {
      $('.slide-wrapper').slick('slickNext');
    }, 2800);
  
    $('.slide-wrapper').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      const slides = document.querySelectorAll('.slide-img img');
      slides.forEach((img) => {
        img.style.animation = 'none';
        void img.offsetWidth; // reset animation
        img.style.animation = 'zoomEffect 3s ease-in-out forwards';
      });
    });
  });