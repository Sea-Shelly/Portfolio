function getRandInt(min,max){
    return Math.floor(Math.random()*(max-min+1))+min
}

function something(){
    window.addEventListener('DOMContentLoaded', () =>{
        const childs = Array.from(document.getElementById('imgs').children)
        const norm = childs[0]
        const spook = childs[1]

        childs.forEach(div => div.style.display = 'none')
        norm.style.display = 'block'
        function swish(){
            const delay = getRandInt(2000,7000)
            const duration = getRandInt(500,1500)

            setTimeout(() =>{
                const randInd = getRandInt(0,spook.length-1)

                norm.style.display = 'none'
                spook.style.display = 'block'

                setTimeout(()=>{
                    norm.style.display = 'block'
                    spook.style.display = 'none'
                    swish()
                },duration)
            },delay)
        }
        swish()
    })

}
something()



