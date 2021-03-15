let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 300;

context.moveTo(20, 20);
context.lineTo(30, 20);
context.stroke();