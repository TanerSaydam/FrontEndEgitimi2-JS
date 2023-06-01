const inputElement = document.getElementById("work");
const listElement = document.getElementById("list");

const todoList = [];

//[] => array

const save = () =>{
    todoList.push("<li>" + inputElement.value + "</li>");

    listElement.innerHTML = "";

    //listElement.innerHTML = todoList;

    todoList.forEach(element => {
       listElement.innerHTML = listElement.innerHTML + element;
    });

    inputElement.value = "";
}