function reveal() {
  var expand = document.getElementById("expand");
  var btn = document.getElementById("btn");
  var acc = document.getElementById("acchead");

  if (expand.style.display === "none") {
    btn.innerHTML = "Read less";
    expand.style.display = "grid";
    acc.style.borderColor = "transparent";
  }
  else {
    btn.innerHTML = "Read more";
    expand.style.display = "none";
    acc.style.borderColor = "rgb(51, 51, 51)";
  }
}

var canvas = document.querySelector('canvas');
var brush = canvas.getContext('2d');
var holder = document.getElementById("cardholder");

canvas.width = window.innerWidth;
canvas.height = holder.offsetHeight + 100;

function changeHeight() {
  canvas.height = holder.offsetHeight + 100;
  canvas.width = window.innerWidth;
}

window.onresize = changeHeight;

class Gradient {
    constructor() {
        this.y = canvas.height;
        this.dy = 0;
        this.t = 0;
    }
    
    draw() {
        brush.beginPath(); // dont draw lines everywhere

        var grad = brush.createLinearGradient(0, this.y, 0, 0);
        grad.addColorStop(0, "rgb(0, 195, 255)");
        grad.addColorStop(1, "rgb(51, 51, 51)");
        brush.fillStyle = grad;
        brush.fillRect(0, 0, canvas.width, canvas.height);
    }

    update() {
        if (this.t > 2 * Math.PI) {
            this.t = 0;
        }
        else {
            this.t += .005;
        }
        this.dy = 5 * Math.sin(this.t);
        this.y += this.dy;

        if (this.y < canvas.height) {
            this.y = canvas.height;
        }
    }
}

function myFunction() {
    requestAnimationFrame(myFunction);
    // we have to erase and then draw
    brush.clearRect(0, 0, canvas.width, canvas.height);
    gradient.update();
    gradient.draw();
}

var gradient = new Gradient();

myFunction();

const card1 = document.querySelector(".card__inner1");

card1.addEventListener("click", function (e) {
  card1.classList.toggle('is-flipped');
});

const card2 = document.querySelector(".card__inner2");

card2.addEventListener("click", function (e) {
  card2.classList.toggle('is-flipped');
});

const card3 = document.querySelector(".card__inner3");

card3.addEventListener("click", function (e) {
  card3.classList.toggle('is-flipped');
});

const card4 = document.querySelector(".card__inner4");

card4.addEventListener("click", function (e) {
  card4.classList.toggle('is-flipped');
});

const card5 = document.querySelector(".card__inner5");

card5.addEventListener("click", function (e) {
  card5.classList.toggle('is-flipped');
});

changeHeight();