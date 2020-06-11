document.addEventListener('DOMContentLoaded',()=>{
    const cardArray=[
        {
            name:'fries',
            img:'',
        },
    ]
    const grid = document.querySelector('.grid');

    //criando tabuleiro 
    function createBoard(){
        for (let index = 0; index < array.length; index++) {
             const card = document.createElement('img');
             card.setAttribute('src','images/blank.png');
             card.setAttribute('data-id',i);
             card.addEventListener('click',flipCard);
             grid.appendChild(card)
            
        }
    }

    //virando a carta
    function flipCard(){
        let cardId = this,

    }
    createBoard();
})