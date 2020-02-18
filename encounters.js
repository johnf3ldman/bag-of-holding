//function rollDie(min, max) {
//    return Math.floor(Math.random() * (max - min + 1) ) + min;
//  }
//console.log(rollDie(1,100)); //this generates a random number from 1 to 100

//total = rollDie(1,12) + rollDie(1,8); //this adds two random generated numbers
//console.log(total); //and this prints the result

/*function diceRoll() {
    numRollX = Math.floor((Math.random()* 6) + 1);
    numRollY = Math.floor((Math.random()* 6) + 1);
    total = numRollX + numRollY;
    //console.log(total);

    switch(total) {
        case 2:
            console.log("really bad");
            break;
        case 3:
            console.log("bad");
            break;
        case 4:
            console.log("bad");
            break;
        case 5:
            console.log("bad");
            break;
        case 6:
            console.log("neutral");
            break;
        case 7:
            console.log("neutral");
            break;
        case 8:
            console.log("neutral");
            break;
        case 9:
            console.log("good");
            break;
        case 10:
            console.log("good");
            break;
        case 11:
            console.log("good");
            break;
        case 12:
            console.log("really good");
            break;
    }
    
}
diceRoll();
diceRoll();
diceRoll();
diceRoll();
diceRoll();
diceRoll();
diceRoll();
diceRoll();
diceRoll();
diceRoll();
console.log("\n");

setTimeout(function() {
    console.log("Fatbeard")
}, 2000);
setTimeout(function() {
    console.log("RPG")
}, 4000);
setTimeout(function() {
    console.log("is")
}, 6000);
setTimeout(function() {
    console.log("Old")
}, 8000);
setTimeout(function() {
    console.log("School")
}, 10000);
*/
var friendly = ["Aethelwine the Cleric of Silvanus", 
"Woodsman (has helpful info or shortcut), move 2 spaces ahead", 
"Knights of Nye are hunting boar, are friendly and will accompany PCs, move one space",
"Shrine of Silvanus tended by a cleric (gain +1 blessing and move 1 space ahead)",
"helpful 5",
"helpful 6"];

var positive = ["Clear trail, make good progress (move an extra space)", "Find fresh spring (heal 1 hp)", 
"Apple tree with ripe apples (heal 1 hp)", "Better weather and dry conditions (move ahead one space)", 
"Aethelwine's owl guides you (move one space)", "Fresh honey comb falls out of hive in tree (extra rations)"];

var neutral1 = ["Ray of sunlight through trees and cloud of brilliant blue butterflies", "Tree trunks around you are scraped with long claw marks",
"A bluebird sings a hopeful song", "Large footprints (forest ogre)", 
"A misty vapor rises from a dark area to your left (just mist)", "The sound of water rushing ahead"];

var neutral2 = ["Lightning struck tree hollowed out by fire", "Tree filled with red berries (Sacred Rowan tree)",
"A rusty woodsman's axe sticks out of a stump", "Squirrels bark at your approach", "You startle some gamebirds and they fly off",
"A gentle breeze brings the scent of wildflowers"];

var negative = ["Hornet's nest bursts with angry swarm. Random PC save Wis or lose a mundane item", "Loose trail or direction (move back one space)", 
"Robbers come out of the forest, demanding payment, will retreat if attacked, twice party size", "One of the party kicks up a toadstool sending poison spores into the air (Anyone with wood lore can prevent this on an Int save. Otherwise each person in group must make a Con save or be sickened all actions for the rest of day are at disadvantage).",
"black bear looking for honey finds pcs", "Get lost in the forest, move back one space."];

var hostile = ["Flock of crazy JubJub birds", "Bandersnatch on the hunt", "Knights of Nye patrol will be certain that party are bandits (Chr save to convince otherwise)",
 "Witch walks in the forest, mean and evil", "Forest Ogre (grumpy but may just demand something of value)", "The Jabberwocky hunts the party!"];

function roll() {
    numRollX = Math.floor((Math.random()* 6) + 1);
    numRollY = Math.floor(Math.random() * 6); // returns a random integer from 0 to 35
    console.log(numRollX);
    console.log(numRollY);
    if (numRollX == 1) {
        console.log(hostile[numRollY]);
    } else if (numRollX == 2) {
        console.log(negative[numRollY]);
    } else if (numRollX == 3) {
        console.log(neutral1[numRollY]);
    } else if (numRollX == 4) {
        console.log(neutral2[numRollY]);
    } else if (numRollX == 5) {
        console.log(positive[numRollY]);
    } else if (numRollX == 6) {
        console.log(friendly[numRollY]);
        }
    }  
roll();
