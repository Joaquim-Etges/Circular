let canvas =document.getElementById("mycanvas")
let ctx = canvas.getContext("2d")

let color = "red"
let Laridth =2
//ATENÇÃO ATENÇÃO, AQUI TÁ O PULO DO GATO DA LIÇÃO DE CASA
//AQUI TÁ A CHAVE PARA O SUCESSO

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = largura;
ctx.arc(400,200,40,0,2*Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = largura;
ctx.arc(200,200,40,0,2*Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = largura;
ctx.arc(300,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = largura;
ctx.arc(250,250,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = largura;
ctx.arc(350,250,40,0,2*Math.PI);
ctx.stroke();


canvas.addEventListener("mousedown",RatoFrito)

function RatoFrito(e){
color = document.getElementById("cor").value;
Laridth = document.getElementById("largura").value;

mouseX = e.clientX - canvas.offsetLeft;
mouseY = e.clientY - canvas.offsetTop;

circulo(mouseX, mouseY);

}

function circulo(mouseX, mouseY){

    ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = largura;
ctx.arc(mouseX,mouseY,40,0,2*Math.PI)
ctx.stroke();
}

function clean(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}