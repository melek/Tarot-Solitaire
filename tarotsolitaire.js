// Depends on tarotdeck.js

var tarotsolitaire = function()
{
    tarotsol.deck.reset();
    tarotsol.deck.shuffle();
    tarotsol.columns.deal();
    for (var i = 0; i < tarotsol.columns.length; i++) {
        document.writeln("<br>Column "+(i+1)+": "+tarotsol.columns[i]);
    }
};