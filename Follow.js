
document.addEventListener('mousemove',(event) =>{
    const pupil = document.querySelector('.pupils');
    const base = document.querySelector('.base');
    const mouseX = event.clientX;
    const mouseY = event.clientY


    const rect = base.getBoundingClientRect();


    const centerX = pupil.getBoundingClientRect().left + pupil.getBoundingClientRect().width/2;
    const centerY = pupil.getBoundingClientRect().top + pupil.getBoundingClientRect().height/2;
    const dx = mouseX - centerX;
    const dy = mouseY - centerY;

    const angle = Math.atan2(dy,dx);
    const r = rect.width * 0.02;

    const pupilX = Math.cos(angle) * r * 0.55;
    const pupilY = Math.sin(angle) * r*0.75;

    pupil.style.transform = `translate(${pupilX}px, ${pupilY}px`
});