var TAROTSOL = {
    // Number of cards in a tarot deck.  
    deck_size : 78, 
    tarot_key : {
        0  : {name: "The Fool", number: 0, suit: "Trump", klondike_color: "wild"},
        1  : {name: "The Magician", number: 1, suit: "Trump", klondike_color: "wild"},
        2  : {name: "The High Priestess", number: 2, suit: "Trump", klondike_color: "wild"},
        3  : {name: "The Empress", number: 3, suit: "Trump", klondike_color: "wild"},
        4  : {name: "The Emperor", number: 4, suit: "Trump", klondike_color: "wild"},
        5  : {name: "The Hierophant", number: 5, suit: "Trump", klondike_color: "wild"},
        6  : {name: "The Lovers", number: 6, suit: "Trump", klondike_color: "wild"},
        7  : {name: "The Chariot", number: 7, suit: "Trump", klondike_color: "wild"},
        8  : {name: "Strength", number: 8, suit: "Trump", klondike_color: "wild"},
        9  : {name: "The Hermit", number: 9, suit: "Trump", klondike_color: "wild"},
        10 : {name: "The Wheel of Fortune", number: 10, suit: "Trump", klondike_color: "wild"},
        11 : {name: "Justice", number: 2, suit: "Trump", klondike_color: "wild"},
        12 : {name: "The Hanged Man", number: 3, suit: "Trump", klondike_color: "wild"},
        13 : {name: "Death", number: 4, suit: "Trump", klondike_color: "wild"},
        14 : {name: "Temperance", number: 5, suit: "Trump", klondike_color: "wild"},
        15 : {name: "The Devil", number: 6, suit: "Trump", klondike_color: "wild"},
        16 : {name: "The Tower", number: 7, suit: "Trump", klondike_color: "wild"},
        17 : {name: "The Star", number: 8, suit: "Trump", klondike_color: "wild"},
        18 : {name: "The Moon", number: 9, suit: "Trump", klondike_color: "wild"},
        19 : {name: "The Sun", number: 1, suit: "Trump", klondike_color: "wild"},
        20 : {name: "Judgment", number: 2, suit: "Trump", klondike_color: "wild"},
        21 : {name: "The World", number: 3, suit: "Trump", klondike_color: "wild"},
        22 : {name: "Ace of Wands", number: 1, suit: "Wands", klondike_color: "black"},
        23 : {name: "", number: 2, suit: "Wands", klondike_color: "black"},
        24 : {name: "", number: 3, suit: "Wands", klondike_color: "black"},
        25 : {name: "", number: 4, suit: "Wands", klondike_color: "black"},
        26 : {name: "", number: 5, suit: "Wands", klondike_color: "black"},
        27 : {name: "", number: 6, suit: "Wands", klondike_color: "black"},
        28 : {name: "", number: 7, suit: "Wands", klondike_color: "black"},
        29 : {name: "", number: 8, suit: "Wands", klondike_color: "black"},
        30 : {name: "", number: 9, suit: "Wands", klondike_color: "black"},
        31 : {name: "", number: 1, suit: "Wands", klondike_color: "black"},
        32 : {name: "Page of Wands", number: 11, suit: "Wands", klondike_color: "black"},
        33 : {name: "Knight of Wands", number: 12, suit: "Wands", klondike_color: "black"},
        34 : {name: "Queen of Wands", number: 13, suit: "Wands", klondike_color: "black"},
        35 : {name: "King of Wands", number: 14, suit: "Wands", klondike_color: "black"},
        36 : {name: "Ace of Cups", number: 1, suit: "Cups", klondike_color: "red"},
        37 : {name: "", number: 2, suit: "Cups", klondike_color: "red"},
        38 : {name: "", number: 3, suit: "Cups", klondike_color: "red"},
        39 : {name: "", number: 4, suit: "Cups", klondike_color: "red"},
        40 : {name: "", number: 5, suit: "Cups", klondike_color: "red"},
        41 : {name: "", number: 6, suit: "Cups", klondike_color: "red"},
        42 : {name: "", number: 7, suit: "Cups", klondike_color: "red"},
        43 : {name: "", number: 8, suit: "Cups", klondike_color: "red"},
        44 : {name: "", number: 9, suit: "Cups", klondike_color: "red"},
        45 : {name: "", number: 10, suit: "Cups", klondike_color: "red"},
        46 : {name: "Page of Cups", number: 11, suit: "Cups", klondike_color: "red"},
        47 : {name: "Knight of Cups", number: 12, suit: "Cups", klondike_color: "red"},
        48 : {name: "Queen of Cups", number: 13, suit: "Cups", klondike_color: "red"},
        49 : {name: "King of Cups", number: 14, suit: "Cups", klondike_color: "red"},
        50 : {name: "Ace of Swords", number: 1, suit: "Swords", klondike_color: "black"},
        51 : {name: "", number: 2, suit: "Swords", klondike_color: "black"},
        52 : {name: "", number: 3, suit: "Swords", klondike_color: "black"},
        53 : {name: "", number: 4, suit: "Swords", klondike_color: "black"},
        54 : {name: "", number: 5, suit: "Swords", klondike_color: "black"},
        55 : {name: "", number: 6, suit: "Swords", klondike_color: "black"},
        56 : {name: "", number: 7, suit: "Swords", klondike_color: "black"},
        57 : {name: "", number: 8, suit: "Swords", klondike_color: "black"},
        58 : {name: "", number: 9, suit: "Swords", klondike_color: "black"},
        59 : {name: "", number: 10, suit: "Swords", klondike_color: "black"},
        60 : {name: "Page of Swords", number: 11, suit: "Swords", klondike_color: "black"},
        61 : {name: "Knight of Swords", number: 12, suit: "Swords", klondike_color: "black"},
        62 : {name: "Queen of Swords", number: 13, suit: "Swords", klondike_color: "black"},
        63 : {name: "King of Swords", number: 14, suit: "Swords", klondike_color: "black"},
        64 : {name: "Ace of Disks", number: 1, suit: "Disks", klondike_color: "red"},
        65 : {name: "", number: 2, suit: "Disks", klondike_color: "red"},
        66 : {name: "", number: 3, suit: "Disks", klondike_color: "red"},
        67 : {name: "", number: 4, suit: "Disks", klondike_color: "red"},
        68 : {name: "", number: 5, suit: "Disks", klondike_color: "red"},
        69 : {name: "", number: 6, suit: "Disks", klondike_color: "red"},
        70 : {name: "", number: 7, suit: "Disks", klondike_color: "red"},
        71 : {name: "", number: 8, suit: "Disks", klondike_color: "red"},
        72 : {name: "", number: 9, suit: "Disks", klondike_color: "red"},
        73 : {name: "", number: 10, suit: "Disks", klondike_color: "red"},
        74 : {name: "Page of Disks", number: 11, suit: "Disks", klondike_color: "red"},
        75 : {name: "Knight of Disks", number: 12, suit: "Disks", klondike_color: "red"},
        76 : {name: "Queen of Disks", number: 13, suit: "Disks", klondike_color: "red"},
        77 : {name: "King of Disks", number: 14, suit: "Disks", klondike_color: "red"}},

    // Declare variables for all the different collections of cards we have.
    deck : [],
    stock : [],
    piles : [],
    columns : [],
    waste : []    
};

