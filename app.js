const fetchData = async () => {
    let response = await fetch("http://newsapi.org/v2/top-headlines?country=co&category=business&apiKey=abae27f412a544b1b70781ecc0ccad02");
    let dataJson = await response.json();
    return dataJson.articles;
}

const renderData = async () => {
    const articles = await fetchData();
    let container = document.getElementById("articles");
    let urlImageNotFound = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.publicdomainpictures.net%2Fes%2Fview-image.php%3Fimage%3D270609%26picture%3Dimagen-no-encontrada&psig=AOvVaw25Y6j33WIk3_0ykUFjbbIQ&ust=1616100590816000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMi7qYCauO8CFQAAAAAdAAAAABAI";
    // Operador Ternario // Condicion ? instruccion : instruccion
    articles.forEach((article) => {
        let alertTemplate = `<div class="col-12 col-sm-12 col-md-6 col-lg-4">
                                <div class="card" style="width: 18rem; ">
                                <img src="${article.urlToImage == null ? urlImageNotFound : article.urlToImage}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                    <h5 class="card-title">${article.title}</h5>
                                    <p class="card-text">${article.description == null ? "Descripión no disponible" : article.description}</p>
                                    </div>
                                </div>
                            </div>`;
        container.innerHTML += alertTemplate;
    });
}
renderData();


































/*let myArray = [2,3,4,5,6,7];

function getData(data){
    return new Promise((resolve,reject)=>{
        if(data.length == 0){
            reject(new error("Hubo un error"));  //Codigo java Script que se ejecuta a futuro (Promesas)
        }
        setInterval(()=>{
            resolve(data);
        },2000);
    });

}*/

/*getData(myArray).then((cosa)=>{
    console.log("Cumplí la promesa");
    console.log("Hola" + cosa);         // Forma antigua de cumplir promesa
}).catch((error)=>{
    console.log("Error");
});*/

/*async function myFunction(){
    let myData = await getData(myArray);  //Cumplir promesa con funcion normal
    console.log(myData);
}*/

/*const fetchData = async () => {
    let myData = await getData(myArray);  //Cumplir promesa con funcion flecha
    console.log(myData);
}
fetchData();*/










/*
//(function name parameters)
function test(){
    console.log("Hola")
}

const test1 = (a) => {      //-> funsiones flecha
    console.log("Hola")
    return a;
}
let myData = test1(3);


let aux = 0;
myArray.forEach((element) => {  // -> funsiones flecha con un Callback
    aux = aux + element;
});

let myNewArray = myArray.map((element) => {

    return element*4;//[8,16,20,24,28]
})
console.log(myNewArray);*/

//-----------------------------------------------------------------------------------

/*
function average (data){
    let aux = 0
    for(element of data)
    {
        //aux = aux + element; tambien se puede realizar de esta manera, es lo mismo que // aux =+ element;
        aux =+ element;
    }
    return aux;
}

let result = average(myArray);
console.log(result);*/