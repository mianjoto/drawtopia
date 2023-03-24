const canvasContainer = document.getElementById('canvas-container');
const canvas = document.getElementById('canvas');
const toolbar = document.getElementById('toolbar');
const send = document.getElementById('send')
const ctx = canvas.getContext('2d');
const sendMessageButton = document.getElementById('send')
const imageLink = document.createElement('a');
const byteSize = str => new Blob([str]).size;

const scribbleWidth = 625;
const scribbleHeight = 175;
const scribbleRatio = scribbleWidth / scribbleHeight;

console.log("ratio=" + scribbleRatio)

let color = "black";
let isPainting = false;
let lineWidth = 1;

let undo_array = [];
let index = -1;

console.log("Canvas container offset width: " + canvasContainer.offsetWidth);
console.log("Canvas container offset height: " + canvasContainer.offsetHeight);
const targetCanvasContainerHeight = canvasContainer.offsetWidth / scribbleRatio;

console.log("Given current width " + canvasContainer.offsetWidth + ", target height will be " + targetCanvasContainerHeight)
canvasContainer.offsetHeight = targetCanvasContainerHeight;

canvas.width = canvasContainer.offsetWidth;
canvas.height = targetCanvasContainerHeight;

// calculate the scaling factor
const scaleX = canvas.offsetWidth / scribbleWidth;
const scaleY = canvas.offsetHeight / scribbleHeight;

console.log("scalex = " + scaleX)
console.log("scaley = " + scaleY)

// adjust the context's scale
ctx.scale(scaleX, scaleY);

// reset the context's translation
ctx.translate(0, 0);

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);


canvas.addEventListener("mousedown", start);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stop);
canvas.addEventListener("mouseout", stop);

canvas.addEventListener("touchstart", start);
canvas.addEventListener("touchmove", draw);
canvas.addEventListener("touchend", stop);

toolbar.addEventListener("click", clickEventHandler);
send.addEventListener("click", sendMessage)

function start(event)
{
    isPainting = true;
    const rect = canvas.getBoundingClientRect();
    ctx.beginPath()
    ctx.moveTo((event.clientX - rect.left) / scaleX,
        (event.clientY - rect.top) / scaleY);
    event.preventDefault();
}

function draw(event)
{
    if (isPainting)
    {
        const rect = canvas.getBoundingClientRect();
        ctx.lineTo((event.clientX - rect.left) / scaleX,
            (event.clientY - rect.top) / scaleY);
        ctx.lineWidth = lineWidth;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();
    }

    event.preventDefault();
}

function stop(event)
{
    if (isPainting)
    {
        ctx.stroke();
        ctx.closePath();
        isPainting = false;
    }

    event.preventDefault();
    if (event.type != "mouseout")
    {
        undo_array.push(ctx.getImageData(0, 0, canvas.width, canvas.height))
        index += 1;
    }
}

function changecolor(element)
{
    color = element.style.background;
    console.log(color)
    ctx.strokeStyle = element.style.background;
}

function clickEventHandler(event)
{

    if (event.target.id === "pen")
    {
        ctx.strokeStyle = color;
    }

    if (event.target.id === "size1")
    {
        lineWidth = 1;
    }

    if (event.target.id === "size2")
    {
        lineWidth = 3;
    }

    if (event.target.id === "size3")
    {
        lineWidth = 5;
    }

    if (event.target.id === "size4")
    {
        lineWidth = 10;
    }

    if (event.target.id === "size5")
    {
        lineWidth = 20;
    }

    if (event.target.id === "eraser")
    {
        ctx.strokeStyle = "white"
    }

    if (event.target.id === "undo")
    {
        if (index <= 0)
        {
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            undo_array = [];
            index = -1;
        } else
        {
            index -= 1;
            undo_array.pop();
            ctx.putImageData(undo_array[index], 0, 0);
        }
    }

    if (event.target.id === "clear")
    {
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        undo_array = [];
        index = -1;
    }

    if (event.target.id === "download")
    {
        imageLink.download = 'canvas.jpg'
        imageLink.href = canvas.toDataURL('image/jpg', 1);
        imageLink.click();
        console.log(imageLink.href);
        console.log(byteSize(imageLink.href));
    }
}

function sendMessage(event)
{
    if (!imageLink) return;

    imageLink.href = canvas.toDataURL('image/jpg', 1);

    const data = {
        image: imageLink.href,
    };

    fetch('/sendMessage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
        .then(res => res.json())
        .then(data =>
        {
            console.log("Successfully sent scribble to server.");
        })
        .catch(err => console.error(err));
}