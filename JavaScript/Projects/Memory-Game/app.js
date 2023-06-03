const cardArray = [
    {
        name:'fries',
        img:'images/Fries.jpg',
    },
    {
        name:'burger',
        img:'images/Burger.jpg',
    },
    {
        name:'hotdog',
        img:'images/Hotdog.jpg',
    },
    {
        name:'shake',
        img:'images/milkshake.jpg',
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png',
    },
    {
        name:'pizza',
        img:'images/pizza.jpg',
    },{
        name:'fries',
        img:'images/Fries.jpg',
    },
    {
        name:'burger',
        img:'images/Burger.jpg',
    },
    {
        name:'hotdog',
    
        img:'images/Hotdog.jpg',
    },
    {
        name:'shake',
        img:'images/milkshake.jpg',
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png',
    },
    {
        name:'pizza',
        img:'images/pizza.jpg',
    }
];

cardArray.sort(()=>0.5-Math.random());
const gridDisplay=document.querySelector('#grid');

let cardsChosen=[];
let cardsChosenIds=[]
const cardsWon=[]
let x=0

function createBoard(){
    for(let i=0; i<cardArray.length;i++){
        const card=document.createElement('img');   
        card.setAttribute('src','images/blank.jpg');  
        card.setAttribute('data-id',i);
        card.addEventListener("click",flipCard);
        card.width=100;
        card.height=100;
        console.log(card,i);
        gridDisplay.appendChild(card);
    }
}
createBoard();
function checkMatch(){
    const cards=document.querySelectorAll('#grid img')//document.querySelectorAll('#grid img')
    let scoreDisplay=document.querySelector('#result')
    
    console.log("CheckMatch triggered");
    if(cardsChosen[0]===cardsChosen[1]){
        alert("You found a match!")//should have been a popup...
        cards[cardsChosenIds[0]].setAttribute('src','images/white.jpg');
        cards[cardsChosenIds[1]].setAttribute('src','images/white.jpg');
        cards[cardsChosenIds[0]].removeEventListener('click',flipCard)
        cards[cardsChosenIds[1]].removeEventListener('click',flipCard)
        cardsWon.push(cardsChosen)
        x=x+10
        scoreDisplay.innerHTML=x
    }
    else{
        cards[cardsChosenIds[0]].setAttribute('src','images/blank.jpg');
        cards[cardsChosenIds[1]].setAttribute('src','images/blank.jpg');
    }
    cardsChosen=[]
    cardsChosenIds=[]
    
}
console.log(cardArray);
function flipCard(){
    let cardId=this.getAttribute("data-id");
    console.log(cardArray[cardId].name);
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    console.log("clicked",cardId);
    console.log(cardsChosen)
    this.setAttribute('src',cardArray[cardId].img)
    if(cardsChosen.length===2){
        setTimeout(checkMatch,500)
    }
}