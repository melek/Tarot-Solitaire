// tarottable.js depends on tarotsol.js

var tarottable = {
    initialized : false,
    divs : []
};

tarottable.card_id = function (card_index) {
    return "tarotsol_card_" + tarotsol.key[card_index].pos + "_" + card_index;
}

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
    if (tarotsol.key[card_index].revealed == true) {
        tarottable.divs.push(card_index);
        return "<div id='"+tarottable.card_id(card_index)+"' class='tarotsol_card tarotsol_cardfront"+stack_class+"' >"+tarotsol.key[card_index].abbr+"</div>"+stack_html_suffix;
    }
    else {
        return "<div class='tarotsol_card tarotsol_cardback"+stack_class+"'></div>"+stack_html_suffix;
    }    
};

// Function which returns empty stack HTML.
tarottable.card_placeholder_div = function (div_id) {
    if (div_id) {
        return "<div id='"+div_id+"' class='tarotsol_card tarotsol_emptystack'></div>";
    }
    return "<div class='tarotsol_card tarotsol_emptystack'></div>";
}

// Function to draw the columns
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

// Function to draw the stock
tarottable.draw_stock = function () {
    if (tarotsol.stock.length > 0) {
        document.getElementById("tarottable_stock").innerHTML = tarottable.card_div(tarotsol.stock[tarotsol.stock.length-1], "none");
    }
    else {
        document.getElementById("tarottable_stock").innerHTML = tarottable.card_placeholder_div();
    }
};

// Function to draw the waste/discard pile
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

// Function to draw the foundations
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

// Temporary onclick function
tarottable.card_onclick = function (i) {
    console.log("Clicked " + tarotsol.key[i].name + ". Position: " + tarotsol.key[i].pos);
};

tarottable.add_event = function (card_index) {
    element = document.getElementById(tarottable.card_id(card_index));
    if (element) {
        element.addEventListener("click", function () { tarottable.card_onclick(card_index, tarotsol.key[card_index].pos) } );
    }
};

tarottable.init = function () {
    if (tarottable.initialized) return;
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
    // Only run once.
    tarottable.initialized = true;
};

// Combined drawing function
tarottable.draw = function () {
    tarottable.init();
    tarottable.divs = [];
    tarottable.draw_cols();
    tarottable.draw_stock();
    tarottable.draw_waste(tarotsol.num_discard);
    tarottable.draw_foundations();
    
    // Create events
    for (i = 0; i < tarottable.divs.length; i++) {
        tarottable.add_event(tarottable.divs[i]);
    }
};