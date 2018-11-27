var canvas = document.getElementById("canvas");
var canvasContext = canvas.getContext("2d");
var mas = [];

canvas.onclick = function (event)
{
    var x = event.offsetX;
    var y = event.offsetY;
    console.log(x);
    console.log(y);
    x = Math.floor(x/10);
    y = Math.floor(y/10);
    mas[x][y] = 1;
    console.log(mas);
    drawLife();
};

function Life ()
{
    var n=30 , m=30;
    for (var i =0 ; i < m ;i++ )
    {
        mas[i] = [];
        for (var j = 0; j <n ; j++)
        {
            mas[i][j] = 0
        }
    }
}

Life();

function drawLife()
{
    canvasContext.clearRect(0,0,300,300);
    for (var i = 0; i<30; i++)
    {
        for (var j=0; j<30 ; j++) {
            if (mas[i][j] == 1) {
                canvasContext.fillRect(i * 10, j * 5, 10, 5);
            }
        }
    }
}

