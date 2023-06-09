document.addEventListener("DOMContentLoaded",()=>{
    const dino=document.querySelector('.dino');
    function control(e){
        if(e.key==='Space'){
            console.log('key pressed');
        }
    }
    document.addEventListener('keyup',control)
})