import MainSlider from './modules/slider/mainSlider';
import MiniSlider from './modules/slider/miniSlider';
import Player from './modules/player';
import Difference from './modules/difference';
import Forms from './modules/forms';
import ShowInfo from './modules/showInfo';
import Download from './modules/download';

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({
        container:'.page',
        btns:'.next',
    });
    slider.render();

    const showUpSlider = new MiniSlider({
        container: '.showup__content-slider',
        prev: '.showup__prev',
        next: '.showup__next',
        activeClass: 'card-active',
        animate: true
    });
    showUpSlider.init();

    const modulesMainSlider = new MainSlider({
        container: '.moduleapp',
        btns: '.next',
        prevModule: '.prevmodule',
        nextModule: '.nextmodule'
    });
    modulesMainSlider.render();


    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider', 
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
        animate: true
    });
    modulesSlider.init();

    const feedSlider = new MiniSlider({
        container: '.feed__slider',
        prev: '.feed__slider .slick-prev',
        next: '.feed__slider .slick-next',
        activeClass: 'feed__item-active'
    });
    feedSlider.init();

    new Player('.showup .play', '.overlay').init();
    new Player('.module__video-item .play', '.overlay').init();

    new Difference('.officerold', '.officernew', '.officer__card-item').init();

    new Forms('.form').init();

    new ShowInfo('.plus').init();

    new Download('.download').init();
});