let numberOfBeers = getUserInput();
let numberOfBeersToTakeAway = 1;

function getUserInput(){
    let answer = prompt("Combien de bières?");
    if (answer =="") return alert("Veuillez entrer quelque chose");
    const number = Number(answer);
    if (Number.isNaN(number)) return alert("Veuillez entrer un nombre");
    return Number(answer);
}

while (numberOfBeers > 0  ){
    const strophe = makeStrophe(numberOfBeers, numberOfBeersToTakeAway);
    console.log(strophe);
    numberOfBeers -= numberOfBeersToTakeAway;
    numberOfBeersToTakeAway ++;
}
function makeStrophe(nbr, counter){
    const bottlesOrBottes = getBottleOrBottles(nbr);
    const bottlesToTakeAway = getSmallerNumber(counter, nbr) 
    const remainingBottles = getBiggerNumber(nbr - counter, 0);
    const remainingBottleOrBottles = getBottleOrBottles(remainingBottles);

    const strophe =`${nbr} ${bottlesOrBottes} of beer on the wall  
    ${nbr} ${bottlesOrBottes} of beer
    Take ${bottlesToTakeAway} down, pass it around
    ${remainingBottles} ${remainingBottleOrBottles} of beer on the wall`;

    return strophe;
}

function getBiggerNumber(a, b){
    return a > b  ?  a: b;
}

function getSmallerNumber(a, b){
     return a < b  ?  a: b;
}

function isPlural(nbr) {
    return nbr > 1;
}

function getBottleOrBottles(nbr){
    return isPlural(nbr) ? "bottles" : "bottle";
}