// Depends on tarotsol.js and tarottable.js

var tarotsolitaire = function() {
    tarotsol.deck.reset();
    tarotsol.deck.shuffle();
    tarotsol.columns.deal();
    tarottable.draw();
};