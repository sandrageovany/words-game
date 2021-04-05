const canvas= document.getElementById('canvas');
const context= canvas.getContext('2d');
let lettersFrequency = 0;
let currentGame;
let currentBasket = new Basket();
let words= ['Art','Beer','music', 'cat' ];
let newLetter = new Letter();

let letterCollection = [
    {
        A: './images/alphabet/A.png'
    },
    {
        B: './images/alphabet/B.png'
    },
    {
        C: './images/alphabet/C.png'

    },
    {
        D: './images/alphabet/D.png'

    },
    {
        E: './images/alphabet/E.png'

    },
    {
        F: './images/alphabet/F.png'

    },
    {
        G: './images/alphabet/G.png'

    },
    {
        H: './images/alphabet/H.png'

    },
    {
        I: './images/alphabet/I.png'

    },
    {
        J: './images/alphabet/J.png'

    }

];

let letters = [];

document.addEventListener('keydown', (e) => {
    currentGame.basket.move(e.keyCode);
});

function startGame(){
    currentGame = new Game();

    
    currentGame.basket = currentBasket;
    currentGame.basket.draw();
    //that might exist from the previous game
    updateCanvas();
}

function detectCollision(letter){
    return !((currentGame.basket.x > letter.x + letter.width) ||
    (currentGame.basket.x + currentGame.basket.width < letter.x) ||
    (currentGame.basket.y > letter.y + letter.height));
}

function updateCanvas(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    currentGame.basket.draw();
  
    lettersFrequency++;
    if (lettersFrequency % 240 === 1) {
        const randomLetterX = Math.floor(Math.random() * 450);
        const randomLetterY = 0;
        // const randomLetterWidth = Math.floor(Math.random() * 50) + 20;
        // const randomLetterHeight = Math.floor(Math.random() * 50) + 20;
        const randomIndex = Math.floor(Math.random()*letterCollection.length);
        const letter = Object.keys(letterCollection[randomIndex]);
        const imageLetter = new Image();
        imageLetter.src = letterCollection[randomIndex][letter[0]];
      
         newLetter = new Letter(
            randomLetterX,
            randomLetterY,
            // randomLetterWidth,
            // randomLetterHeight,
            imageLetter
        );
        letters.push(newLetter);
        console.log(letters);
    }

    letters.forEach((letter) => {
        letter.y += 1;
        letter.draw();
    })
  requestAnimationFrame(updateCanvas);

let randomWord= Math.floor(Math.random()*words.length);
if(detectCollision(newLetter)){
    while(randonWord.length){

    
    if(randomWord.toString().includes(newLetter)){
        score++;
    }else{
        score --;
    }
}
}


}

// updateCanvas();
startGame();