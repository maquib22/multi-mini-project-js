const slideShow = document.querySelector('.slideshow');

setInterval(() => {
    const firstIcon = slideShow.firstElementChild
    firstIcon.classList.add('faded-out')
    const thirdicon = slideShow.children[3];
    thirdicon.classList.add('light');
    thirdicon.previousElementSibling.classList.remove('light')
    setTimeout(() => {
        slideShow.removeChild(firstIcon)
        slideShow.appendChild(firstIcon)

        setTimeout(() => {
            
            firstIcon.classList.remove('faded-out')
        }, 500);

    }, 500);

}, 3000);