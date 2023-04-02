let x = 0;

const rotate = () => {
    const cubes = document.querySelectorAll('.cube');
    Array.from(cubes).forEach(cube => cube.style.transform = `rotateY(${x}deg)`)

}

document.querySelector('.left-arrow').addEventListener('click', () =>{
    x += 90;
    rotate()
})

document.querySelector('.left-arrow').addEventListener('mouseover', () =>{
    x += 25;
    rotate()
})

document.querySelector('.left-arrow').addEventListener('mouseout', () =>{
    x -= 25;
    rotate()
})

document.querySelector('.right-arrow').addEventListener('click', () =>{
    x -= 90;
    rotate()
})

document.querySelector('.right-arrow').addEventListener('mouseover', () =>{
    x -= 25;
    rotate()
})

document.querySelector('.right-arrow').addEventListener('mouseout', () =>{
    x += 25;
    rotate()
})