const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

document.addEventListener("keydown", tusHareketleri);

let x = 10;
let y = 10;
let konum = 20;
let hareketX =0;
let hareketY =0;
let yilanParcalari = [];
let yilanUzunlugu = 3;
let elmaX = 5;
let elmaY = 5;

class YilanParcasi{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}

function oyunuCiz(){
    ekraniTemizle();
    yilaniCiz();
    yilaninKonumunuGuncelle();
    elmayiCiz();
}

function yeniOyun(){
    document.location.reload();
}

function ekraniTemizle(){
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,400,400);  
}

function yilaniCiz(){

    ctx.fillStyle = "green";
    for(let i in yilanParcalari){
        let part = yilanParcalari[i];
        ctx.fillRect(part.x * konum, part.y * konum, 18,18);
    }

    yilanParcalari.push(new YilanParcasi(x,y));

    if(yilanParcalari.length > yilanUzunlugu){
        yilanParcalari.shift();
    }

    ctx.fillStyle = "white";
    ctx.fillRect(x * konum ,y * konum,18,18);
}

function tusHareketleri(e){
    if(e.keyCode == 37){
       hareketX = -1;
       hareketY = 0;
    }else if(e.keyCode == 38){
        hareketY = -1;
        hareketX = 0;
    }else if(e.keyCode == 39){
        hareketY = 0;
        hareketX = 1;
    }else if(e.keyCode == 40){
        hareketY =1;
        hareketX = 0;
    }    
}

function yilaninKonumunuGuncelle(){
    let sonucX = x + hareketX;
    let sonucY = y + hareketY;
    if(sonucX > 19){
        x = 0;
    }else if(sonucX < 0){
        x = 19
    }else{
        x = sonucX;
    }

    if(sonucY > 19){
        y = 0;
    }else if(sonucY < 0){
        y = 19;
    }else{
        y = sonucY;
    }
}

function elmayiCiz(){
    ctx.fillStyle ="red";
    ctx.fillRect(elmaX * konum,elmaY * konum,18,18);
}

setInterval(()=>{
    oyunuCiz();    
},100);