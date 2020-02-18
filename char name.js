//character name generator
var prefix = ["Os", "Hol", "Mann", "Cor", "Sil", "Ulf", "Wolf", "Bald", "Eald"];
var suffix = ["heim", "wald", "ram", "man", "orn", "wynn", "ring", "ur", "uld"];
function nameGen() {
    numRoll = Math.floor(Math.random()*9);
    numRoll2 = Math.floor(Math.random()*9);
    return prefix[numRoll] + suffix[numRoll2];
}
console.log(nameGen());
