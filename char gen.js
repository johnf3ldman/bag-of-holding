var app1 = ["aquiline", "athletic", "barrel-chested", "boney", "brawny", "brutish", "bullnecked", "chisled", "coltish", "corpulent", "craggy", "delicate", "furrowed", 
"gaunt", "gorgeous", "grizzled", "haggard", "handsome", "hideous", "lanky", "pudgy", "ripped", "rosy", "scrawny", "sinewy", "slender", "slumped", "solid", "square-jawed", 
"statuesque", "towering", "trim", "weathered", "willowy", "wiry", "wrinkled"];

var phys1 = ["acid scars", "battle scars", "birthmark", "braided hair", "brand mark", "broken nose", "bronze skinned", "burn scars", "bushy eyebrows", "curly hair",
"dark skinned", "dreadlocks", "exotic accent", "flogging scars", "freckles", "gold tooth", "hoarse voice", "huge beard", "long hair", "matted hair", "missing ear",
"missing teeth", "mustache", "muttonchops", "nine fingers", "oiled hair", "one-eyed", "pale skinned", "piercings", "ritual scars", "sallow skin", "shaved head",
"sunburned", "tangled hair", "tattoos", "topknot"];

var clothing = ["antique", "battle-torn", "bedraggled", "blood-stained", "ceremonial", "dated", "decaying", "eccentric", "elegant", "embroidered", "exotic", "fashionable",
"flamboyant", "food-stained", "formal", "frayed", "frumpy", "garish", "grimy", "haute couture", "lacey", "livery", "mud-stained", "ostentatious", "oversized", "patched", "patterned", "perfumed",
"practical", "rumpled", "sigils", "singed", "tasteless", "undersized", "wine-stained", "worn out"];

var pers1 = ["bitter", "brave", "cautious", "chipper", "contrary", "cowardly", "cunning", "driven", "entitled", "gregarious", "grumpy", "heartless", "honor-bound", "hotheaded",
"inquisitive", "irascible", "jolly", "know-it-all", "lazy", "loyal", "menacing", "mopey", "nervous", "protective", "righteous", "rude", "sarcastic", "savage", "scheming",
"serene", "spacey", "stoic", "stubborn", "stuck-up", "suspicious", "wisecracking"];

var mannerisms = ["anecdotes", "breathy", "chuckles", "clipped", "cryptic", "deep voice", "drawl", "enunciates", "flowery speech", "gravelly voice", "highly formal", "hypnotic",
"interrupts", "laconic", "laughs", "long pauses", "melodious", "monotone", "mumbles", "narrates", "overly casual", "quaint sayings", "rambles", "random facts", "rapid-fire", "rhyming",
"robotic", "slow speech", "speechifies", "squeaky", "street slang", "stutters", "talks to self", "trails off", "very loud", "whispers"];

var secrets = ["addicted", "artificial", "assassin", "bankrupt", "beholden", "counterspy", "cultist", "demigod", "evil lineage", "exile", "fence", "fugitive", "ghost", "has a child",
"heretic", "high born", "huge fortune", "illusion", "insurrectionist", "low born", "married", "mind-controlled", "misfortune", "monster hunter", "non-human", "NPC", "polygamist",
"protects relic", "scandalous birth", "secret police", "serial killer", "smuggler", "spy", "time traveler", "transformed", "war criminal"];

var reputation = ["ambitious", "authoritative", "boor", "borrower", "celebrity", "charitable", "cheat", "dangerous", "entertainer", "gossip", "hardworking", "holy", "honest", 
"hypochondriac", "idiot", "influential", "layabout", "leader", "misanthrope", "miser", "neighborly", "nutjob", "obnoxious", "overeducated", "partier", "pious", "proper", 
"prophet of doom", "repulsive", "respected", "riffraff", "scandalous", "slime ball", "terrifying", "weirdo", "wise"];