//Function to give us a fresh pack of cards 
TAROTSOL.deck.reset = function () {
    document.writeln("deck.length: "+TAROTSOL.deck.length+"<br>");
    for (var i = 0; i < TAROTSOL.deck_size; i++) {
        TAROTSOL.deck.push(i);
    }
    document.writeln(TAROTSOL.deck);
    document.writeln("<br>deck.length: "+TAROTSOL.deck.length+"<br>");
};

//Function which randomly pushes cards from the deck into the stock.
TAROTSOL.deck.shuffle = function () {
    var random_card;
    document.writeln("stock.length: "+TAROTSOL.stock.length);
    while(TAROTSOL.deck.length > 0) {
        random_card = Math.floor(Math.random()*(TAROTSOL.deck.length));
        document.writeln("<br>Random card #: "+random_card+" (deck[i] = "+TAROTSOL.deck[random_card]+")");
        TAROTSOL.stock.push(TAROTSOL.deck[random_card]);
        TAROTSOL.deck.splice(random_card,1);    
    };
    document.writeln("<br>stock.length: "+TAROTSOL.stock.length+"<br>"+TAROTSOL.stock);
};

var tarotsolitaire = function()
{
    TAROTSOL.deck.reset();
    TAROTSOL.deck.shuffle();
};
