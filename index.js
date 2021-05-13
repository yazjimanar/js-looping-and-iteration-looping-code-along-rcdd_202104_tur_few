const writeCards1 =(["Ada", "Brendan", "Ali"], "birthday");function writeCards(array, string){
    const newArray = []
    for(let i = 0 ; i < array.length; i++){
    newArray.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`);
    }
    return newArray;
}
writeCards(writeCards1);


function countdown(number){
    while (number >= 0){
    console.log(number--)
    }
}

countdown(10)