var relationships = ["adviser", "blackmailer", "business partner", "buyer", "captor", "client", "confidant", "debtor", "disciple", "guardian", "henchman", "idol", "informant",
"master", "mentor", "nemesis", "offspring", "parent", "patron", "political rival", "prisoner", "protege", "quarry", "right hand", "romantic rival", "servant", "sibling", "social rival",
"spouse", "stalker", "suitor", "supplicant", "supplier", "sweetheart", "unrequited love"];

var factions = ["art movement", "beggar's guild", "black market", "brotherhood", "city guard", "conspiracy", "craft guild", "crime family", "dark cult", "explorer's club", 
"free company", "gourmand club", "heist crew", "heretical sect", "high council", "hired killers", "local militia", "national church", "noble house", "outlander clan", 
"outlaw gang", "political party", "religious order", "religious sect", "resistance", "royal army", "royal house", "scholar's circle", "secret society", "spy network", 
"street artists", "street gang", "street musicians", "theater troupe", "trade company"];

var factionTraits = ["bankrupt", "bureaucratic", "charitable", "confused", "connected",  "corrupt", "decadent", "decaying", "delusional", "divided", "dwindling", "efficient",
"esoteric", "expanding", "hunted", "incompetent", "incorruptible", "insane", "insular", "manipulative", "martial", "personality", "pious", "popular", "righteous", "ruthless",
"secret", "subversive", "suppressed", "threatened", "thriving", "unpopular", "up-and-coming", "wealthy", "well-prepared", "xenophobic"];

var tacticalBuildingFeatures = ["animal nests", "balconies", "basement access", "brightly lit", "broken furniture", "broken glass", "cabinets", "carpeted floors", "chandeliers", 
"crawlspaces", "drain pipes", "dumbwaiters", "echoing marble", "hanging chains", "huge fireplace", "narrow ledges", "open windows", "ornate weapons", "overgrown", "patrols", 
"piles of trash", "pillars", "rotting ceiling", "rotting floors", "rotting walls", "screens", "servant passages", "sewer access", "shadowy alcoves", "skylights", "spyholes", 
"staircases", "tall bookshelves", "unlit", "watchdogs", "window drapes"];

var factionGoals = ["advise leader", "avoid detection", "awaken being", "collect artifacts", "construct base", "control faction", "control politics", "create artifact",
"create monster", "defeat faction", "defend borders", "defend leader", "destroy artifacts", "destroy being", "destroy villain", "enforce law", "enrich members", "entertain", 
"exchange goods", "hear rumors", "indulge tastes", "infiltrate faction", "map the wild", "overthrow order", "preserve lineage", "preserve lore", "produce goods", "promote arts", 
"promote craft", "purge traitors", "sell services", "share knowledge", "spread beliefs", "summon evil", "survive", "transport goods"];

var innAdj = ["Bellowing", "Blazing", "Bleak", "Blessed", "Bloody", "Crimson", "Cunning", "Copper", "Dancing", "Dead", "Drunken", "Flying", "Ghastly", "Golden", "Helpful", "Hideous",
"Howling", "Hungry", "Moldy", "Muttering", "Nimble", "Oozing", "Petrified", "Prancing", "Romantic", "Salty", "Singing", "Shivering", "Shrieking", "Silver", "Smoking", "Thirsty",
"Wicked", "Tipsy", "Whistling", "Wanton"];

var innNoun = ["Axe", "Barrel", "Bear", "Bell", "Boot", "Bowl", "Bucket", "Candle", "Cock", "Cow", "Dragon", "Egg", "Elephant", "Flea", "Fork", "Giant", "Griffin", "Hart",
"Hog", "Hound", "Lamb", "Lion", "Mackerel", "Maid", "Monk", "Moon", "Pipe", "Prince", "Rat", "Skull", "Spoon", "Star", "Swan", "Sword", "Whale", "Wife"];

var miscItem = ["bowl", "brass bell", "brooch", "carved figurine", "cup", "deck of cards", "drawing", "foreign coin", "game piece", "glass eye", "glass jar", "hair comb",
"handkerchief", "hinged box", "hourglass", "human tooth", "hunting horn", "loaded dice", "long fork", "numbered key", "oil lamp", "old doll", "paint pot", "pencil", "purse", "quill pen",
"salve", "scissors", "scroll", "sealed letter", "sewing needle", "shaving razor", "silver button", "skull", "tobacco pipe", "wine bottle"];

