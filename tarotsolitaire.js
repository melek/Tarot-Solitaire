// Depends on tarotdeck.js

var tarotsolitaire = function()
{
    tarotsol.deck.reset();
    tarotsol.deck.shuffle();
    tarotsol.piles.shuffle();
    document.writeln(tarotsol.piles);
};
