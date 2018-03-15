// tarottable.js depends on tarotsol.js

var tarottable = {
    initialized: false
};

tarottable.init = function () { 
    document.writeln("\
        <table id='tarottable_container'>\
        <tr><td id='tarottable_stock' class='tarottable_cell'></td>\
        <td id='tarottable_waste' class='tarottable_cell' colspan='3'></td>\
        <td id='tarottable_foundation_0' class='tarottable_cell'></td>\
        <td id='tarottable_foundation_1' class='tarottable_cell'></td>\
        <td id='tarottable_foundation_2' class='tarottable_cell'></td>\
        <td id='tarottable_foundation_3' class='tarottable_cell'></td>\
        <td id='tarottable_foundation_4' class='tarottable_cell'></td>\
        </tr>");
    for(var c = 0; c < tarotsol.columns.length; c++)
    {
        document.write("<td id='tarottable_col_"+c+"' class='tarottable_cell tarottable_column'></td>");
    }
    document.write("</tr></table>");
        tarottable.initialized = true;
};

tarottable.card_div = function (card_index, stack_direction = "none") {
    // Strings to construct classes defined in project stylesheet   
    // Include leading space to prettify output HTML
    var stack_class_prefix = " tarotsol_card_";
    var stack_class_suffix_horizontal = "h";
    var stack_class_suffix_vertical = "v";
    
    // Fallback value 
    var stack_class = "";
    var stack_html_suffix = "";

    // Construct correct stack classes if stack_direction is set to vertical|v or horizontal|h
    if (stack_direction.toLowerCase() == "vertical" || stack_direction.toLowerCase() == "v") {
        stack_class = stack_class_prefix + stack_class_suffix_vertical;
        stack_html_suffix = "<br>";
    }
    else if (stack_direction.toLowerCase() == "horizontal" || stack_direction.toLowerCase() == "h") {
        stack_class = stack_class_prefix + stack_class_suffix_horizontal;
    }
    
    // If the card has been revealed, display the front card with a value. Else, display blank card back.
    if (tarotsol.tarot_key[card_index].revealed == true) {
        return "<div id='tarotsol_card_"+card_index+"' class='tarotsol_card tarotsol_cardfront"+stack_class+"' >"+tarotsol.tarot_key[card_index].abbr+"</div>"+stack_html_suffix;
    }
    else {
        return "<div class='tarotsol_card tarotsol_cardback"+stack_class+"'></div>"+stack_html_suffix;
    }    
};

// Function which returns empty stack HTML.
tarottable.card_placeholder_div = function () {
    return "<div id='tarotsol_stock_div' class='tarotsol_card tarotsol_emptystack'></div>";
}

tarottable.draw_cols = function () {
    var theseCards = [];
    for(var i = 0; i < tarotsol.columns.length; i++)
    {
        theseCards = [];
        col_length = tarotsol.columns[i].length;
        for(var j = 0; j < col_length; j++)
        {
            theseCards.push(tarottable.card_div(tarotsol.columns[i][j], "v"));
        }
        document.getElementById("tarottable_col_"+i).innerHTML = theseCards.join("");
    }
};

tarottable.draw_stock = function () {
    if (tarotsol.stock.length > 0) {
        document.getElementById("tarottable_stock").innerHTML = tarottable.card_div(0, "none");
    }
    else {
        document.getElementById("tarottable_stock").innerHTML = tarottable.card_placeholder_div();
    }
};

tarottable.draw_waste = function (num_reveal = 1) {
    if (tarotsol.waste.length > 0) {
        waste_length = tarotsol.waste.length;
        if (num_reveal > waste_length) {
            num_reveal = waste_length;
        }
        var theseCards = [];
        for (var i = 1; i <= num_reveal; i++) {
            theseCards.push(tarottable.card_div(tarotsol.waste[waste_length-i], "h"));
        }
        document.getElementById("tarottable_waste").innerHTML = theseCards.join("");
    }
    else {
        document.getElementById("tarottable_waste").innerHTML = tarottable.card_placeholder_div();
    }
};

tarottable.draw_foundations = function () {
    for (var i = 0; i < 5; i++)
    {
        if (tarotsol.stock[i].length > 0) {
            document.getElementById("tarottable_foundation_"+i).innerHTML = tarottable.card_div(tarotsol.foundation[i],"none");    
        }
        else {
            document.getElementById("tarottable_foundation_"+i).innerHTML = tarottable.card_placeholder_div();
        }
    }
};

tarottable.draw = function () {
    if(tarottable.initialized == false) {
        tarottable.init();
    }
    tarottable.draw_cols();
    tarottable.draw_stock();
    tarottable.draw_waste(3);
    tarottable.draw_foundations();
};