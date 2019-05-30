const TILE_SIZE = 32;

class Player {
    constructor() {
        this.model = document.createElement('canvas');
        this.model.width = 64;
        this.model.height = 32;
        this.ctx = this.model.getContext('2d');
        this.beka = 0;
        const img = new Image();
        img.src = 'assets/frog.png';
        img.addEventListener('load', () => { this.ctx.drawImage(img, 0, 0) })

    }

    draw(ctx) {
        ctx.drawImage(this.model, 10, this.beka);
        this.beka++;
    }

}

class Frogger {
    constructor() {
        this.game = document.createElement('canvas');
        this.game.width = 480;
        this.game.height = 640;
        this.ctx = this.game.getContext('2d');
        this.player = new Player();
    }

    init() {
        document.body.appendChild(this.game);
        this.render();
    };
    render() {
        this.ctx.clearRect(0, 0, this.game.width, this.game.height);
        this.player.draw(this.ctx);
        window.requestAnimationFrame(() => this.render());
    };
}
const frogger = new Frogger();
window.addEventListener('DOMContentLoaded', () => frogger.init());