var weaponItem = ["arming sword", "backsword", "battleaxe", "blowpipe", "claymore", "club", "crossbow", "cutlass", "dagger", "flail", "flanged mace", "glaive", "halberd", "hammer", "hatchet",
"horsebow", "hunting knife", "lance", "longbow", "longsword", "mace", "maul", "morningstar", "pike", "scimitar", "shortbow", "sickle", "sling", "spear", "staff", "stake", "stiletto", "throwing axe",
"warhammer", "warpick", "whip"];

var wornItem = ["belt", "blouse", "boots", "bracelet", "breastplate", "brigandine", "cincture", "cloak", "coat", "dress", "earing", "eyepatch", "gauntlets", "glove", "gown", "hat", "helmet",
"hose", "leather armor", "locket", "mail shirt", "mask", "necklace", "padded armor", "plate mail", "ring", "robe", "sandals", "scarf", "shirt", "shoes", "skirt", "slippers", "socks", 
"trousers", "veil"];

var physEffects = ["animating", "attracting", "binding", "blossoming", "consuming", "creeping", "crushing", "diminishing", "dividing", "duplicating", "enveloping", "expanding", "fusing",
"grasping", "hastening", "hindering", "illuminating", "imprisoning", "levitating", "opening", "petrifying", "phasing", "piercing", "pursuing", "reflecting", "regenerating", "rending",
"repelling", "resurrecting", "screaming", "sealing", "shapeshifting", "shielding", "spawning", "transmuting", "transporting"];

var physElements = ["acid", "amber", "bark", "blood", "bone", "brine", "clay", "crow", "crystal", "ember", "flesh", "fungus", "glass", "honey", "ice", "insect", "wood", "lava", "moss",
"obsidian", "oil", "poison", "rat", "salt", "sand", "sap", "serpent", "slime", "stone", "tar", "thorn", "vine", "water", "wine", "wood", "worm"];

var physForms = ["altar", "armor", "arrow", "beast", "blade", "cauldron", "chain", "chariot", "claw", "cloak", "colossus", "crown", "elemental", "eye", "fountain", "gate", "golem", "hammer",
"horn", "key", "mask", "monolith", "pit", "prison", "sentinel", "servant", "shield", "spear", "steed", "swarm", "tentacle", "throne", "torch", "trap", "wall", "web"];

var ethForms = ["aura", "beacon", "beam", "blast", "blob", "bolt", "bubble", "call", "cascade", "circle", "cloud", "coil", "cone", "cube", "dance", "disk", "field", "form", "gaze", "loop",
"moment", "nexus", "portal", "pulse", "pyramid", "ray", "shard", "sphere", "spray", "storm", "swarm", "torrent", "touch", "vortex", "wave", "word"];

var ethEffects = ["avenging", "banishing", "bewildering", "blinding", "charming", "communicating", "compelling", "concealing", "deafening", "deceiving", "deciphering", "disguising", "dispelling",
"emboldening", "encoding", "energizing", "enlightening", "enraging", "excruciating", "foreseeing", "intoxicating", "maddening", "mesmerizing", "mindreading", "nullifying", "paralyzing", "revealing",
"revolting", "scrying", "silencing", "soothing", "summoning", "terrifying", "warding", "wearying", "withering"];

var ethElements = ["ash", "chaos", "distortion", "dream", "dust", "echo", "ectoplasm", "fire", "fog", "ghost", "harmony", "heat", "light", "lightning", "memory", "mind", "mutation",
"negation", "plague", "plasma", "probability", "rain", "rot", "shadow", "smoke", "snow", "soul", "star", "stasis", "steam", "thunder", "time", "void", "warp", "whisper", "wind"];

//console.log(app1.length); Use this to find length of the array
//console.log(phys1.length);
//console.log(secrets.length);

