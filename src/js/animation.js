const header = document.querySelector('.header')
const slider = document.querySelector('.slider')
const geo = document.querySelector('.geo__geoImg')
const subGeo = document.querySelector('.geo__subgeo')
const firstLine = document.querySelector('.firstLine')
const subnav1 = document.querySelector('.subnav__1')
const subnav2 = document.querySelector('.subnav__2')
const subnav3 = document.querySelector('.subnav__3')
const subnav4 = document.querySelector('.subnav__4')
const phoneImg = document.querySelector('.firstLine__phoneImg')
const clockImg = document.querySelector('.firstLine__clockImg')
const leterImg = document.querySelector('.firstLine__leterImg')
const markImg = document.querySelector('.firstLine__markImg')

window.onscroll = function () {
    if (window.pageYOffset > 750) {
        header.style.cssText = 'position: absolute; margin-top: 800px'
        slider.style.cssText = 'padding-top: 191px; margin-top: 0'
        subGeo.style.color = '#005FA3'
        geo.style.cssText = 'background-image: url("../img/bearth.png")'
        firstLine.style.color = 'black'
        subnav1.style.color = 'black'
        subnav2.style.color = 'black'
        subnav3.style.color = 'black'
        subnav4.style.color = 'black'
        phoneImg.style.cssText = 'background-image: url("../img/bphone.png")'
        clockImg.style.cssText = 'background-image: url("../img/bclock.png")'
        leterImg.style.cssText = 'background-image: url("../img/bemail.png"); height: 15px'
        markImg.style.cssText = 'background-image: url("../img/bmark.png")'
    } else if (window.pageYOffset > 10) {
        header.style.cssText = 'position: absolute; margin-top: 10px'
        subGeo.style.color = '#FFFFFF'
        geo.style.cssText = 'background-image: url("../img/earth.png")'
        firstLine.style.color = '#FFFFFF'
        subnav1.style.color = '#FFFFFF'
        subnav2.style.color = '#FFFFFF'
        subnav3.style.color = '#FFFFFF'
        subnav4.style.color = '#FFFFFF'
        phoneImg.style.cssText = 'background-image: url("../img/phone.png")'
        clockImg.style.cssText = 'background-image: url("../img/clock.png")'
        leterImg.style.cssText = 'background-image: url("../img/email.png"); height: 15px'
        markImg.style.cssText = 'background-image: url("../img/mark.png")'
    }
};

// geo.style.color = '#000'

