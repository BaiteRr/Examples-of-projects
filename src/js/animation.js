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



let scrollNum = num => {
    if (window.pageYOffset > 750) {
        num = 750
    }
    if (window.pageYOffset > 1645) {
        num = 1645
    }
    return num
}


let scrollmar = mar => {
    if (window.pageYOffset > 750) {
        mar = 800
    }
    if (window.pageYOffset > 1645) {
        mar = 2031
    }
    return mar
}


window.onscroll = function () {
    if (window.pageYOffset > scrollNum('num')) {
        header.style.cssText = `position: absolute; margin-top: ${scrollmar('mar')}px`
        slider.style.cssText = 'padding-top: 156px; margin-top: 0'
        geo.style.cssText = 'background-image: url("../img/bearth.png")'
        subGeo.style.color = '#005FA3'
        firstLine.style.color = 'black'
        subnav1.style.color = 'black'
        subnav2.style.color = 'black'
        subnav3.style.color = 'black'
        subnav4.style.color = 'black'
        phoneImg.style.cssText = 'background-image: url("../img/bphone.png")'
        clockImg.style.cssText = 'background-image: url("../img/bclock.png")'
        leterImg.style.cssText = 'background-image: url("../img/bemail.png"); height: 15px'
        markImg.style.cssText = 'background-image: url("../img/bmark.png")'
    } else {
        header.style.cssText = 'position: absolute;'
        slider.style.cssText = 'padding-top: 156px; margin-top: 0'
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

