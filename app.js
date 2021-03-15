let myArray = [2,3,4,5,6,7];
//(function name parameters)
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
console.log(result);