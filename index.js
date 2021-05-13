const writeCards1 =(["Ada", "Brendan", "Ali"], "birthday");function writeCards(array, string){
    const newArray = []
    for(let i = 0 ; i < array.length; i++){
    newArray.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`);
    }
    return newArray;
}
writeCards(writeCards1);


let NUMBER = 10;
function countDown(number){
    while (number >= 0){
    console.log(number--)
    }
}

countDown(NUMBER)
