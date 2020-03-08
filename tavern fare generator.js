//tavern fare generator

var prep = ["roasted", "stewed", "fried", "soup of", "boiled", "steamed", "sauteed", "cream of", "baked", "pie of", "smoked", "pickled", "poached"];

var main = ["sow's belly", "rabbit", "mutton", "blood sausage", "mincemeat", "forcemeat", "duck", "goose", "trout", "perch", "beef", "calf's liver", "beef liver", "pork liver", "chicken",
"grouse", "game hen", "turkey", "goose", "veal", "kidney", "groundhog", "sweetbread", "eel", "turtle", "owl eggs", "eggs", "cured ham", "pork", "trotters (pig's feet)", "lamb", "pig's brains",
"calf's brains", "catfish", "carp", "heron", "pigeon", "blackbird", "tripe", "smelt"];

var side = ["onions", "turnips", "potatoes", "oats", "groats", "leeks", "sauerkraut", "carrots", "peas", "beans", "wild rice", "wild mushrooms", "apples", "pears", "celery", "green peppers",
"hot peppers", "noodles", "dumplings", "radishes", "sweet potatoes", "cabbage", "tomatoes", "green onions", "parsnips", "wild greens", "beets", "spinach"];

var garnish = ["garlic", "thyme", "rosemary", "fennel", "sage", "parsley", "lemon grass", "marjoram", "walnuts", "chestnuts", "pecans", "mint", "basil", "dill", "ginger", "mustard", "paprika"];

var bread = ["brown", "rye", "wheat", "oat", "beer", "flax seed", "poppy seed", "flat", "sour dough", "pumpkin", "zucchini", "turnip", "carrot", "hot pepper", "acorn"];

var beverage = ["small beer", "ale", "wine", "mead", "tea", "milk", "goat's milk", "cider"];

var strongDrink = ["Dwarven Stout", "Elvish Brandy", "King's Ale", "Shoveler's Lament", "Early In", "Dragon's Breath", "Rotgut", "Bramble Wine", "Barrel Rider Ale"];

var cheese = ["hard", "soft", "ripe", "mild", "semi soft", "curd", "marbled", "stinky", "herbed", "goat"];

var commonFare = ["peas porridge", "wheat gruel", "boiled turnips", "boiled potatoes", "bread and cheese", "stewed tomatoes", "broiled onions", "fried cabbage"];

var entertainment = ["story teller", "singer", "lute player", "flute player", "jester", "juggler", "dancer", "poet", "tournament of arm wrestling", "gambler's night", "knife throwing constest"];

var cleanliness = ["a pig sty", "dirty", "poorly kept", "dingy", "clean", "clean", "clean", "well kept", "spotless"]; //I added three cleans to increase chances of clean occurring

var innAdj = ["Bellowing", "Blazing", "Bleak", "Blessed", "Bloody", "Crimson", "Cunning", "Copper", "Dancing", "Dead", "Drunken", "Flying", "Ghastly", "Golden", "Helpful", "Hideous",
"Howling", "Hungry", "Moldy", "Muttering", "Nimble", "Oozing", "Petrified", "Prancing", "Romantic", "Salty", "Singing", "Shivering", "Shrieking", "Silver", "Smoking", "Thirsty",
"Wicked", "Tipsy", "Whistling", "Wanton"];//this set of arrays came from Ben Milton's Maze Rats Rpg

var innNoun = ["Axe", "Barrel", "Bear", "Bell", "Boot", "Bowl", "Bucket", "Candle", "Cock", "Cow", "Dragon", "Egg", "Elephant", "Flea", "Fork", "Giant", "Griffin", "Hart",
"Hog", "Hound", "Lamb", "Lion", "Mackerel", "Maid", "Monk", "Moon", "Pipe", "Prince", "Rat", "Skull", "Spoon", "Star", "Swan", "Sword", "Whale", "Wife"];//this set of arrays came from Ben Milton's Maze Rats Rpg


function cook(test) {
    roll = Math.floor(Math.random() * (test.length));
    result = test[roll];
    return result;   
}
//removing an element from the strongDrink array using splice
function test(food) {
    roll = Math.floor(Math.random() * (food.length));
    foodX = food[roll];
    var x = food.splice(roll,1);
    return foodX;
    };

    switch(Math.floor(Math.random() * 2) + 1) {
        case 1:
            console.log("Welcome to the " + cook(innAdj) + " " + cook(innNoun) + "!");
            break;
        default:
            console.log("Welcome to the " + test(innNoun) + " & " + test(innNoun) + "!");
    }

console.log("Today's Special is " + cook(prep) + " " + cook(main) + " with " + cook(side) + " and " + cook(garnish) + ", served with " + cook(bread) + " bread.");
console.log("Common fare includes " + test(commonFare) + ", " + test(commonFare) + ", and " + test(commonFare) + ".");
console.log("Cheeses include " + test(cheese) + " and " + test(cheese) + " cheese.");
console.log("\n");
console.log("Today's Drinks are " + test(beverage) + " and " + test(beverage));
console.log("Stronger drinks on hand..." + test(strongDrink) + ", " + test(strongDrink) + ", and " + test(strongDrink) + ".");
console.log("The evening's entertainment will be a " + cook(entertainment) + ".");
console.log("\n");

clean = "";
clean = cook(cleanliness);
console.log("This tavern looks to be " + clean + ".");

//this generates 4d4 patrons
var patrons = 0;
var patronsTotal = 0;
for (var i = 0; i < 4; i = i + 1) {
    patrons = (Math.floor(Math.random() * 4) + 1);
    patronsTotal = patronsTotal + patrons;
}
console.log("There are " + patronsTotal + " patrons here.");


/*
//roll 2d6
dice = 0
function twoDice() {
    x = Math.floor((Math.random() * 6) + 1);
    y = Math.floor((Math.random() * 6) + 1);
    sum = x + y;
    return sum;
}
console.log(twoDice());
*/

switch(Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1)) {
    case 2:
        console.log("The patrons appear to be comatose.");
        break;
    case 3:
    case 4:
        console.log("The patrons appear to be relaxed.");
        break;
    case 5:
    case 6:
        console.log("The patrons appear to be talkative.");
        break;
    case 7:
    case 8:
        console.log("The patrons appear to be argumentative.");
        break;
    case 9:
    case 10:
    case 11:
        console.log("The patrons appear to be rowdy.");
        break;
        default:
        console.log("The patrons appear to be fighting!");
}


/*deadly! All diners must make a Con save or suffer serious food poisoning!
spoiled! One random person must make a Con save or suffer food poisoning!
spoiled! One random person must make a Con save or suffer food poisoning!
stale
stale
stale
stale
stale
ok but not great...
ok but not great...
ok but not great...
good
good
good
good
good
excellent
excellent
excellent
memorable!*/