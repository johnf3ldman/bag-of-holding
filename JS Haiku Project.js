//JS Haiku Project by John Feldman 2-2020
//Randomly generate a Haiku that follows the pattern of 5-7-5 syllabels w/ 3 parallel lines
var syl1 = ["bird", "cat", "fish", "moon", "pond", "tree"];
var syl2 = ["gliding", "sleeping", "singing", "waiting", "sitting", "quiet"];
var h1;
function writeHaiku() {
h1 = Math.floor(Math.random()*6);
return h1;
};



//making a for loop to console.log words and end when syllabel count reaches 17
/*for(var i = 0; i < 6; i = i + count) {
    count = 0;
    console.log(("a " + syl2[writeHaiku()]) + " " + (syl1[writeHaiku()]));
    count++;
}
*/

//console.log(syl1[writeHaiku()]);

//generate a random number to choose whether syl1 or syl2 is used
//and keep count of syllabels until 1st line = 5
function pickSyl() {
write1 = Math.floor(Math.random()*6);
return write1;
};
countH = 0;
pickSyl();
if (write1 >= 4) {
    console.log(syl1[writeHaiku()]);
    countH++;
} else if (write1 < 4 ) {
    console.log(syl2[writeHaiku()]);
    countH = countH + 2;
}


console.log(countH);





