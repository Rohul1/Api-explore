// const sheild = {
//     name : "rohul",
//     age : 22,
//     roll : 16,
//     batch : 2019
// }
// console.log(JSON.stringify(sheild));



// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))



// fetch("https://jsonplaceholder.typicode.com/users")
// .then(Response => Response.json())
// .then(datas => {
    
// for(const data of datas){
// console.log("person name:", data.name);
// console.log("company name:", data.company.name);

// }



// })



function loadData (){
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    fetch(url)
    .then(Response => Response.json())
    .then(json => console.log(json))
}

