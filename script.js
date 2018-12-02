var canvas = document.getElementById("canvas");
var canvasContext = canvas.getContext("2d");
var mas = [];
var count =0;
var timer;

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
}

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
function startLife()
{
    var mas2 = [];
    for (var i =0 ; i < 30 ;i++ )
    {
        mas2[i] = [];
        for (var j = 0; j <30 ; j++)
        {
           var  neighbors =0
            if (mas[fpm(i)-1][j] == 1)
            {
                neighbors++;
            }
            if (mas[i][fpp(j) + 1] == 1)
            {
                neighbors++;
            }
            if (mas[fpp(i)+1][j] == 1)
            {
                neighbors++;
            }
            if (mas[i][fpm(j) - 1] == 1)
            {
                neighbors++;
            }
            if (mas[fpm(i)-1][fpp(j)+1] == 1)
            {
                neighbors++;
            }
            if (mas[fpp(i)+1][fpp(j)+1] == 1)
            {
                neighbors++;
            }
            if (mas[fpp(i)+1][fpm(j)-1] == 1)
            {
                neighbors++;
            }
            if (mas[fpm(i)-1][fpm(j)-1] == 1)
            {
                neighbors++;
            }
            if(neighbors ==3)
            {
                mas2[i][j]=1
            }
            else if(neighbors < 2 || neighbors >3)
            {
                mas2[i][j] =0
            }
        }
    }
    mas = mas2;
    drawLife();
    count++;
    document.getElementById('count').innerHTML = count;
    timer = setTimeout(startLife, 300);
}
function fpm(i)
{
    if (i==0)
    {
        return 30;
    }
    else
    {
        return i;
    }
}
function fpp(i)
{
    if (i==29)
    {
        return -1;
    }
    else
    {
        return i;
    }
}
document.getElementById('start').onclick = startLife;