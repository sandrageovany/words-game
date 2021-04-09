class Basket{
    constructor(){
        this.x= 350;
        this.y=700;
        this.width=200;
        this.height=100;
        
    }
    draw(){
        const image = new Image();
        image.src = './images/basket.png';
        image.style.backgroundColor = 'rgb(247, 247, 137)';
        context.drawImage(image, this.x, this.y, this.width, this.height);


    }
    move(keyCode){

        context.clearRect(this.x, this.y, this.width, this.height);
        switch(keyCode) {
            case 37: 
                if (this.x > 10) {
                    this.x -= 10;
                }
            break;
            case 39: 
                if (this.x < 620) {
                    this.x += 10
                }
            break;
        }

    }
}