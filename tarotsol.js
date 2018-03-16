var tarotsol = {
    // Number of cards in a tarot deck.  
    deck_size : 78, 
    // Number of columns in the Klondike spread.
    num_columns : 9,
    // Number of cards to discard. 
    num_discard : 3,
    // Each card's information.
    key : {
        0  : {abbr: "0",    name: "The Fool",           number: 0, suit: "Trump", klondike_color: "wild", revealed: false, pos: "stock"},
        1  : {abbr: "I",    name: "The Magician",       number: 1, suit: "Trump", klondike_color: "wild", revealed: false, pos: "stock"},
        2  : {abbr: "II",   name: "The High Priestess", number: 2, suit: "Trump", klondike_color: "wild", revealed: false, pos: "stock"},
        3  : {abbr: "III",  name: "The Empress",        number: 3, suit: "Trump", klondike_color: "wild", revealed: false, pos: "stock"},
        4  : {abbr: "IV",   name: "The Emperor",        number: 4, suit: "Trump", klondike_color: "wild", revealed: false, pos: "stock"},
        5  : {abbr: "V",    name: "The Hierophant",     number: 5, suit: "Trump", klondike_color: "wild", revealed: false, pos: "stock"},
        6  : {abbr: "VI",   name: "The Lovers",         number: 6, suit: "Trump", klondike_color: "wild", revealed: false, pos: "stock"},
        7  : {abbr: "VII",  name: "The Chariot",        number: 7, suit: "Trump", klondike_color: "wild", revealed: false, pos: "stock"},
        8  : {abbr: "VIII", name: "Strength",           number: 8, suit: "Trump", klondike_color: "wild", revealed: false, pos: "stock"},
        9  : {abbr: "IX",   name: "The Hermit",         number: 9, suit: "Trump", klondike_color: "wild", revealed: false, pos: "stock"},
        10 : {abbr: "X",    name:"The Wheel of Fortune",number: 10,suit: "Trump", klondike_color: "wild", revealed: false, pos: "stock"},
        11 : {abbr: "XI",   name: "Justice",            number: 11,suit: "Trump", klondike_color: "wild", revealed: false, pos: "stock"},
        12 : {abbr: "XII",  name: "The Hanged Man",     number: 12,suit: "Trump", klondike_color: "wild", revealed: false, pos: "stock"},
        13 : {abbr: "XIII", name: "Death",              number: 13,suit: "Trump", klondike_color: "wild", revealed: false, pos: "stock"},
        14 : {abbr: "XIV",  name: "Temperance",         number: 14,suit: "Trump", klondike_color: "wild", revealed: false, pos: "stock"},
        15 : {abbr: "XV",   name: "The Devil",          number: 15,suit: "Trump", klondike_color: "wild", revealed: false, pos: "stock"},
        16 : {abbr: "XVI",  name: "The Tower",          number: 16,suit: "Trump", klondike_color: "wild", revealed: false, pos: "stock"},
        17 : {abbr: "XVII", name: "The Star",           number: 17,suit: "Trump", klondike_color: "wild", revealed: false, pos: "stock"},
        18 : {abbr: "XVIII",name: "The Moon",           number: 18,suit: "Trump", klondike_color: "wild", revealed: false, pos: "stock"},
        19 : {abbr: "XIX",  name: "The Sun",            number: 19,suit: "Trump", klondike_color: "wild", revealed: false, pos: "stock"},
        20 : {abbr: "XX",   name: "Judgment",           number: 20,suit: "Trump", klondike_color: "wild", revealed: false, pos: "stock"},
        21 : {abbr: "XXI",  name: "The World",          number: 21,suit: "Trump", klondike_color: "wild", revealed: false, pos: "stock"},
        22 : {abbr: "Aw",   name: "Ace of Wands",       number: 1, suit: "Wands", klondike_color: "black", revealed: false, pos: "stock"},
        23 : {abbr: "2w",   name: "2 of Wands",         number: 2, suit: "Wands", klondike_color: "black", revealed: false, pos: "stock"},
        24 : {abbr: "3w",   name: "3 of Wands",         number: 3, suit: "Wands", klondike_color: "black", revealed: false, pos: "stock"},
        25 : {abbr: "4w",   name: "4 of Wands",         number: 4, suit: "Wands", klondike_color: "black", revealed: false, pos: "stock"},
        26 : {abbr: "5w",   name: "5 of Wands",         number: 5, suit: "Wands", klondike_color: "black", revealed: false, pos: "stock"},
        27 : {abbr: "6w",   name: "6 of Wands",         number: 6, suit: "Wands", klondike_color: "black", revealed: false, pos: "stock"},
        28 : {abbr: "7w",   name: "7 of Wands",         number: 7, suit: "Wands", klondike_color: "black", revealed: false, pos: "stock"},
        29 : {abbr: "8w",   name: "8 of Wands",         number: 8, suit: "Wands", klondike_color: "black", revealed: false, pos: "stock"},
        30 : {abbr: "9w",   name: "9 of Wands",         number: 9, suit: "Wands", klondike_color: "black", revealed: false, pos: "stock"},
        31 : {abbr: "10w",  name: "10 of Wands",        number: 1, suit: "Wands", klondike_color: "black", revealed: false, pos: "stock"},
        32 : {abbr: "Pw",   name: "Page of Wands",      number: 11,suit: "Wands", klondike_color: "black", revealed: false, pos: "stock"},
        33 : {abbr: "Nw",   name: "Knight of Wands",    number: 12,suit: "Wands", klondike_color: "black", revealed: false, pos: "stock"},
        34 : {abbr: "Qw",   name: "Queen of Wands",     number: 13,suit: "Wands", klondike_color: "black", revealed: false, pos: "stock"},
        35 : {abbr: "Kw",   name: "King of Wands",      number: 14,suit: "Wands", klondike_color: "black", revealed: false, pos: "stock"},
        36 : {abbr: "Ac",   name: "Ace of Cups",        number: 1, suit: "Cups", klondike_color: "red", revealed: false, pos: "stock"},
        37 : {abbr: "2c",   name: "2 of Cups",          number: 2, suit: "Cups", klondike_color: "red", revealed: false, pos: "stock"},
        38 : {abbr: "3c",   name: "3 of Cups",          number: 3, suit: "Cups", klondike_color: "red", revealed: false, pos: "stock"},
        39 : {abbr: "4c",   name: "4 of Cups",          number: 4, suit: "Cups", klondike_color: "red", revealed: false, pos: "stock"},
        40 : {abbr: "5c",   name: "5 of Cups",          number: 5, suit: "Cups", klondike_color: "red", revealed: false, pos: "stock"},
        41 : {abbr: "6c",   name: "6 of Cups",          number: 6, suit: "Cups", klondike_color: "red", revealed: false, pos: "stock"},
        42 : {abbr: "7c",   name: "7 of Cups",          number: 7, suit: "Cups", klondike_color: "red", revealed: false, pos: "stock"},
        43 : {abbr: "8c",   name: "8 of Cups",          number: 8, suit: "Cups", klondike_color: "red", revealed: false, pos: "stock"},
        44 : {abbr: "9c",   name: "9 of Cups",          number: 9, suit: "Cups", klondike_color: "red", revealed: false, pos: "stock"},
        45 : {abbr: "10c",  name: "10 of Cups",         number: 10,suit: "Cups", klondike_color: "red", revealed: false, pos: "stock"},
        46 : {abbr: "Pc",   name: "Page of Cups",       number: 11,suit: "Cups", klondike_color: "red", revealed: false, pos: "stock"},
        47 : {abbr: "Nc",   name: "Knight of Cups",     number: 12,suit: "Cups", klondike_color: "red", revealed: false, pos: "stock"},
        48 : {abbr: "Qc",   name: "Queen of Cups",      number: 13,suit: "Cups", klondike_color: "red", revealed: false, pos: "stock"},
        49 : {abbr: "Kc",   name: "King of Cups",       number: 14,suit: "Cups", klondike_color: "red", revealed: false, pos: "stock"},
        50 : {abbr: "As",   name: "Ace of Swords",      number: 1, suit: "Swords", klondike_color: "black", revealed: false, pos: "stock"},
        51 : {abbr: "2s",   name: "2 of Swords",        number: 2, suit: "Swords", klondike_color: "black", revealed: false, pos: "stock"},
        52 : {abbr: "3s",   name: "3 of Swords",        number: 3, suit: "Swords", klondike_color: "black", revealed: false, pos: "stock"},
        53 : {abbr: "4s",   name: "4 of Swords",        number: 4, suit: "Swords", klondike_color: "black", revealed: false, pos: "stock"},
        54 : {abbr: "5s",   name: "5 of Swords",        number: 5, suit: "Swords", klondike_color: "black", revealed: false, pos: "stock"},
        55 : {abbr: "6s",   name: "6 of Swords",        number: 6, suit: "Swords", klondike_color: "black", revealed: false, pos: "stock"},
        56 : {abbr: "7s",   name: "7 of Swords",        number: 7, suit: "Swords", klondike_color: "black", revealed: false, pos: "stock"},
        57 : {abbr: "8s",   name: "8 of Swords",        number: 8, suit: "Swords", klondike_color: "black", revealed: false, pos: "stock"},
        58 : {abbr: "9s",   name: "9 of Swords",        number: 9, suit: "Swords", klondike_color: "black", revealed: false, pos: "stock"},
        59 : {abbr: "10s",  name: "10 of Swords",       number: 10,suit: "Swords", klondike_color: "black", revealed: false, pos: "stock"},
        60 : {abbr: "Ps",   name: "Page of Swords",     number: 11,suit: "Swords", klondike_color: "black", revealed: false, pos: "stock"},
        61 : {abbr: "Ns",   name: "Knight of Swords",   number: 12,suit: "Swords", klondike_color: "black", revealed: false, pos: "stock"},
        62 : {abbr: "Qs",   name: "Queen of Swords",    number: 13,suit: "Swords", klondike_color: "black", revealed: false, pos: "stock"},
        63 : {abbr: "Ks",   name: "King of Swords",     number: 14,suit: "Swords", klondike_color: "black", revealed: false, pos: "stock"},
        64 : {abbr: "Ap",   name: "Ace of Pentacles",   number: 1, suit: "Pentacles", klondike_color: "red", revealed: false, pos: "stock"},
        65 : {abbr: "2p",   name: "2 of Pentacles",     number: 2, suit: "Pentacles", klondike_color: "red", revealed: false, pos: "stock"},
        66 : {abbr: "3p",   name: "3 of Pentacles",     number: 3, suit: "Pentacles", klondike_color: "red", revealed: false, pos: "stock"},
        67 : {abbr: "4p",   name: "4 of Pentacles",     number: 4, suit: "Pentacles", klondike_color: "red", revealed: false, pos: "stock"},
        68 : {abbr: "5p",   name: "5 of Pentacles",     number: 5, suit: "Pentacles", klondike_color: "red", revealed: false, pos: "stock"},
        69 : {abbr: "6p",   name: "6 of Pentacles",     number: 6, suit: "Pentacles", klondike_color: "red", revealed: false, pos: "stock"},
        70 : {abbr: "7p",   name: "7 of Pentacles",     number: 7, suit: "Pentacles", klondike_color: "red", revealed: false, pos: "stock"},
        71 : {abbr: "8p",   name: "8 of Pentacles",     number: 8, suit: "Pentacles", klondike_color: "red", revealed: false, pos: "stock"},
        72 : {abbr: "9p",   name: "9 of Pentacles",     number: 9, suit: "Pentacles", klondike_color: "red", revealed: false, pos: "stock"},
        73 : {abbr: "10p",  name: "10 of Pentacles",    number: 10,suit: "Pentacles", klondike_color: "red", revealed: false, pos: "stock"},
        74 : {abbr: "Pp",   name: "Page of Pentacles",  number: 11,suit: "Pentacles", klondike_color: "red", revealed: false, pos: "stock"},
        75 : {abbr: "Np",   name: "Knight of Pentacles",number: 12,suit: "Pentacles", klondike_color: "red", revealed: false, pos: "stock"},
        76 : {abbr: "Qp",   name: "Queen of Pentacles", number: 13,suit: "Pentacles", klondike_color: "red", revealed: false, pos: "stock"},
        77 : {abbr: "Kp",   name: "King of Pentacles",  number: 14,suit: "Pentacles", klondike_color: "red", revealed: false, pos: "stock"}},

    // Declare variables for all the different collections of cards we have.
    deck : [],
    stock : [],
    foundations : [],
    columns : [],
    waste : []    
};

