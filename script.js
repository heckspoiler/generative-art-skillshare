const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let atoms = [];
const randomColors = ["red", "blue", "green", "yellow", "pink", "purple"];

canvas.addEventListener("click", function (e) {
  for (let i = 0; i < 10; i++) {
    atoms.push(new Atom(e.x, e.y));
  }
});

const animate = () => {
  atoms.forEach((atom) => {
    atom.draw();
    atom.update();
  });
  requestAnimationFrame(animate);
};

animate();

class Atom {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = Math.random() * 10 + 2;
    this.speedX = Math.random() * 4 - 2;
    this.speedY = Math.random() * 4 - 2;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.stroke();
  }
}
