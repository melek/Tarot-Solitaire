var tarotsol = {
    // Number of cards in a tarot deck.  
    deck_size : 78, 
    tarot_key : {
        0  : {abbr: "0",    name: "The Fool",           number: 0, suit: "Trump", klondike_color: "wild", revealed: false},
        1  : {abbr: "I",    name: "The Magician",       number: 1, suit: "Trump", klondike_color: "wild", revealed: false},
        2  : {abbr: "II",   name: "The High Priestess", number: 2, suit: "Trump", klondike_color: "wild", revealed: false},
        3  : {abbr: "III",  name: "The Empress",        number: 3, suit: "Trump", klondike_color: "wild", revealed: false},
        4  : {abbr: "IV",   name: "The Emperor",        number: 4, suit: "Trump", klondike_color: "wild", revealed: false},
        5  : {abbr: "V",    name: "The Hierophant",     number: 5, suit: "Trump", klondike_color: "wild", revealed: false},
        6  : {abbr: "VI",   name: "The Lovers",         number: 6, suit: "Trump", klondike_color: "wild", revealed: false},
        7  : {abbr: "VII",  name: "The Chariot",        number: 7, suit: "Trump", klondike_color: "wild", revealed: false},
        8  : {abbr: "VIII", name: "Strength",           number: 8, suit: "Trump", klondike_color: "wild", revealed: false},
        9  : {abbr: "IX",   name: "The Hermit",         number: 9, suit: "Trump", klondike_color: "wild", revealed: false},
        10 : {abbr: "X",    name:"The Wheel of Fortune",number: 10,suit: "Trump", klondike_color: "wild", revealed: false},
        11 : {abbr: "XI",   name: "Justice",            number: 2, suit: "Trump", klondike_color: "wild", revealed: false},
        12 : {abbr: "XII",  name: "The Hanged Man",     number: 3, suit: "Trump", klondike_color: "wild", revealed: false},
        13 : {abbr: "XIII", name: "Death",              number: 4, suit: "Trump", klondike_color: "wild", revealed: false},
        14 : {abbr: "XIV",  name: "Temperance",         number: 5, suit: "Trump", klondike_color: "wild", revealed: false},
        15 : {abbr: "XV",   name: "The Devil",          number: 6, suit: "Trump", klondike_color: "wild", revealed: false},
        16 : {abbr: "XVI",  name: "The Tower",          number: 7, suit: "Trump", klondike_color: "wild", revealed: false},
        17 : {abbr: "XVII", name: "The Star",           number: 8, suit: "Trump", klondike_color: "wild", revealed: false},
        18 : {abbr: "XVIII",name: "The Moon",           number: 9, suit: "Trump", klondike_color: "wild", revealed: false},
        19 : {abbr: "XIX",  name: "The Sun",            number: 1, suit: "Trump", klondike_color: "wild", revealed: false},
        20 : {abbr: "XX",   name: "Judgment",           number: 2, suit: "Trump", klondike_color: "wild", revealed: false},
        21 : {abbr: "XXI",  name: "The World",          number: 3, suit: "Trump", klondike_color: "wild", revealed: false},
        22 : {abbr: "Aw",   name: "Ace of Wands",       number: 1, suit: "Wands", klondike_color: "black", revealed: false},
        23 : {abbr: "2w",   name: "2 of Wands",         number: 2, suit: "Wands", klondike_color: "black", revealed: false},
        24 : {abbr: "3w",   name: "3 of Wands",         number: 3, suit: "Wands", klondike_color: "black", revealed: false},
        25 : {abbr: "4w",   name: "4 of Wands",         number: 4, suit: "Wands", klondike_color: "black", revealed: false},
        26 : {abbr: "5w",   name: "5 of Wands",         number: 5, suit: "Wands", klondike_color: "black", revealed: false},
        27 : {abbr: "6w",   name: "6 of Wands",         number: 6, suit: "Wands", klondike_color: "black", revealed: false},
        28 : {abbr: "7w",   name: "7 of Wands",         number: 7, suit: "Wands", klondike_color: "black", revealed: false},
        29 : {abbr: "8w",   name: "8 of Wands",         number: 8, suit: "Wands", klondike_color: "black", revealed: false},
        30 : {abbr: "9w",   name: "9 of Wands",         number: 9, suit: "Wands", klondike_color: "black", revealed: false},
        31 : {abbr: "10w",  name: "10 of Wands",        number: 1, suit: "Wands", klondike_color: "black", revealed: false},
        32 : {abbr: "Pw",   name: "Page of Wands",      number: 11,suit: "Wands", klondike_color: "black", revealed: false},
        33 : {abbr: "Nw",   name: "Knight of Wands",    number: 12,suit: "Wands", klondike_color: "black", revealed: false},
        34 : {abbr: "Qw",   name: "Queen of Wands",     number: 13,suit: "Wands", klondike_color: "black", revealed: false},
        35 : {abbr: "Kw",   name: "King of Wands",      number: 14,suit: "Wands", klondike_color: "black", revealed: false},
        36 : {abbr: "Ac",   name: "Ace of Cups",        number: 1, suit: "Cups", klondike_color: "red", revealed: false},
        37 : {abbr: "2c",   name: "2 of Cups",          number: 2, suit: "Cups", klondike_color: "red", revealed: false},
        38 : {abbr: "3c",   name: "3 of Cups",          number: 3, suit: "Cups", klondike_color: "red", revealed: false},
        39 : {abbr: "4c",   name: "4 of Cups",          number: 4, suit: "Cups", klondike_color: "red", revealed: false},
        40 : {abbr: "5c",   name: "5 of Cups",          number: 5, suit: "Cups", klondike_color: "red", revealed: false},
        41 : {abbr: "6c",   name: "6 of Cups",          number: 6, suit: "Cups", klondike_color: "red", revealed: false},
        42 : {abbr: "7c",   name: "7 of Cups",          number: 7, suit: "Cups", klondike_color: "red", revealed: false},
        43 : {abbr: "8c",   name: "8 of Cups",          number: 8, suit: "Cups", klondike_color: "red", revealed: false},
        44 : {abbr: "9c",   name: "9 of Cups",          number: 9, suit: "Cups", klondike_color: "red", revealed: false},
        45 : {abbr: "10c",  name: "10 of Cups",         number: 10,suit: "Cups", klondike_color: "red", revealed: false},
        46 : {abbr: "Pc",   name: "Page of Cups",       number: 11,suit: "Cups", klondike_color: "red", revealed: false},
        47 : {abbr: "Nc",   name: "Knight of Cups",     number: 12,suit: "Cups", klondike_color: "red", revealed: false},
        48 : {abbr: "Qc",   name: "Queen of Cups",      number: 13,suit: "Cups", klondike_color: "red", revealed: false},
        49 : {abbr: "Kc",   name: "King of Cups",       number: 14,suit: "Cups", klondike_color: "red", revealed: false},
        50 : {abbr: "As",   name: "Ace of Swords",      number: 1, suit: "Swords", klondike_color: "black", revealed: false},
        51 : {abbr: "2s",   name: "2 of Swords",        number: 2, suit: "Swords", klondike_color: "black", revealed: false},
        52 : {abbr: "3s",   name: "3 of Swords",        number: 3, suit: "Swords", klondike_color: "black", revealed: false},
        53 : {abbr: "4s",   name: "4 of Swords",        number: 4, suit: "Swords", klondike_color: "black", revealed: false},
        54 : {abbr: "5s",   name: "5 of Swords",        number: 5, suit: "Swords", klondike_color: "black", revealed: false},
        55 : {abbr: "6s",   name: "6 of Swords",        number: 6, suit: "Swords", klondike_color: "black", revealed: false},
        56 : {abbr: "7s",   name: "7 of Swords",        number: 7, suit: "Swords", klondike_color: "black", revealed: false},
        57 : {abbr: "8s",   name: "8 of Swords",        number: 8, suit: "Swords", klondike_color: "black", revealed: false},
        58 : {abbr: "9s",   name: "9 of Swords",        number: 9, suit: "Swords", klondike_color: "black", revealed: false},
        59 : {abbr: "10s",  name: "10 of Swords",       number: 10,suit: "Swords", klondike_color: "black", revealed: false},
        60 : {abbr: "Ps",   name: "Page of Swords",     number: 11,suit: "Swords", klondike_color: "black", revealed: false},
        61 : {abbr: "Ns",   name: "Knight of Swords",   number: 12,suit: "Swords", klondike_color: "black", revealed: false},
        62 : {abbr: "Qs",   name: "Queen of Swords",    number: 13,suit: "Swords", klondike_color: "black", revealed: false},
        63 : {abbr: "Ks",   name: "King of Swords",     number: 14,suit: "Swords", klondike_color: "black", revealed: false},
        64 : {abbr: "Ap",   name: "Ace of Pentacles",   number: 1, suit: "Pentacles", klondike_color: "red", revealed: false},
        65 : {abbr: "2p",   name: "2 of Pentacles",     number: 2, suit: "Pentacles", klondike_color: "red", revealed: false},
        66 : {abbr: "3p",   name: "3 of Pentacles",     number: 3, suit: "Pentacles", klondike_color: "red", revealed: false},
        67 : {abbr: "4p",   name: "4 of Pentacles",     number: 4, suit: "Pentacles", klondike_color: "red", revealed: false},
        68 : {abbr: "5p",   name: "5 of Pentacles",     number: 5, suit: "Pentacles", klondike_color: "red", revealed: false},
        69 : {abbr: "6p",   name: "6 of Pentacles",     number: 6, suit: "Pentacles", klondike_color: "red", revealed: false},
        70 : {abbr: "7p",   name: "7 of Pentacles",     number: 7, suit: "Pentacles", klondike_color: "red", revealed: false},
        71 : {abbr: "8p",   name: "8 of Pentacles",     number: 8, suit: "Pentacles", klondike_color: "red", revealed: false},
        72 : {abbr: "9p",   name: "9 of Pentacles",     number: 9, suit: "Pentacles", klondike_color: "red", revealed: false},
        73 : {abbr: "10p",  name: "10 of Pentacles",    number: 10,suit: "Pentacles", klondike_color: "red", revealed: false},
        74 : {abbr: "Pp",   name: "Page of Pentacles",  number: 11,suit: "Pentacles", klondike_color: "red", revealed: false},
        75 : {abbr: "Np",   name: "Knight of Pentacles",number: 12,suit: "Pentacles", klondike_color: "red", revealed: false},
        76 : {abbr: "Qp",   name: "Queen of Pentacles", number: 13,suit: "Pentacles", klondike_color: "red", revealed: false},
        77 : {abbr: "Kp",   name: "King of Pentacles",  number: 14,suit: "Pentacles", klondike_color: "red", revealed: false}},

    // Declare variables for all the different collections of cards we have.
    deck : [],
    stock : [],
    foundations : [[],[],[],[],[]],
    columns : [],
    waste : []    
};

// Function to discard cards from the top of the stock to the waste
tarotsol.stock.discard = function (num_cards) {
    var stock_length = tarotsol.stock.length;
    var temp_card = "";
    for (var i = 0; i < num_cards || stock_length <= i; i++) {
        tarotsol.waste.push(temp_card = tarotsol.stock.pop());
        tarotsol.tarot_key[temp_card].revealed = true;
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
    var num_columns = 9;
    var temp_card = 0;
    for (var i = 0; i < num_columns; i++) {
        tarotsol.columns[i] = new Array ();
        for (var p = num_columns - i; p > 0; p--)
        {
            tarotsol.columns[i].push(temp_card = tarotsol.stock.pop());
            if (p == 1) {
                tarotsol.tarot_key[temp_card].revealed = true;
            }
        }
    }
};