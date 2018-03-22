tarotsol.game = function () {
    active_card = false;

};

tarotsol.game.move_col2col = function (source_col, sub_index, dest_col) {
    var dest_len = tarotsol.columns[dest_col].length - 1;
    
    // Splice out the selected cards
    var active_pile = tarotsol.columns[source_col].splice(sub_index);
    
    // Iterate through the active pile and properly assign
    for (var card = 0; card < active_pile.length; card++) {
        tarotsol.key[active_pile[card]].pos = dest_col;
        tarotsol.key[active_pile[card]].posi = tarotsol.columns[dest_col].length + card;
    }
    
    // Add selected cards to destination column
    tarotsol.columns[dest_col] = tarotsol.columns[dest_col].concat(active_pile)

    // Unless this is the last card in the pile, ensure the next card is revealed
    if(tarotsol.columns[source_col].length > 0) {
        var source_len = tarotsol.columns[source_col].length - 1;
        tarotsol.key[tarotsol.columns[source_col][source_len]].revealed = true;
    }
};