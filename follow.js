
document.addEventListener('mousemove', (event) =>{
    const mouseX = event.clientX
    const mouseY = event.clientY
    const eye = document.getElementById('help')
    const pupil = document.querySelector('.pupils')
    const eyeCenterX = eye.getBoundingClientRect().left + eye.getBoundingClientRect().width / 2;
    const eyeCenterY = eye.getBoundingClientRect().top + eye.getBoundingClientRect().height / 2;

    const angle = Math.atan2(mouseX- eyeCenterX, mouseY-eyeCenterY)
    const pupX = (Math.sin(angle) * 5) +8
    const pupY = Math.cos(angle)*5

    pupil.style.transform = `translate(${pupX}px,${pupY}px)`
})