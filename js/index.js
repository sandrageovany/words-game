const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
document.getElementById('game-board').style.display = 'none';
document.getElementById('win').style.display = 'none';
let missed =0

document.getElementById('start-button').onclick = () => {
    startGame();
    document.getElementById('start-button').style.display = 'none';
}
let lettersFrequency = 0;
let currentGame;
let currentBasket = new Basket();
let words = ['art', 'bear', 'music', 'cat'];
let newLetter = new Letter();
let randomWordIndex = Math.floor(Math.random() * words.length);
//let randomWord= 'cat';
let randomWord= words[randomWordIndex];
let randomWordArray = randomWord.split('');

let letterCollection = [
    {
         A: './images/A.png'
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

    },
    {
        K: './images/alphabet/K.png'
    },
    {
        L: './images/alphabet/L.png'
    },
    {
        M: './images/alphabet/M.png'
    },
    {
        N: './images/alphabet/N.png'
    },
    {
        O: './images/alphabet/O.png'
    },
    {
        P: './images/alphabet/P.png'
    },
    {
        Q: './images/alphabet/Q.png'
    },
    {
         R: './images/alphabet/R.png'
    },
    {
        S: './images/alphabet/S.png'
    },
    {
        T: './images/alphabet/T.png'
    },
    {
        U: './images/alphabet/U.png'
    },
    {
        V: './images/alphabet/V.png'
    },
    {
        W: './images/alphabet/W.png'
    },
    {
        X: './images/alphabet/X.png'
    },
    {
        Y: './images/alphabet/Y.png'
    },
    {
        Z: './images/alphabet/Z.png'
    }

];
let lettersCaught = [];
let letters = [];

document.addEventListener('keydown', (e) => {
    currentGame.basket.move(e.keyCode);
});

function startGame() {
    document.getElementById('game-board').style.display = 'block';
    currentGame = new Game();
    document.getElementById('word').innerText=randomWord;

    currentGame.basket = currentBasket;
    currentGame.basket.draw();
    cancelAnimationFrame(updateCanvas);//cancel any animation

    //that might exist from the previous game
    updateCanvas();
}

function detectCollision(letter) {
    return !((currentGame.basket.x > letter.x + letter.width) ||
        (currentGame.basket.x + currentGame.basket.width < letter.x) ||
        (currentGame.basket.y > letter.y + letter.height));
}

function updateCanvas() {      
    context.clearRect(0, 0, canvas.width, canvas.height);
    currentGame.basket.draw();

    lettersFrequency++;
    if (lettersFrequency % 80 === 1) {
        const randomLetterX = Math.floor(Math.random() * 450);
        const randomLetterY = 0;
        // const randomLetterWidth = Math.floor(Math.random() * 50) + 20;
        // const randomLetterHeight = Math.floor(Math.random() * 50) + 20;
        const randomIndex = Math.floor(Math.random() * letterCollection.length);
        // letter is an object
        const letter = Object.keys(letterCollection[randomIndex]);
        const imageLetter = new Image();
        imageLetter.src = letterCollection[randomIndex][letter[0]];

        newLetter = new Letter(
            randomLetterX,
            randomLetterY,
            // randomLetterWidth,
            // randomLetterHeight,
            imageLetter,
            letter[0]
        );
        letters.push(newLetter);
        console.log(`new letter value`, newLetter);


    }

    letters.forEach((letter, index) => {
        letter.y += 1;
        letter.draw();
        if (detectCollision(letter)) {
            lettersCaught.push(letter)
           letters.splice(index, 1);
            if (exists(lettersCaught)) {

                document.getElementById('win').style.display = 'block';
                document.getElementById('canvas').style.display = 'none';
                document.getElementById('restart').addEventListener('click', () => {
                    location.reload()
                })
              
                 currentGame.gameOver = true;
                // letterFrequency = 0;
                // currentGame.score = 0;
                // //document.getElementById('score').innerHTML = 0;
                // currentGame.letters = [];
                // //document.getElementById('game-board').style.display = 'none';
                // cancelAnimationFrame(updateCanvas);
               
            }
        }

        if (letter.y > canvas.height) {
            letters.splice(index, 1)
        }

    });

   
    if (!currentGame.gameOver) {
        requestAnimationFrame(updateCanvas);
    }

}

function exists(letters) {
    console.log(randomWordArray);
    console.log(letters.letter);
    for (let i = 0; i < letters.length; i++) {
        let index = randomWordArray.indexOf(letters[i].letter.toLowerCase());
        console.log(letters[i].letter.toLowerCase())
        console.log("index", index)

        if (index > -1) {
            currentGame.score++;
            debugger;
            document.getElementById('score').innerHTML = currentGame.score;
            
            randomWordArray.splice(index, 1);
            if(randomWordArray.length === 0) {
                document.getElementById('score').innerHTML = currentGame.score;
                return true;
            }
        } else if(index=== -1 && currentGame.score!=0 && !letters[i].checked){
            currentGame.score--;
            document.getElementById('score').innerHTML = currentGame.score;
        }
        
        letters[i].checked = true;
    }
}







// updateCanvas();
