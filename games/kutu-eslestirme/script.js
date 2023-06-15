let kutular = [
]

let meyveList = ["Karpuz","Üzüm","Çilek","Armut","Elma","Kiraz"]

for(let a in meyveList){   
    let meyve = meyveList[a];

    let konum1MusaitMi = false;

    while(!konum1MusaitMi){        
        let konum1 = Math.floor(Math.random() * (meyveList.length * 2) + 1);
    
        let konumResult1 = kutular.filter(p=> p.id === konum1).length;
        if(konumResult1 === 0){           
            kutular.push({
                id: konum1,
                meyveAdi: meyve,
                acikMi: false
            });

            konum1MusaitMi = true;
        }
    }

    
    let konum2MusaitMi = false;

    while(!konum2MusaitMi){        
        let konum2 = Math.floor(Math.random() * (meyveList.length * 2) + 1);    
       
        let konumResult2 = kutular.filter(p=> p.id === konum2).length;
        if(konumResult2 === 0){
            kutular.push({
                id: konum2,
                meyveAdi: meyve,
                acikMi: false
            });

            konum2MusaitMi = true;
        }
    }    
}

console.log(kutular);

let text = "";

for (let el of kutular) {
    text += `
<div class="kutu" id="div-${el.id}" onclick="rotateDiv(${el.id})">
    <h1>${el.meyveAdi}</h1>
</div>  
    `
}

document.querySelector("body").innerHTML += text;

function rotateDiv(i) {

    if(kutular[i].acikMi){
        return;
    }

    let divElement = document.getElementById("div-" + i);

    divElement.style.transform = "rotateY(180deg)";

    document.querySelector(`#div-${i} h1`).style.display = "block";
    document.querySelector(`#div-${i} h1`).style.transform = "rotateY(180deg)";

    let count = kutular.filter(p => p.acikMi == true).length;
    
    if (count > 0 && count %2 > 0) {
        let meyveVarMi = false;

        for (let m of kutular) {
            if (m.acikMi == true && m.meyveAdi == kutular[i].meyveAdi && m.id != i) {
                meyveVarMi = true;
                document.getElementById("div-" + m.id).classList.add("on");
                break;
            }
        }

        if (meyveVarMi == true) {
            kutular[i].acikMi = true;
            divElement.classList.add("on");
        } else {
            setTimeout(() => {
                divElement.style.transform = "rotateY(-180deg)";

                document.querySelector(`#div-${i} h1`).style.display = "none";
                document.querySelector(`#div-${i} h1`).style.transform = "rotateY(-180deg)";
            }, 2000);
        }

    }else{
        kutular[i].acikMi = true;

        let acikKutuSayisi = kutular.filter(p=> p.acikMi == true).length;

        if(acikKutuSayisi +1 === kutular.length){
            setTimeout(()=> {
                alert("Tebrikler!")
            },1500);
        }
    }
}