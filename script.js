let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');

};

 var swiper = new Swiper(".home-slider", {
  grabcursor:true,
  loop:true,
  navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


var swiper = new Swiper(".food-slider", {
    grabcursor:true,
    loop:true,
    centeredSlides:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
     breakpoints: {
        0: {
          slidesPerView: 1,
          
        },
        700: {
          slidesPerView: 2,
        //   spaceBetween: 40,
        },
        1000: {
          slidesPerView: 3,
        //   spaceBetween: 50,
        },
      },
});

let previewContainer = document.querySelector('.food-preview-container');
let previewBox = previewContainer.querySelectorAll('.food-preview');

document.querySelectorAll('.food .slide').forEach(food =>{
  food.onclick = () => {
    previewContainer.style.display = 'flex';
    let name = food.getAttribute('data-name');
    previewBox.forEach(preview => {
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  }
});

previewContainer.querySelector('#close-preview').onclick = () => {
  previewContainer.style.display= "none";
  previewBox.forEach(close => {
    close.classList.remove('active');
  } );
}

var swiper = new Swiper(".menu-slider", {
    grabcursor:true,
    loop:true,
    autoHeight:true,
    centeredSlides:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


var swiper = new Swiper(".blogs-slider", {
    grabcursor:true,
    loop:true,
    centeredSlides:true,
    autoHeight:true,
    spaceBetween:20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
     breakpoints: {
        0: {
          slidesPerView: 1,
          
        },
        700: {
          slidesPerView: 2,
        //   spaceBetween: 40,
        },
        1000: {
          slidesPerView: 3,
        //   spaceBetween: 50,
        },
      },
});