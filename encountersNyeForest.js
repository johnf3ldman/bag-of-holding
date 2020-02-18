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
    numRollX = Math.floor((Math.random()* 6) + 1); //generates number from 1 to 6
    numRollY = Math.floor(Math.random() * 6); //generates number from 0 to 5
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

