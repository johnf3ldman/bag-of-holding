//Old School Essentials Character Generator

//begin PC stat generation
function statRoll() {
    total = 0;
    bonus = "";
        for (i = 0 ; i < 3 ; i++) {
        numRoll = Math.floor((Math.random()* 6) + 1);
        total += numRoll;
       }
       function modifier() {
           bonus ="";
           if (total >= 18) {
               bonus = " (+3)";
           } else if (total >= 16 && total <= 17) {
               bonus = " (+2)";
           } else if (total >= 13 && total <= 15) {
               bonus = " (+1)";
           } else if (total >= 9 && total <= 12) {
               bonus = "";
           } else if (total >= 6 && total <= 8) {
               bonus = " (-1)";
           } else if (total >= 4 && total <= 5) {
               bonus = " (-2)";
           } else if (total == 3) {
               bonus = " (-3)";
           }
        }
           modifier();
    return total;
    }

console.log("PC Stats");
console.log("Str = " + statRoll() + bonus);
console.log("Int = " + statRoll() + bonus);
console.log("Wis = " + statRoll() + bonus);
console.log("Dex = " + statRoll() + bonus);
console.log("Con = " + statRoll() + bonus);
console.log("Chr = " + statRoll() + bonus);
//end PC stat generation

//random starting spell for magic-user
var magicLvl1 = ["Charm Person", "Detect Magic", "Floating Disc", "Hold Portal", "Light", "Magic Missile", "Protection from Evil", "Read Languages", "Read Magic", "Shield", "Sleep", "Ventriloquism"];

var clericLvl1 = ["Cure Light Wounds", "Detect Evil", "Detect Magic", "Light", "Protection from Evil", "Purify Food and Water", "Remove Fear", "Resist Cold"];

function spell(spellList) {
    encRoll = Math.floor(Math.random() * (spellList.length)); // returns a random integer from 0 to 35
    spellX = spellList[encRoll];
    return spellX;   
}
console.log("\n");
console.log("1st Level Magic Spell = " + spell(magicLvl1));
console.log("1st Level Cleric Spell = " + spell(clericLvl1));

//starting hit points with a reroll of 1's and 2's
function hitPoints() {
    numRoll = 0;
    numRoll = Math.floor((Math.random()* 6) + 1);
    hp = numRoll;
    return hp;
}



