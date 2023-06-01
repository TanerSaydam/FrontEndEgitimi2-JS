// function kaydet(){
//     console.log("Merhaba!");
// } //bu bir function / metot syntax;

// const kaydet2 = () => {
//     console.log("Merhaba!");
// }

// kaydet();
// kaydet2();


const nameElement = document.getElementById("name");
const btnSetNameElement = document.getElementById("btnSetName");
const selectElement = document.getElementById("select");

// nameElement.onkeyup = function(){
//     console.log(nameElement.value);
// }

// selectElement.onchange = function(){
//     console.log(selectElement.value);
// }


// btnSetNameElement.addEventListener("click", function(){
//     setName()
// });

//click, change, keyup / keydown

btnSetNameElement.onclick = function(){
    setName();
}

const setName = () => {
    nameElement.value = "Taner Saydam";
}

// function setName(){
//     nameElement.value = "Taner Saydam";
// }




// document.querySelector(".form-control");



