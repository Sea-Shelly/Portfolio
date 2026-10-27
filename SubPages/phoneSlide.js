document.addEventListener('DOMContentLoaded', () =>{
    const phone = document.querySelector("#nokia")
    if(phone){
        phone.addEventListener('click', function(){
            phone.classList.toggle('active');
        });
    }
});
