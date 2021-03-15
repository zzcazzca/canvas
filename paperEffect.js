let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 300;

context.translate(300, 150);


context.fillStyle = 'rgba(100, 140, 230, 0.5)';
context.strokeStyle = 'rgba(100, 140, 230, 0.5)';

context.save();
context.shadowColor = 'rgba(0, 0, 0, 0.8)';
context.shadowOffsetX = 12;
context.shadowOffsetY = 12;
context.shadowBlur = 15;

context.beginPath();
context.arc(0, 0, 150, 0, Math.PI * 2, true);
context.moveTo(100, 0);
context.arc(0, 0, 100, 0, Math.PI * 2, false);

context.fill();
context.shadowColor = void 0;
context.shadowOffsetX = 0;
context.shadowOffsetY = 0;
// context.restore();

context.stroke();
