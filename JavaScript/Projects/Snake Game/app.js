document.addEventListener("DOMContentLoaded",()=>
{
    const squares=document.querySelectorAll(".grid div")
    const scoreDisplay=document.querySelector("#score")
    const strtBtn=document.querySelector('.start')

    const width=10
    let currentIndex=0
    let appleIndex=0
    
    //drawing snake
    let currentSnake=[2,1,0]//all div with 2 is head, all div with 1 are snake's body,and 0 for the tail
    let direction=1
    let score=0
    let speed=0.9
    let intervalTime=0
    let interval=0

    // assign keycodes
    function control(e){
        squares[currentIndex].classList.remove('snake')// we are removing class of snake
        if(e.keycode===39){
            direction=1
        }else if(e.keycode===38){
            direction=-width
        }
    }
})