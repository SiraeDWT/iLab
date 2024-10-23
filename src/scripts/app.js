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
    // ----- Keep like this -----
    // function isIpadPro(){
    //     const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    //     const isIpad = /iPad/.test(userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
        
    //     const screenWidth = window.screen.width;
    //     const screenHeight = window.screen.height;
    
    //     const isIpadPro = (screenWidth === 1024 && screenHeight === 1366) || (screenWidth === 1366 && screenHeight === 1024);
        
    //     return isIpad && isIpadPro;
    // }
    
    // window.onload = function(){
    //     const application = document.querySelector('.app');
    //     const deviceMessage = document.querySelector('.app__warning');

    //     if(!isIpadPro()){
    //         application.classList.add('app--hidden');
    //         deviceMessage.style.display = "block";
    //     } else{
    //         application.classList.remove('app--hidden');
    //     }
    // }
    // ----- Keep like this -----

    let beginBtn = document.getElementById('begin');
    let rulesSection = document.querySelector('.rules');
    let appSection = document.querySelector('.app');

    beginBtn.addEventListener('click', () => {
        rulesSection.classList.add('rules--hidden');
        appSection.classList.add('app--show');
    });

    let reloadBtn = document.getElementById('reload');

    reloadBtn.addEventListener('click', function reloadPage(){
        location.reload();
    })

    // TODO: Mettre toutes les images en webp;
    // TODO: Eviter la saccade du toutou;
    // TODO: Mettre les décors en SCSS et les personnages en img PHP;
    // TODO: Faire les micro/macro-typo & alt-text;


    //position des backgrounds
    let posBackground1 = 0;
    let posBackground2 = 90;
    let posBackground3 = 180;
    let posBackground4 = 270;

    //function pour changer le background
    function changeBackground(){
        
        let i = 90;

        //rotation background 1
        let rotate1 = posBackground1 - i + 'deg';
        gsap.to('.app__background_1', {rotate: rotate1, duration: .5, ease: 'power4.out'});
        posBackground1 = posBackground1 - i;

        //changer le background de la chambre en version nuit
        if (posBackground1 == -360) {
            let appBg1 = document.querySelector('.app__background_1');
            appBg1.style.backgroundImage = 'url(./assets/chambre_nuit.png';
        }
        
        //rotation background 2
        let rotate2 = posBackground2 - i + 'deg';
        gsap.to('.app__background_2', {rotate: rotate2, duration: .5, ease: 'power4.out'});
        posBackground2 = posBackground2 - i;

        //rotation background 3
        let rotate3 = posBackground3 - i + 'deg';
        gsap.to('.app__background_3', {rotate: rotate3, duration: .5, ease: 'power4.out'});
        posBackground3 = posBackground3 - i;

        //apparition des sacs
        let bags = document.querySelectorAll('.app__bag');
        bags.forEach((bag) => {
            if (posBackground3 == 0) {
                bag.classList.add('app__item--appear');
            };
        });

        //rotation background 4
        let rotate4 = posBackground4 - i + 'deg';
        gsap.to('.app__background_4', {rotate: rotate4, duration: .5, ease: 'power4.out'});
        posBackground4 = posBackground4 - i;

        //apparition des sacs
        let kids = document.querySelectorAll('.app__kid');
        kids.forEach((kid) => {
            if (posBackground4 == 0) {
                kid.classList.add('app__item--appear');
            };
        });

    }

    //bouger le dog
    //variables
    const dog = document.querySelector('.app__dog');
    const items = document.querySelectorAll('.app__item');
    const proximityLimit = 100;

    //fonction qui check si le dog est devant un item 
    function isTooClose() {
        for (let item of items) {
            const itemRect = item.getBoundingClientRect();
            const dogRect = dog.getBoundingClientRect();
            const distance = itemRect.left - (dogRect.left + dogRect.width);
            if (distance >= 0 && distance < proximityLimit) {
                dog.classList.remove('app__dog--move');
                return true;
            }
        }
        return false;
    }

    let dogPosition = 0;
    const dogSpeed = 25;
    let positionMax = window.innerWidth;

    // fonction qui permet de bouger le dog si il n'est pas en face d'un item
    function moveDog() {
        if (!isTooClose()) {
            dogPosition += dogSpeed;
            dog.style.left = dogPosition + 'px';
            dog.classList.add('app__dog--move');

            if (dogPosition > positionMax) {

                dogPosition = 0; // Reset dog to the left of the screen
                dog.style.transition = '0s';
                dog.style.left = dogPosition + 'px';
                changeBackground();

            }else{

                dog.style.transition = 'left .2s ease-in-out';

            };
        }
    }

    //variables pour le message
    let message = document.querySelector('.app__message');
    let movementEnabled = true;

    // Ajout des événements sur la touche "Espace"
    document.addEventListener('keydown', function(event) {
        if(event.code === 'Space' && movementEnabled === true) {
            event.preventDefault();

            //l'objet se met en mouvement lorsque la touche espace est appuyée
            moveDog();

            //apparition du message en fonction de la position
            if(dogPosition == 0) {
                message.classList.add('app__item--appear');
                movementEnabled = false;
                dog.classList.remove('app__dog--move');
            };

            //diparition du message en fonction de la position
            if(dogPosition == 25) {
                message.classList.remove('app__item--appear');
                dog.classList.add('app__dog--move');
            };
        };

    });

    document.addEventListener('keyup', function(event) {
        if(event.code === 'Space' && movementEnabled === false) {
            movementEnabled = true;
        };
        dog.classList.remove('app__dog--move');
    });

    //bouger un enfant avec le doigt
    const kids = document.querySelectorAll('.app__kid');
    kids.forEach((kid) => {

        let offsetX, offsetY;
        
        // Détecter si c'est un appareil tactile ou une souris
        const isTouchDevice = 'ontouchstart' in document.documentElement;
        
        // Fonction pour empêcher de sortir de l'écran
        function stayInBounds(element) {
            const rect = element.getBoundingClientRect();
            const parentWidth = window.innerWidth;
            const parentHeight = window.innerHeight;
        
            if (rect.left < 0) element.style.left = "0px";
            if (rect.top < 0) element.style.top = "0px";
            if (rect.right > parentWidth) element.style.left = `${parentWidth - rect.width}px`;
            if (rect.bottom > parentHeight) element.style.top = `${parentHeight - rect.height}px`;
        }
        
        // Démarrer le drag
        function startDrag(event) {
            const rect = kid.getBoundingClientRect();
            offsetX = isTouchDevice ? event.touches[0].clientX - rect.left : event.clientX - rect.left;
            offsetY = isTouchDevice ? event.touches[0].clientY - rect.top : event.clientY - rect.top;
            kid.style.backgroundImage = 'url(./assets/mannequin.png)';
        }
        
        // Continuer à déplacer l'élément
        function dragElement(event) {
            const x = isTouchDevice ? event.touches[0].clientX : event.clientX;
            const y = isTouchDevice ? event.touches[0].clientY : event.clientY;
        
            kid.style.left = `${x - offsetX}px`;
            kid.style.top = `${y - offsetY}px`;
        
            stayInBounds(kid);
        }
        
        // Stopper le drag
        function stopDrag() {
            document.removeEventListener(isTouchDevice ? "touchmove" : "mousemove", dragElement);
            document.removeEventListener(isTouchDevice ? "touchend" : "mouseup", stopDrag);
            kid.classList.add('app__item--ejected');
            gsap.to(kid, {display: 'none', duration: .1, delay: 1});
            
        }
        
        // Ajouter les écouteurs d'événements
        kid.addEventListener(isTouchDevice ? "touchstart" : "mousedown", (event) => {
            startDrag(event);
            document.addEventListener(isTouchDevice ? "touchmove" : "mousemove", dragElement);
            document.addEventListener(isTouchDevice ? "touchend" : "mouseup", stopDrag);
        });

    });

    //bouger un sac avec le doigt
    const bags = document.querySelectorAll('.app__bag');
    bags.forEach((bag) => {

        let offsetX, offsetY;
        
        // Détecter si c'est un appareil tactile ou une souris
        const isTouchDevice = 'ontouchstart' in document.documentElement;
        
        // Fonction pour empêcher de sortir de l'écran
        function stayInBounds(element) {
            const rect = element.getBoundingClientRect();
            const parentWidth = window.innerWidth;
            const parentHeight = window.innerHeight;
        
            if (rect.left < 0) element.style.left = "0px";
            if (rect.top < 0) element.style.top = "0px";
            if (rect.right > parentWidth) element.style.left = `${parentWidth - rect.width}px`;
            if (rect.bottom > parentHeight) element.style.top = `${parentHeight - rect.height}px`;
        }
        
        // Démarrer le drag
        function startDrag(event) {
            const rect = bag.getBoundingClientRect();
            offsetX = isTouchDevice ? event.touches[0].clientX - rect.left : event.clientX - rect.left;
            offsetY = isTouchDevice ? event.touches[0].clientY - rect.top : event.clientY - rect.top;
        }
        
        // Continuer à déplacer l'élément
        function dragElement(event) {
            const x = isTouchDevice ? event.touches[0].clientX : event.clientX;
            const y = isTouchDevice ? event.touches[0].clientY : event.clientY;
        
            bag.style.left = `${x - offsetX}px`;
            bag.style.top = `${y - offsetY}px`;
        
            stayInBounds(bag);
        }
        
        // Stopper le drag
        function stopDrag() {
            document.removeEventListener(isTouchDevice ? "touchmove" : "mousemove", dragElement);
            document.removeEventListener(isTouchDevice ? "touchend" : "mouseup", stopDrag);
            bag.classList.add('app__item--ejected');
            gsap.to(bag, {display: 'none', duration: .1, delay: 1});
            
        }
        
        // Ajouter les écouteurs d'événements
        bag.addEventListener(isTouchDevice ? "touchstart" : "mousedown", (event) => {
            startDrag(event);
            document.addEventListener(isTouchDevice ? "touchmove" : "mousemove", dragElement);
            document.addEventListener(isTouchDevice ? "touchend" : "mouseup", stopDrag);
        });

    });
}
