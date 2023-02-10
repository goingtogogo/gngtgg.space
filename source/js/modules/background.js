import circle from '../../img/icons/circle.svg';
import rhombus from '../../img/icons/rhombus.svg';
import x from '../../img/icons/x.svg';
import cube from '../../img/icons/cube.svg';

const data = [rhombus, cube, circle, x]

const max = 30;

class Particle {
    constructor(shape) {
        this.shape = createElementFromString(shape);
        this.shape.classList.add('particle');
        this.speed = 1 + Math.random();

        this.vx = (Math.random() * this.speed) - (Math.random() * this.speed);
        this.vy = (Math.random() * this.speed) - (Math.random() * this.speed);
        this.radius = 10 + Math.round(Math.random() * 50);

        this.w = window.innerWidth;
        this.h = window.innerHeight;
        this.x = (this.w - this.radius) / 2
        this.y = (this.h - this.radius) / 2

        document.addEventListener('resize', this.resize.bind(this));
        this.render()
    }

    render() {
        const animatedBg = document.querySelector('.animated-bg');

        this.shape.style.opacity = 0.8;
        this.shape.style.width = `${this.radius}px`;
        this.shape.style.height = `${this.radius}px`;

        animatedBg.appendChild(this.shape);
    }

    resize() {
        this.w = window.innerWidth;
        this.h = window.innerHeight;
    }

    move() {
        this.x = this.x + this.vx
        this.y = this.y + this.vy

        this.shape.style.left = `${this.x}px`;
        this.shape.style.top = `${this.y}px`;
        this.shape.style.transform = `rotate(${this.y}deg)`


        if (this.x < 0 || this.x > this.w - this.radius) {
            this.vx = -this.vx
        }
        if (this.y < 0 || this.y > this.h - this.radius) {
            this.vy = -this.vy
        }
        return this
    }
}

function createElementFromString(strElem) {
    const div = document.createElement('div');
    div.innerHTML = strElem;
    return div.firstChild;
}


function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let particles = []

function init() {
    for (let i = 0; i < max; i++) {
        particles.push(
            new Particle(data[randomInt(0, data.length - 1)])
        )
    }
}

function update() {
    particles = particles.filter(function (p) {
        return p.move()
    })
    requestAnimationFrame(update.bind(this))
}

init();

export default update;