class Basket{
    constructor(){
        this.x= 250;
        this.y=550;
        this.width=50;
        this.height=60;
    }
    draw(){
        const image = new Image();
        image.src = './images/basket.jpg';
        context.drawImage(image, this.x, this.y, this.width, this.height);

    }
    move(keyCode){

        context.clearRect(this.x, this.y, this.width, this.height);
        switch(keyCode) {
            case 37: 
                if (this.x > 20) {
                    this.x -= 10;
                }
            break;
            case 39: 
                if (this.x < 430) {
                    this.x += 10
                }
            break;
        }

    }
}