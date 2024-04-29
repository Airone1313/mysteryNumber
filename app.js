console.log(`je m'exexcute grâce à moi`);

const config = {
    mysteryNumber: [1, 10],
    maxAttempts: 10,
    attempt: [],
}

//generer le numéro mistère grâce au mystery number qui se trouve dans config

const mysteryNumber = randomNumber()
console.log(`le nombre mistère est`, mysteryNumber)

// selon le nombre d'essais maxAttempts, on va incrémenter dans attempt

for (let index = 0; index < config.maxAttempts; index++) {
    const numberRandom = randomNumber()
    config.attempt.push(numberRandom)
}
console.log(config.attempt);

// on va comparer pour chaque attempt avec le numéro mistère (si c'est gagnant) et indiquer lorsqu'il n'est pas gagnant si c'est + OU -

config.attempt.forEach((number,index)=>{
    if (number < mysteryNumber){
        console.log('+')   
    }
    if (number > mysteryNumber){
        console.log('-')
    }
    if (number === mysteryNumber){
        console.log(`bravo, le numéro mistère était ${mysteryNumber}, vous avez réussi en ${index + 1} essai(s)`)
    

}})

// si on gagne on affiche le numéro mistère, et l'on affiche le nombre d'essais. dans le cas contraire, afficher quel numéro mistère était gagnant



// fonction
function randomNumber(){
    const mysteryNumber = Math.floor(Math.random() * (config.mysteryNumber[1] - config.mysteryNumber[0] + 1)) + config.mysteryNumber[0];
    //console.log(`random number`, misteryNumber)
    return mysteryNumber
}