/*==================== SHOW MENU ====================*/
// const navMenu = document.getElementById('nav-menu'),
//     navToggle = document.getElementById('nav-toggle'),
//     navClose = document.getElementById('nav-close')


// if (navToggle) {
//     navToggle.addEventListener('click', () => {
//         navMenu.classList.add('show-menu')
//     })
// }

// if (navClose) {
//     navClose.addEventListener('click', () => {
//         navMenu.classList.remove('show-menu')
//     })
// }
const hearts = document.querySelectorAll('.heart-icon')
for (const heart of hearts ) {
    heart.addEventListener('click', () => {
        heart.classList.toggle('active')
    })
}

const folders = document.querySelectorAll('.folder-icon')
for (const folder of folders ) {
    folder.addEventListener('click', () => {
        folder.classList.toggle('ri-folder-received-line')
    })
}


/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 60,
    loop: 'true',
    slidesPerView: 1,
    centeredSlides: true,

    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    // breakpoints: {
    //     992: {
    //         spaceBetween: 80,
    //     },
    // },
});