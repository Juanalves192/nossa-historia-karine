const texto = "Essa é a nossa história, Karine. E ela só está começando...";
let i = 0;
const velocidade = 60;

function digitar() {
  if (i < texto.length) {
    document.getElementById("typing").innerHTML += texto.charAt(i);
    i++;
    setTimeout(digitar, velocidade);
  }
}

digitar();

function mostrarMensagem() {
  // Mostrar mensagem extra
  document.getElementById("mensagem").innerText = "Você é tudo pra mim, Karine 💖";

  // Mostrar a foto
  document.getElementById("fotoKarine").style.display = "block";

  // Tocar a música
  document.getElementById("musica").play();
}

// Animação de corações
const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

function Heart(x, y, size, speed) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.speed = speed;
  this.opacity = 1;

  this.update = function () {
    this.y -= this.speed;
    this.opacity -= 0.005;
  };

  this.draw = function () {
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = "#ff4d6d";
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.bezierCurveTo(this.x + this.size, this.y - this.size,
                      this.x + this.size * 2, this.y + this.size,
                      this.x, this.y + this.size * 2);
    ctx.bezierCurveTo(this.x - this.size * 2, this.y + this.size,
                      this.x - this.size, this.y - this.size,
                      this.x, this.y);
    ctx.fill();
    ctx.globalAlpha = 1;
  };
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (Math.random() < 0.1) {
    hearts.push(new Heart(Math.random() * canvas.width, canvas.height, 10 + Math.random() * 10, 1 + Math.random() * 2));
  }

  for (let i = hearts.length - 1; i >= 0; i--) {
    hearts[i].update();
    hearts[i].draw();
    if (hearts[i].opacity <= 0) {
      hearts.splice(i, 1);
    }
  }

  requestAnimationFrame(animate);
}

animate();

