//encountersGarwood
//to reflect the increased danger in the Garwood, array will contain elements in the format of neutral, negative, hostile
var encGarwood = [/*neutral*/ "Lady of Tuan Dur", "Ogre prints (leading away from Tuan Dur)", 
"a lone hell bat dives on the PCs but a blur of winged creatures intercept it and it falls out of the air, dead. Body pierced by three inch long arrows.", 
"a small stone marker carved in ancient Dur marking ancient king's land (King Corraidhín of Tuan Dur)", "black bear foraging for food (reaction roll)", 
"A lone wolf howls mournfully and lopes on.", "Nest of giant wood boring beetles (reaction check)", "Soft glowing blue orbs float in the distance, if the PCs pursue, they float away.", 
"Rainfall dampens the forest", "Loud roar deep in the forest...was it a bear or something else?", "A mighty stag (cursed prince, can't be killed)",
/*negative*/ "A tree root causes random PC to trip (Dex save or sprain ankle). Movement halved and initiative is -1 until get a good night's rest.", 
"Leprechaun attempts to lead PCs away from Tuan Dur", "Leprechaun (invisible) attempts to steal a random item", "Thick brambles tear at random PC causing 1 pt of damage", "Turn around and lost bearings, lose a day of searching.",
"Mount or animal companion injured, movement is half for rest of day", "Flocks of blackbirds fill the forest attacking PCs meal...lose 1 day rations",
/*hostile*/ "Creeper vine lashes out against random PC", "Goblin scouting party", "a cloud of hell bats (d6= 1-3=small, 4-5=medium, 6=large)", "wild boar", 
"Bugbear scouting party", "Cian the Ancient (Leprechaun)", "Giant termite nest d6 termites and d2 winged termites", "Barrow mound with d6, 1-3=zombies, 4-5=ghouls, 6=wight"];

var encNye = [/*friendly*/"Aethelwine the Cleric of Silvanus", "Woodsman (has helpful info or shortcut), move 2 spaces ahead", 
"Knights of Nye are hunting boar, are friendly and will accompany PCs, move one space", "Shrine of Silvanus tended by a cleric (gain +1 blessing and move 1 space ahead)",
"helpful 5", "helpful 6", /*positive*/"Clear trail, make good progress (move an extra space)", "Find fresh spring (heal 1 hp)", 
"Apple tree with ripe apples (heal 1 hp)", "Better weather and dry conditions (move ahead one space)", 
"Aethelwine's owl guides you (move one space)", "Fresh honey comb falls out of hive in tree (extra rations)",
/*neutral*/"Ray of sunlight through trees and cloud of brilliant blue butterflies", "Tree trunks around you are scraped with long claw marks",
"A bluebird sings a hopeful song", "Large footprints (forest ogre)", "A misty vapor rises from a dark area to your left (just mist)", "The sound of water rushing ahead",
"Lightning struck tree hollowed out by fire", "Tree filled with red berries (Sacred Rowan tree)", "A rusty woodsman's axe sticks out of a stump", "Squirrels bark at your approach",
"You startle some gamebirds and they fly off", "A gentle breeze brings the scent of wildflowers", /*negative*/"Hornet's nest bursts with angry swarm. Random PC save Wis or lose a mundane item",
"Loose trail or direction (move back one space)", "Robbers come out of the forest, demanding payment, will retreat if attacked, twice party size", "One of the party kicks up a toadstool sending poison spores into the air (Anyone with wood lore can prevent this on an Int save. Otherwise each person in group must make a Con save or be sickened all actions for the rest of day are at disadvantage).",
"black bear looking for honey finds pcs", "Get lost in the forest, move back one space.", /*hostile*/"Flock of crazy JubJub birds", "Bandersnatch on the hunt", "Knights of Nye patrol will be certain that party are bandits (Chr save to convince otherwise)",
 "Witch walks in the forest, mean and evil", "Forest Ogre (grumpy but may just demand something of value)", "The Jabberwocky hunts the party!"];

 var feyRealm = [
     "a primitive man (neanderthal) alone and wanting to return to his tribe. His name is Og.",
     "a pair of ancient Dur warriors with shield, bronze mail, and bronze sword and spear.",
     "a maiden named Aeylwynn, wants to return to her village, has ESP and can read surface thoughts.",
     "an old man in tattered wizard robes. He cannot speak for his tongue has been taken out by the fey.",
     "a mountain dwarf that smokes a long clay pipe, he's been in the fey realm for a long time.",
     "a regal man looking for his son (the prince, who is cursed to run as a deer). He will reward the PCs with much wealth when he returns to his kingdom.",
     "a crazed cleric, who has lost his faith and has been taunted by the fey.",
     "a child, who is really a changling. Little girl with an evil mind and sharp bite.",
     "a fey swordsman, who will challenge a PC to a duel. The victor must serve the other for 7 years and one day. He will cheat.",
     "a disheveled scholar who will admonish the PCs and run off to report their presence."
    ];


function test(encLocation) {
    encRoll = Math.floor(Math.random() * (encLocation.length)); // returns a random integer from 0 to 35
    encX = encLocation[encRoll];
    return encX;   
}
console.log("The Garwood Forest = " + test(encGarwood));
console.log("\n");
console.log("The Forest of Nye = " + test(encNye));
console.log("\n");
console.log("The Fey Realm = " + test(feyRealm));


//console.log(secrets.length);
//return secrets.length;