// Function to discard cards from the top of the stock to the waste
tarotsol.stock.discard = function (num_cards) {
    var stock_length = tarotsol.stock.length;
    var temp_card = "";
    for (var i = 0; i < num_cards || stock_length <= i; i++) {
        tarotsol.waste.push(temp_card = tarotsol.stock.pop());
        tarotsol.key[temp_card].revealed = true;
        tarotsol.key[temp_card].pos = "waste";
    }
}

// Function to give us a fresh pack of cards 
tarotsol.deck.reset = function () {
    for (var i = 0; i < tarotsol.deck_size; i++) {
        tarotsol.deck.push(i);
    }
};

// Function which randomly pushes cards from the deck into the stock.
tarotsol.deck.shuffle = function () {
    var random_card;
    while (tarotsol.deck.length > 0) {
        random_card = Math.floor(Math.random()*(tarotsol.deck.length));
        tarotsol.stock.push(tarotsol.deck[random_card]);
        tarotsol.deck.splice(random_card,1);    
    };
};

// Function to initialize the Columns
tarotsol.columns.deal = function () {
    
    var temp_card = 0;
    var pos_prefix = "col_";
    var pos = "";

    // Iterate through all columns.
    for (var i = 0; i < tarotsol.num_columns; i++) {
        tarotsol.columns[i] = new Array ();
        pos = pos_prefix + i;
        for (var p = tarotsol.num_columns - i; p > 0; p--)
        {
            tarotsol.columns[i].push(temp_card = tarotsol.stock.pop());
            if (p == 1) {
                tarotsol.key[temp_card].revealed = true;
                tarotsol.key[temp_card].pos = pos;
            }
        }
    }
};