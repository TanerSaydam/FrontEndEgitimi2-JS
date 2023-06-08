async function setTodoPage(){   
    root.innerHTML = "<h1>Yükleniyor...</h1>";

    let data;
    let response = await fetch("https://jsonplaceholder.typicode.com/todos");
    data = await response.json();
  
    let text = "<ul>";

    for(let x of data){
        text += `<li>${x.title}</li>`;
    }

    text += "</ul>"

    setTimeout(()=>{
        root.innerHTML = `
        <h1>Todo Page</h1> <hr>` + text;
    },5000)
    
}