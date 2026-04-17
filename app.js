const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('header-menu');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    menu.classList.toggle('open');
});
menu.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('open');
        menu.classList.remove('open');
    });
});
const politicsButton = document.getElementsByClassName('politics_button')[0];
const dialogPolitics = document.getElementsByClassName('dialog-politics')[0];
const dialogPoliticsClose = document.getElementsByClassName('dialog-politics-close')[0];
console.log(politicsButton);
politicsButton.addEventListener('click', (e) => {
    dialogPolitics .classList.toggle('politics-open');
    document.body.classList.toggle('modal-open');
})
dialogPoliticsClose.addEventListener('click', (e) => {
    dialogPolitics .classList.toggle('politics-open');
    document.body.classList.toggle('modal-open');
})
Carousel(
    document.getElementById("myCarousel"),
    {
        Autoplay: {
            autoStart: true,
            timeout: 6000,
            showProgressbar: false,
            pauseOnHover: false,
        },
        setTransform: (_ref, slide, state) => {
            if (slide.el) {
                slide.el.style.opacity = `${1 - Math.abs(state.xPercent) / 100 || 0}`;
            }
        },
    },
    {
        Arrows,
        Dots,
        Autoplay,
        Lazyload,
    },
).init();