
function getRandInt(min, max){
    return Math.floor(Math.random()*(max-min+1)) + min
}

function change() {
    window.addEventListener('DOMContentLoaded', () => {
        const kids = Array.from(document.querySelector('.images').children)
        const base = kids[0]
        const other = kids[1]

        kids.forEach(div => div.style.display = 'none')
        base.style.display = 'block'

        function switchImage(){
            const delay = getRandInt(2000,7000)
            const duration = getRandInt(500,1500)

            setTimeout(() =>{
                base.style.display = 'none'
                other.style.display = 'block'

                setTimeout(() =>{
                    base.style.display = 'block'
                    other.style.display = 'none'
                    switchImage();
                },duration)
            },delay)
        }
        switchImage()
    })
}
change()