function roll() {
    numRoll = Math.floor(Math.random() * 36); // returns a random integer from 0 to 35
    return numRoll;   
}
console.log("Appearance = " + app1[roll()]);
console.log("Physical Details = " + phys1[roll()]);
console.log("Clothing = " + clothing[roll()]);
console.log("Personality = " + pers1[roll()]);
console.log("Mannerisms = " + mannerisms[roll()]);
console.log("Secrets = " + secrets[roll()]);
console.log("Reputation = " + reputation[roll()]);
console.log("Relationships = " + relationships[roll()]);
console.log("Factions = " + factions[roll()]);
console.log("Faction Traits = " + factionTraits[roll()]);
console.log("Faction Goals = " + factionGoals[roll()]);
console.log("Tactical Building Features = " + tacticalBuildingFeatures[roll()]);
console.log("Inn Name = The " + innAdj[roll()] + " " + innNoun[roll()]);
console.log("Inn Name = The " + innNoun[roll()] + " & " + innNoun[roll()]);
console.log("Treasure & Equipment = " + miscItem[roll()] + ", " + wornItem[roll()]);
console.log("Weapon = " + weaponItem[roll()]);


//begin spell generation
function spellRoll() {
    numRollX = Math.floor((Math.random()* 6) + 1);
    numRollY = Math.floor((Math.random()* 6) + 1);
    if (numRollX <= 3 && numRollY == 1) {
        console.log("Magic Spell = " + physEffects[roll()] + " " + physForms[roll()]);
    } else if (numRollX <= 3 && numRollY == 2) {
        console.log("Magic Spell = " + physEffects[roll()] + " " + ethForms[roll()]);
    } else if (numRollX <= 3 && numRollY == 3) {
        console.log("Magic Spell = " + ethEffects[roll()] + " " + physForms[roll()]);
    } else if (numRollX <= 3 && numRollY == 4) {
        console.log("Magic Spell = " + ethEffects[roll()] + " " + ethForms[roll()]);
    } else if (numRollX <= 3 && numRollY == 5) {
        console.log("Magic Spell = " + physElements[roll()] + " " + physForms[roll()]);
    } else if (numRollX <= 3 && numRollY == 6) {
        console.log("Magic Spell = " + physElements[roll()] + " " + ethForms[roll()]);
    } else if (numRollX >= 4 && numRollY == 1) {
        console.log("Magic Spell = " + ethElements[roll()] + " " + physForms[roll()]);
    } else if (numRollX >= 4 && numRollY == 2) {
        console.log("Magic Spell = " + ethElements[roll()] + " " + ethForms[roll()]);
    } else if (numRollX >= 4 && numRollY == 3) {
        console.log("Magic Spell = " + physEffects[roll()] + " " + physElements[roll()]);
    } else if (numRollX >= 4 && numRollY == 4) {
        console.log("Magic Spell = " + ethElements[roll()] + " " + ethElements[roll()]);
    } else if (numRollX >= 4 && numRollY == 5) {
        console.log("Magic Spell = " + ethEffects[roll()] + " " + physElements[roll()]);
    } else if (numRollX >= 4 && numRollY == 6) {
        console.log("Magic Spell = " + ethEffects[roll()] + " " + ethElements[roll()]);
    }
}
spellRoll();
console.log("\n");
//end of spell generation

//begin PC stat generation
function statRoll() {
    total = 0;
    bonus = "";
    penalty = "";
        for (i = 0 ; i < 3 ; i++) {
        numRoll = Math.floor((Math.random()* 6) + 1);
        total += numRoll;
       }
       function modifier() {
           bonus ="";
           penalty ="";
           if (total >= 15) {
               bonus = " (+1)";
           } else if (total <= 6) {
               penalty = " (-1)";
           }
       }
       modifier();
    return total;
    }
console.log("PC Stats");
console.log("Str = " + statRoll() + bonus + penalty);
console.log("Int = " + statRoll() + bonus + penalty);
console.log("Wis = " + statRoll() + bonus + penalty);
console.log("Dex = " + statRoll() + bonus + penalty);
console.log("Con = " + statRoll() + bonus + penalty);
console.log("Chr = " + statRoll() + bonus + penalty);
//end PC stat generation



