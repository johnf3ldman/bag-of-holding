//monsters & animals

var aerial = ["albatros", "bat", "beetle", "bird of prey", "butterfly", "condor", "crane", "crow", "dragonfly",
"eagle", "falcon", "firefly", "flamingo", "fly", "flying squirrel", "goose", "gull", "hummingbird", "kingfisher",
"locust", "magpie", "mantis", "mockingbird", "mosquito", "moth", "owl", "parrot", "peacock", "pelican",
"pteranodon", "rooster", "sparrow", "swan", "vulture", "wasp", "woodpecker"];

var terrestrial = ["ant", "ape", "armadillo", "badger", "bear", "boar", "caterpillar", "centipede", "chameleon", "cockroach",
"deer", "elephant", "ferret", "fox", "giraffe", "goat", "horse", "human", "mole", "ostrich", "ox", "porcupne", "rabbit",
"raccoon", "rat", "rhinoceros", "scorpion", "sheep", "slug", "snail", "snake", "spider", "squirrel", "tiger", "wolf", "wolverine"];

var aquatic = ["alligator", "amoeba", "anglerfish", "beaver", "clam", "crab", "dolphin", "eel", "frog", "hippopotamus", "jellyfish",
"leech", "lobster", "manatee", "manta ray", "muskrat", "narwhal", "newt", "octopus", "otter", "penguin", "platypus", "pufferfish",
"salamander", "sea anemone", "sea urchin", "seahorse", "seal", "shark", "shrimp", "squid", "swordfish", "tadpole", "turtle", "walrus", "whale"];

var monFeatures = ["antlers", "beak", "carpace", "claws", "compound eyes", "eye stalks", "fangs", "fins", "fur", "gills", "hooves", "horns",
"legless", "long tongue", "many-eyed", "many-limbed", "mucus", "pincers", "plates", "plumage", "proboscis", "scales", "segments", "shaggy hair",
"shell", "spikes", "spinnerets", "spines", "stinger", "suction cups", "tail", "talons", "tentacles", "trunk", "tusks", "wings"];

function roll() {
    numRoll = Math.floor(Math.random() * 36); // returns a random integer from 0 to 35
    return numRoll;   
}


        function monCombo() {
            x = Math.floor((Math.random()* 12) + 1);
            if (x == 1) {
                    return (aerial[roll()]) }
                else if (x == 2) {
                    return (terrestrial[roll()]) }
                else if (x == 3) {
                    return (aquatic[roll()]) }
                else if (x == 4) {
                    return ((aerial[roll()] + " " + aerial[roll()])) }
                else if (x == 5) {
                    return ((aerial[roll()] + " " + terrestrial[roll()])) }
                else if (x == 6) {
                    return ((aerial[roll()] + " " + aquatic[roll()])) }
                else if (x == 7) {
                    return ((terrestrial[roll()] + " " + terrestrial[roll()])) }
                else if (x == 8) {
                    return ((terrestrial[roll()] + " " + aerial[roll()])) }
                else if (x == 9) {
                    return ((terrestrial[roll()] + " " + aquatic[roll()])) }
                else if (x == 10) {
                    return ((aquatic[roll()] + " " + aquatic[roll()])) }
                else if (x == 11) {
                    return ((aquatic[roll()] + " " + terrestrial[roll()])) }
                else if (x == 12) {
                    return ((aquatic[roll()] + " " + aerial[roll()])) }
                }


console.log("The creature = " + monCombo());

