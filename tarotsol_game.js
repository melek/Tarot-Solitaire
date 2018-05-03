tarotsol.game = function () {
    active_card = false;

};

// This function adds the digits of a number together recursively to produce a single-digit sum.
// The rules of the game needs these sums for double-digit value cards (10-21).
tarotsol.game.add_digits = function (num) {
    var sum = 0;
    while (num) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    if (sum > 9)
    {
        sum = tarotsol.game.add_digits(sum);
    }
    console.log("add_digits result: "+sum);
    return sum;
};

// Function to move a card to a column.
tarotsol.game.move_card_to_col = function (source_col, sub_index, dest_col) {

    var dest_len = tarotsol.columns[dest_col].length - 1;
    var from_card = tarotsol.key[tarotsol.columns[source_col][sub_index]];
    var to_card = tarotsol.key[tarotsol.columns[dest_col][dest_len]];
    var valid_move = false;

    // First check to see if the move is valid suit-wise.
    if (from_card.color == to_card.color && from_card.color !== "wild") {
        console.log("Invalid move attempted (suit-wise error: "+from_card.color+" onto "+to_card.color+").");
        return;
    }

    // Handle Court Cards specially.
    if (from_card.number > 10 && from_card.color != "wild") {
        
    }

    // Next check to see if the move is valid number-wise.
    if (from_card.number == to_card.number -1) {
        valid_move = true;
    }
    else if (from_card.number == 0 || to_card.number == 0) {
        // 0 card (The Fool) can be played anywhere
        valid_move = true;
    }
    else if (from_card.number == 10 && to_card.number == 2) {
        // 10s can be played on 2s.
        valid_move = true;
    }
    // This incorrectly allows court cards to be played as numbers. FIX. 
    else {
        from_number_simple = tarotsol.game.add_digits(from_card.number); 
        to_number_simple = tarotsol.game.add_digits(to_card.number);
        console.log("Trying to move "+from_number_simple+" to "+to_number_simple+"...");
        if (from_number_simple == to_number_simple -1) {
            valid_move = true;
        }
    }
    
    if (!valid_move) {
        console.log("Invalid move attempted (number-wise error: "+from_card.number+" onto "+to_card.number+").");
        return;
    }

    // Ok, move is valid, move forward with the move.
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