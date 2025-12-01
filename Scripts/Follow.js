
document.addEventListener('mousemove',(event) =>{
    const pupil = document.querySelector('.pupils');
    const base = document.querySelector('.whites');
    const mouseX = event.clientX;
    const mouseY = event.clientY

    const centerX = base.getBoundingClientRect().left + base.getBoundingClientRect().width/2;
    const centerY = base.getBoundingClientRect().top + base.getBoundingClientRect().height/2;
    const dx = mouseX - centerX;
    const dy = mouseY - centerY;

    const angle = Math.atan2(dy,dx);
    const r = base.getBoundingClientRect().width * 0.02;

    const pupilX = Math.cos(angle) * r;
    const pupilY = Math.sin(angle) * r;

    pupil.style.transform = `translate(${pupilX}px, ${pupilY}px) translate(-50%,-50%)`
});