const canvas = document.getElementById('drawing-board');
const toolbar = document.getElementById('toolbar');
const ctx = canvas.getContext('2d');
const imageLink = document.createElement('a');
const byteSize = str => new Blob([str]).size;
const offsetx = 5;
const offsety = 54;

canvas.width = 1250;
canvas.height = 350;

let isPainting = false;
let lineWidth = 5;
let initialX;
let initialY;
ctx.fillStyle = "#ffffff";
ctx.fillRect(0, 0, canvas.width, canvas.height);

toolbar.addEventListener('click', e => {
    if (e.target.id === 'clear') {
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    if (e.target.id == 'download'){
        imageLink.download = 'canvas.jpg'
        imageLink.href = canvas.toDataURL('image/jpg', 1);
        imageLink.click();
        console.log(imageLink.href);
        console.log(byteSize(imageLink.href));
    }
});

toolbar.addEventListener('change', e => {
    if(e.target.id === 'stroke') {
        ctx.strokeStyle = e.target.value;
    }

    if(e.target.id === 'lineWidth') {
        lineWidth = e.target.value;
    }
    
});

const draw = (e) => {
    if(!isPainting) {
        return;
    }

    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    ctx.lineTo(e.clientX - offsetx, e.clientY - offsety);
    ctx.stroke();
}

canvas.addEventListener('mousedown', e => {
    isPainting = true;
    initialX = e.clientX;
    initialY = e.clientY;
});

canvas.addEventListener('mouseup', e => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
});

canvas.addEventListener('mousemove', draw);