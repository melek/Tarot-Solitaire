// Depends on tarotsol.js and tarottable.js

var tarotsolitaire = function() {
    tarotsol.deck.reset();
    tarotsol.deck.shuffle();
    tarotsol.columns.deal();
    for(var i = 0; i < 4; i++) {
        tarotsol.waste.push(tarotsol.stock.pop());
    }
    tarottable.draw();
};