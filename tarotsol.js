var tarotsol = {
    // Number of cards in a tarot deck.  
    deck_size : 78, 
    tarot_key : {
        0  : {abbr: "0", name: "The Fool", number: 0, suit: "Trump", klondike_color: "wild"},
        1  : {abbr: "I", name: "The Magician", number: 1, suit: "Trump", klondike_color: "wild"},
        2  : {abbr: "II", name: "The High Priestess", number: 2, suit: "Trump", klondike_color: "wild"},
        3  : {abbr: "III", name: "The Empress", number: 3, suit: "Trump", klondike_color: "wild"},
        4  : {abbr: "IV", name: "The Emperor", number: 4, suit: "Trump", klondike_color: "wild"},
        5  : {abbr: "V", name: "The Hierophant", number: 5, suit: "Trump", klondike_color: "wild"},
        6  : {abbr: "VI", name: "The Lovers", number: 6, suit: "Trump", klondike_color: "wild"},
        7  : {abbr: "VII", name: "The Chariot", number: 7, suit: "Trump", klondike_color: "wild"},
        8  : {abbr: "VIII", name: "Strength", number: 8, suit: "Trump", klondike_color: "wild"},
        9  : {abbr: "IX", name: "The Hermit", number: 9, suit: "Trump", klondike_color: "wild"},
        10 : {abbr: "X", name: "The Wheel of Fortune", number: 10, suit: "Trump", klondike_color: "wild"},
        11 : {abbr: "XI", name: "Justice", number: 2, suit: "Trump", klondike_color: "wild"},
        12 : {abbr: "XII", name: "The Hanged Man", number: 3, suit: "Trump", klondike_color: "wild"},
        13 : {abbr: "XIII", name: "Death", number: 4, sui4t: "Trump", klondike_color: "wild"},
        14 : {abbr: "XIV", name: "Temperance", number: 5, suit: "Trump", klondike_color: "wild"},
        15 : {abbr: "XV", name: "The Devil", number: 6, suit: "Trump", klondike_color: "wild"},
        16 : {abbr: "XVI", name: "The Tower", number: 7, suit: "Trump", klondike_color: "wild"},
        17 : {abbr: "XVII", name: "The Star", number: 8, suit: "Trump", klondike_color: "wild"},
        18 : {abbr: "XVIII", name: "The Moon", number: 9, suit: "Trump", klondike_color: "wild"},
        19 : {abbr: "XIX", name: "The Sun", number: 1, suit: "Trump", klondike_color: "wild"},
        20 : {abbr: "XX", name: "Judgment", number: 2, suit: "Trump", klondike_color: "wild"},
        21 : {abbr: "XXI", name: "The World", number: 3, suit: "Trump", klondike_color: "wild"},
        22 : {abbr: "Aw", name: "Ace of Wands", number: 1, suit: "Wands", klondike_color: "black"},
        23 : {abbr: "2w", name: "2 of Wands", number: 2, suit: "Wands", klondike_color: "black"},
        24 : {abbr: "3w", name: "3 of Wands", number: 3, suit: "Wands", klondike_color: "black"},
        25 : {abbr: "4w", name: "4 of Wands", number: 4, suit: "Wands", klondike_color: "black"},
        26 : {abbr: "5w", name: "5 of Wands", number: 5, suit: "Wands", klondike_color: "black"},
        27 : {abbr: "6w", name: "6 of Wands", number: 6, suit: "Wands", klondike_color: "black"},
        28 : {abbr: "7w", name: "7 of Wands", number: 7, suit: "Wands", klondike_color: "black"},
        29 : {abbr: "8w", name: "8 of Wands", number: 8, suit: "Wands", klondike_color: "black"},
        30 : {abbr: "9w", name: "9 of Wands", number: 9, suit: "Wands", klondike_color: "black"},
        31 : {abbr: "10w", name: "10 of Wands", number: 1, suit: "Wands", klondike_color: "black"},
        32 : {abbr: "Pw", name: "Page of Wands", number: 11, suit: "Wands", klondike_color: "black"},
        33 : {abbr: "Nw", name: "Knight of Wands", number: 12, suit: "Wands", klondike_color: "black"},
        34 : {abbr: "Qw", name: "Queen of Wands", number: 13, suit: "Wands", klondike_color: "black"},
        35 : {abbr: "Kw", name: "King of Wands", number: 14, suit: "Wands", klondike_color: "black"},
        36 : {abbr: "Ac", name: "Ace of Cups", number: 1, suit: "Cups", klondike_color: "red"},
        37 : {abbr: "2c", name: "2 of Cups", number: 2, suit: "Cups", klondike_color: "red"},
        38 : {abbr: "3c", name: "3 of Cups", number: 3, suit: "Cups", klondike_color: "red"},
        39 : {abbr: "4c", name: "4 of Cups", number: 4, suit: "Cups", klondike_color: "red"},
        40 : {abbr: "5c", name: "5 of Cups", number: 5, suit: "Cups", klondike_color: "red"},
        41 : {abbr: "6c", name: "6 of Cups", number: 6, suit: "Cups", klondike_color: "red"},
        42 : {abbr: "7c", name: "7 of Cups", number: 7, suit: "Cups", klondike_color: "red"},
        43 : {abbr: "8c", name: "8 of Cups", number: 8, suit: "Cups", klondike_color: "red"},
        44 : {abbr: "9c", name: "9 of Cups", number: 9, suit: "Cups", klondike_color: "red"},
        45 : {abbr: "10c", name: "10 of Cups", number: 10, suit: "Cups", klondike_color: "red"},
        46 : {abbr: "Pc", name: "Page of Cups", number: 11, suit: "Cups", klondike_color: "red"},
        47 : {abbr: "Nc", name: "Knight of Cups", number: 12, suit: "Cups", klondike_color: "red"},
        48 : {abbr: "Qc", name: "Queen of Cups", number: 13, suit: "Cups", klondike_color: "red"},
        49 : {abbr: "Kc", name: "King of Cups", number: 14, suit: "Cups", klondike_color: "red"},
        50 : {abbr: "As", name: "Ace of Swords", number: 1, suit: "Swords", klondike_color: "black"},
        51 : {abbr: "2s", name: "2 of Swords", number: 2, suit: "Swords", klondike_color: "black"},
        52 : {abbr: "3s", name: "3 of Swords", number: 3, suit: "Swords", klondike_color: "black"},
        53 : {abbr: "4s", name: "4 of Swords", number: 4, suit: "Swords", klondike_color: "black"},
        54 : {abbr: "5s", name: "5 of Swords", number: 5, suit: "Swords", klondike_color: "black"},
        55 : {abbr: "6s", name: "6 of Swords", number: 6, suit: "Swords", klondike_color: "black"},
        56 : {abbr: "7s", name: "7 of Swords", number: 7, suit: "Swords", klondike_color: "black"},
        57 : {abbr: "8s", name: "8 of Swords", number: 8, suit: "Swords", klondike_color: "black"},
        58 : {abbr: "9s", name: "9 of Swords", number: 9, suit: "Swords", klondike_color: "black"},
        59 : {abbr: "10s", name: "10 of Swords", number: 10, suit: "Swords", klondike_color: "black"},
        60 : {abbr: "Ps", name: "Page of Swords", number: 11, suit: "Swords", klondike_color: "black"},
        61 : {abbr: "Ns", name: "Knight of Swords", number: 12, suit: "Swords", klondike_color: "black"},
        62 : {abbr: "Qs", name: "Queen of Swords", number: 13, suit: "Swords", klondike_color: "black"},
        63 : {abbr: "Ks", name: "King of Swords", number: 14, suit: "Swords", klondike_color: "black"},
        64 : {abbr: "Ap", name: "Ace of Pentacles", number: 1, suit: "Pentacles", klondike_color: "red"},
        65 : {abbr: "2p", name: "2 of Pentacles", number: 2, suit: "Pentacles", klondike_color: "red"},
        66 : {abbr: "3p", name: "3 of Pentacles", number: 3, suit: "Pentacles", klondike_color: "red"},
        67 : {abbr: "4p", name: "4 of Pentacles", number: 4, suit: "Pentacles", klondike_color: "red"},
        68 : {abbr: "5p", name: "5 of Pentacles", number: 5, suit: "Pentacles", klondike_color: "red"},
        69 : {abbr: "6p", name: "6 of Pentacles", number: 6, suit: "Pentacles", klondike_color: "red"},
        70 : {abbr: "7p", name: "7 of Pentacles", number: 7, suit: "Pentacles", klondike_color: "red"},
        71 : {abbr: "8p", name: "8 of Pentacles", number: 8, suit: "Pentacles", klondike_color: "red"},
        72 : {abbr: "9p", name: "9 of Pentacles", number: 9, suit: "Pentacles", klondike_color: "red"},
        73 : {abbr: "10p", name: "10 of Pentacles", number: 10, suit: "Pentacles", klondike_color: "red"},
        74 : {abbr: "Pp", name: "Page of Pentacles", number: 11, suit: "Pentacles", klondike_color: "red"},
        75 : {abbr: "Np", name: "Knight of Pentacles", number: 12, suit: "Pentacles", klondike_color: "red"},
        76 : {abbr: "Qp", name: "Queen of Pentacles", number: 13, suit: "Pentacles", klondike_color: "red"},
        77 : {abbr: "Kp", name: "King of Pentacles", number: 14, suit: "Pentacles", klondike_color: "red"}},

    // Declare variables for all the different collections of cards we have.
    deck : [],
    stock : [],
    foundations : [],
    columns : [],
    waste : []    
};

//Function to give us a fresh pack of cards 
tarotsol.deck.reset = function () {
    for (var i = 0; i < tarotsol.deck_size; i++) {
        tarotsol.deck.push(i);
    }
};

//Function which randomly pushes cards from the deck into the stock.
tarotsol.deck.shuffle = function () {
    var random_card;
    while(tarotsol.deck.length > 0) {
        random_card = Math.floor(Math.random()*(tarotsol.deck.length));
        tarotsol.stock.push(tarotsol.deck[random_card]);
        tarotsol.deck.splice(random_card,1);    
    };
};

//Function to initialize the Stacks
tarotsol.columns.deal = function () {
    var num_columns = 9;
    for(var i = 0; i < num_columns; i++) {
        tarotsol.columns[i] = new Array ();
        for (var p = num_columns - i; p > 0; p--)
        {
            tarotsol.columns[i].push(tarotsol.stock.pop());
        }
    }
};