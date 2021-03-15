let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 300;

let num = 30;
function animation() {
    if (num === 30) {
        drawClock();
        num = 0;
    } else {
        num++;
    }
    window.requestAnimationFrame(animation);
}

function drawClock(){
    let date = new Date();
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.save();
    context.textAlign = "center";
    context.textBaseline="middle";
    context.translate(canvas.width / 2, canvas.height / 2);
    //画中心
    context.beginPath();
    context.arc(0, 0, 5, 0, 2 * Math.PI);
    context.fill();

    //画边框及数字
    context.beginPath();
    context.arc(0, 0, 50, 0, 2 * Math.PI);
    context.stroke();
    for (var i = 1, angle = Math.PI / 3; i <= 12; i++) {
        context.fillText(i, 60 * Math.cos(angle), -60 * Math.sin(angle));
        angle -= Math.PI / 6;
    }

    //画时针
    context.beginPath();
    context.moveTo(0, 0);
    context.save();
    context.rotate((date.getHours() % 12 - 3) * Math.PI / 6);
    context.lineTo(20, 0);
    context.stroke();
    context.restore();
    
    // //画分针
    context.beginPath();
    context.moveTo(0, 0);
    context.save();
    context.rotate((date.getMinutes() - 15) * Math.PI / 30);
    context.lineTo(30, 0);
    context.stroke();
    context.restore();
    
    
    // //画秒针
    context.beginPath();
    context.moveTo(0, 0);
    context.save();
    context.rotate((date.getSeconds() - 15) * Math.PI / 30);
    context.lineTo(40, 0);
    context.stroke();
    context.restore();

    context.restore();
}

animation();