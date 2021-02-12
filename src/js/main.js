document.addEventListener('DOMContentLoaded', function () {
  const tbsList = document.querySelectorAll('.step-button')
  const burger = document.querySelector('.burger')
  const swiper = new Swiper('.swiper-container', {
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletClass: 'point',
      bulletActiveClass: 'point-active'
    },

    autoplay: {
      delay: 5000,
    },
  });
  $(function () {
    $("#accordion").accordion({
      active: false,
      collapsible: true
    });
  });
  tbsList.forEach(el => {
    el.addEventListener('click', function (event) {
      tbsList.forEach(el => el.classList.remove('is-active-tbl'))
      const path = event.currentTarget.dataset.path
      document.querySelector(`[data-path="${path}"]`).classList.add('is-active-tbl')
      document.querySelectorAll('.step-animation-list').forEach(el => {
        el.classList.remove('is-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('is-active')
    })
  })
  burger.addEventListener('click', function(){
    const menu = document.querySelector('.menu__box')
    menu.classList.toggle('menu__active')
    this.classList.toggle('click__burger')
  })

})
