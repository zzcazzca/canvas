let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 300;

// context.translate(300, 150);

// context.arc(0, 0, 50, 0, Math.PI * 1.5);
// context.lineTo(-10, -20);
// context.fill();

context.beginPath();
context.rect(10, 10, 50, 50);
context.stroke();
// context.beginPath();
context.rect(1, 1, 50, 50);

context.stroke();