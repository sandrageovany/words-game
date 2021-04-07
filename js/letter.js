class Letter {
    constructor(x, y, image, letter) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.image = image
        this.letter = letter
    }

    draw() {
        
       // context.fillStyle = 'orange';
       // context.fillRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
}