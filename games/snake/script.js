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
let hiz = 10;
let skor = 0;

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
    elmaninKonumunuGuncelle();
    skoruCiz();
    hiziCiz();    

    let sonuc = oyunBittiMi();    
    if(sonuc){
        return;
    }

    setTimeout(oyunuCiz, 1000/hiz);
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
    if(e.keyCode == 37){ //sol
        if(hareketX == 1) return;
       hareketX = -1;
       hareketY = 0;
    }else if(e.keyCode == 38){ //üst
        if(hareketY == 1) return;
        hareketY = -1;
        hareketX = 0;
    }else if(e.keyCode == 39){ //sağ
        if(hareketX == -1) return;
        hareketY = 0;
        hareketX = 1;
    }else if(e.keyCode == 40){ //aşağı
        if(hareketY == -1) return;
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

function elmaninKonumunuGuncelle(){
    if(x === elmaX && y === elmaY){
        elmaX = Math.floor(Math.random() * konum);
        elmaY = Math.floor(Math.random() * konum);

        let elmaKonumuMusaitMi = false;
        while(!elmaKonumuMusaitMi){
            elmaKonumuMusaitMi = true;
            for(let el of yilanParcalari){
                if(el.x === elmaX && el.y === elmaY){
                    elmaX = Math.floor(Math.random() * konum);
                    elmaY = Math.floor(Math.random() * konum);
                    elmaKonumuMusaitMi= false;
                }
            }
        }

        yilanUzunlugu +=1;
        skor += 10;
        if(yilanUzunlugu %3 === 0){
            hiz++;
        }
    }
}

function skoruCiz(){
    ctx.fillStyle = "white";
    ctx.font = "20px verdena";
    ctx.fillText(`Skor: ${skor}`,320,30)
}

function hiziCiz(){
    ctx.fillStyle = "white";
    ctx.font = "20px verdena";
    ctx.fillText(`Hız: ${hiz}`,320,60)
}

function oyunBittiMi(){
    let oyunBitti = false;    
    if(hareketX === 0 && hareketY === 0){
        return;
    }

    for(let i in yilanParcalari){
        let part = yilanParcalari[i];
        //console.log(part.x, x," - ", part.y, y);
        if(part.x == x && part.y == y){
            oyunBitti = true;
            break;
        }
    }

    if(oyunBitti){
        oyunBittiyiCiz();
    }

    return oyunBitti;
}

function oyunBittiyiCiz(){
    ctx.fillStyle = "white";
    ctx.font = "50px verdena";
    ctx.fillText("Oyun Bitti",400/4.5, 400/2)
}

oyunuCiz();