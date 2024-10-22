"use strict";

import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


const landing = document.querySelector('.landing');
const application = document.querySelector('.application');
const credits = document.querySelector('.credits');

if(landing){
    // Sticky nav
    let oldScrollY = 0;
    const menu = document.querySelector('.header');

    const mediaQuery = window.matchMedia('(min-width: 1024px)');

    if (mediaQuery.matches) {
        window.addEventListener('scroll', scrollListener);
    }

    function scrollListener() {
        if (oldScrollY > window.scrollY) {
            menu.classList.remove('header--hide');
        } else {
            menu.classList.add('header--hide');
        }
        oldScrollY = window.scrollY;
    }

    mediaQuery.addEventListener('change', (e) => {
        if (e.matches) {
            window.addEventListener('scroll', scrollListener);
        } else {
            window.removeEventListener('scroll', scrollListener);
        }
    });


    // Burger menu
    const menuToggle = document.querySelector('.menu--toggle');
    const menuIcon = document.getElementById('menu-icon');

    const navLinks = document.querySelectorAll('.menu a');

    const svgMenu = `<path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/>`;
    const svgClose = `<path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"/>`;

    if(menuToggle){
        menuToggle.addEventListener('click', menuOpen);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    function menuOpen() {
        document.body.classList.toggle('menu--open');
        
        let menuOpen = document.body.classList.contains('menu--open');

        if (menuOpen) {
            menuIcon.innerHTML = svgClose;
        } else {
            menuIcon.innerHTML = svgMenu;
        }
    }

    function closeMenu() {
        document.body.classList.remove('menu--open');
        menuIcon.innerHTML = svgMenu;
    }


    // Name's display for footer
    function updateLastNameVisibility() {
        let linkElements = document.querySelectorAll('.footer__el a');

        linkElements.forEach(linkElement => {
            if (!linkElement.hasAttribute('data-original-text')) { 
                linkElement.setAttribute('data-original-text', linkElement.textContent);
            }

            let originalText = linkElement.getAttribute('data-original-text');
            let originalLastName = originalText.split(' ')[1];

            let linkText = linkElement.textContent.split(' ');

            if (window.matchMedia('(min-width: 640px) and (max-width: 1439px)').matches) {
                linkText[1] = '';
            } else {
                
                linkText[1] = originalLastName;
            }

            linkElement.textContent = linkText.join(' ');
        });
    }

    function checkScreenWidth() {
        updateLastNameVisibility();
    }

    window.addEventListener('resize', checkScreenWidth);

    checkScreenWidth();


    // GSAP Landing
    let mm = gsap.matchMedia();

    mm.add("(max-width: 1439px)", () => {

        gsap.from('.intro__title', {
            x: '-15%',
            duration: 0.7,
            opacity: 0,
            scrollTrigger: {
                trigger: '.intro',
                start: 'top 40%',
                end: 'bottom 30%',
            }
        });

        gsap.from('.intro__text', {
            x: '-15%',
            duration: 0.7,
            opacity: 0,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.intro',
                start: 'top 40%',
                end: 'bottom 30%',
            }
        });

        gsap.from('.intro__el', {
            x: '-15%',
            duration: 0.7,
            opacity: 0,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.intro',
                start: 'top 40%',
                end: 'bottom 30%',
            }
        });

        gsap.from('.intro__img', {
            x: '15%',
            duration: 0.7,
            opacity: 0,
            scrollTrigger: {
                trigger: '.intro',
                start: 'top 40%',
                end: 'bottom 30%',
            }
        });

        gsap.from('.presentation__title', {
            x: '-15%',
            duration: 0.7,
            opacity: 0,
            scrollTrigger: {
                trigger: '.presentation',
                start: 'top 40%',
                end: 'bottom 30%',
            }
        });

        gsap.from('.presentation__text', {
            x: '-15%',
            duration: 0.7,
            opacity: 0,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.presentation',
                start: 'top 40%',
                end: 'bottom 30%',
            }
        });

        gsap.from('.presentation svg', {
            x: '15%',
            duration: 0.7,
            opacity: 0,
            scrollTrigger: {
                trigger: '.presentation',
                start: 'top 40%',
                end: 'bottom 30%',
            }
        });

        gsap.from('.project__title', {
            x: '-15%',
            duration: 0.7,
            opacity: 0,
            scrollTrigger: {
                trigger: '.project',
                start: 'top 40%',
                end: 'bottom 30%',
            }
        });

        gsap.from('.project__text', {
            x: '-15%',
            duration: 0.7,
            opacity: 0,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.project',
                start: 'top 40%',
                end: 'bottom 30%',
            }
        });

        gsap.from('.project__img', {
            x: '15%',
            duration: 0.7,
            opacity: 0,
            scrollTrigger: {
                trigger: '.project',
                start: 'top 40%',
                end: 'bottom 30%',
            }
        });

        gsap.from('.team__title', {
            x: '-15%',
            duration: 0.7,
            opacity: 0,
            scrollTrigger: {
                trigger: '.team',
                start: 'top 40%',
                end: 'bottom 30%',
            }
        });

        gsap.from('.team__el', {
            x: (i) => i % 2 === 0 ? '-15%' : '15%',
            duration: 0.7,
            opacity: 0,
            stagger: 0.5,
            scrollTrigger: {
                trigger: '.team',
                start: 'top 40%',
                end: 'bottom 30%',
            }
        });

        gsap.from('.trailer__title', {
            x: '-15%',
            duration: 0.7,
            opacity: 0,
            scrollTrigger: {
                trigger: '.trailer',
                start: 'top 40%',
                end: 'bottom 30%',
            }
        });

        gsap.from('.trailer__video', {
            width: 0,
            duration: 0.7,
            opacity: 0,
            scrollTrigger: {
                trigger: '.trailer',
                start: 'top 40%',
                end: 'bottom 30%',
            }
        });

        gsap.from('.trailer__btn', {
            x: '-15%',
            duration: 0.7,
            opacity: 0,
            scrollTrigger: {
                trigger: '.trailer',
                start: 'top 40%',
                end: 'bottom 30%',
            }
        });

    });

    mm.add("(min-width: 1440px)", () => {

        gsap.from('.intro__title', {
            x: '-25%',
            duration: 0.9,
            opacity: 0,
            scrollTrigger: {
                trigger: '.intro',
                start: 'top 40%',
                end: 'bottom 30%',
            }
        });

        gsap.from('.intro__text', {
            x: '-25%',
            duration: 0.9,
            opacity: 0,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.intro',
                start: 'top 40%',
                end: 'bottom 30%',
            }
        });

        gsap.from('.intro__el', {
            x: '-25%',
            duration: 0.9,
            opacity: 0,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.intro',
                start: 'top 40%',
                end: 'bottom 30%',
            }
        });

        gsap.from('.intro__img', {
            x: '25%',
            duration: 0.9,
            opacity: 0,
            scrollTrigger: {
                trigger: '.intro',
                start: 'top 40%',
                end: 'bottom 30%',
            }
        });

        gsap.from('.presentation__title', {
            x: '-25%',
            duration: 0.9,
            opacity: 0,
            scrollTrigger: {
                trigger: '.presentation',
                start: 'top 40%',
                end: 'bottom 30%',
            }
        });

        gsap.from('.presentation__text', {
            x: '-25%',
            duration: 0.9,
            opacity: 0,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.presentation',
                start: 'top 40%',
                end: 'bottom 30%',
            }
        });

        gsap.from('.presentation svg', {
            x: '25%',
            duration: 0.9,
            opacity: 0,
            scrollTrigger: {
                trigger: '.presentation',
                start: 'top 40%',
                end: 'bottom 30%',
            }
        });

        gsap.from('.project__title', {
            x: '-25%',
            duration: 0.9,
            opacity: 0,
            scrollTrigger: {
                trigger: '.project',
                start: 'top 40%',
                end: 'bottom 30%',
            }
        });

        gsap.from('.project__text', {
            x: '-25%',
            duration: 0.9,
            opacity: 0,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.project',
                start: 'top 40%',
                end: 'bottom 30%',
            }
        });

        gsap.from('.project__img', {
            x: '25%',
            duration: 0.9,
            opacity: 0,
            scrollTrigger: {
                trigger: '.project',
                start: 'top 40%',
                end: 'bottom 30%',
            }
        });

        gsap.from('.team__title', {
            x: '-25%',
            duration: 0.9,
            opacity: 0,
            scrollTrigger: {
                trigger: '.team',
                start: 'top 40%',
                end: 'bottom 30%',
            }
        });

        gsap.from('.team__el', {
            x: (i) => i % 2 === 0 ? '-25%' : '25%',
            duration: 0.9,
            opacity: 0,
            stagger: 0.5,
            scrollTrigger: {
                trigger: '.team',
                start: 'top 40%',
                end: 'bottom 30%',
            }
        });

        gsap.from('.trailer__title', {
            x: '-25%',
            duration: 0.9,
            opacity: 0,
            scrollTrigger: {
                trigger: '.trailer',
                start: 'top 40%',
                end: 'bottom 30%',
            }
        });

        gsap.from('.trailer__video', {
            width: 0,
            duration: 0.9,
            opacity: 0,
            scrollTrigger: {
                trigger: '.trailer',
                start: 'top 40%',
                end: 'bottom 30%',
            }
        });

        gsap.from('.trailer__btn', {
            x: '-25%',
            duration: 0.9,
            opacity: 0,
            scrollTrigger: {
                trigger: '.trailer',
                start: 'top 40%',
                end: 'bottom 30%',
            }
        });
    });
}


if(landing || credits){
    // Button top
    window.addEventListener('scroll', function(){
        const button = document.querySelector('.top');

        if(button){
            if (window.scrollY > 250) {
                button.classList.remove('top--hide');
                button.classList.add('top--show');
            } else {
                button.classList.remove('top--show');
                button.classList.add('top--hide');
            }
        }
    });
}


if(application){
    // App
    function isMobileOrTablet(){
        return /Mobi|Android|iPhone|iPod|Tablet/i.test(navigator.userAgent);
    }

    window.onload = function(){
        if (isMobileOrTablet()){
            document.body.style.display = 'none';
            document.querySelector('mobile-warning').style.display = "block";
        } else{
            document.body.style.display = 'block';
        }
    }
}
