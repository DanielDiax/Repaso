let myArray = [2,3,4,5,6,7];

function getData(data){
    return new Promise((resolve,reject)=>{
        setInterval(()=>{
            resolve(data);
        },2000);
    });
    
}
getData(myArray).then((cosa)=>{
    console.log("Cumplí la promesa");
    console.log("Hola" + cosa);
})

//45 min 46 seg de la clase 

























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