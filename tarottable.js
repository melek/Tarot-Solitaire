// tarottable.js depends on tarotsol.js

var tarottable = {
    initialized: false
};

tarottable.init = function () { 
    document.writeln("\
        <table id='tarottable_container'>\
        <tr><td id='tarottable_stock' class='tarottable_cell'></td>\
        <td id='tarottable_waste' class='tarottable_cell'></td>\
        <td id='tarottable_gap' class='tarottable_cell' colspan=2>\
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

tarottable.draw_cols = function () {
    var theseCards = [];
    for(var i = 0; i < tarotsol.columns.length; i++)
    {
        theseCards = [];
        col_length = tarotsol.columns[i].length;
        for(var j = 0; j < col_length; j++)
        {
            if(tarotsol.tarot_key[tarotsol.columns[i][j]].revealed == true)
            {
                theseCards.push("<div id='tarotsol_card_"+tarotsol.columns[i][j]+"' class='tarotsol_card tarotsol_cardfront'>"+tarotsol.tarot_key[tarotsol.columns[i][j]].abbr+"</div><br>")
            }
            else 
            {
                theseCards.push("<div class='tarotsol_card tarotsol_cardback'></div><br>")
            }
        }
        document.getElementById("tarottable_col_"+i).innerHTML = theseCards.join("");
    }
};

tarottable.draw_stock = function () {
    if (tarotsol.stock.length > 0) {
        document.getElementById("tarottable_stock").innerHTML = "<div id='tarotsol_stock_div' class='tarotsol_card tarotsol_cardback'></div>";    
    }
    else {
        document.getElementById("tarottable_stock").innerHTML = "<div id='tarotsol_stock_div' class='tarotsol_card tarotsol_emptystack'></div>";
    }
};

tarottable.draw_waste = function () {
    if (tarotsol.waste.length > 0) {
        document.getElementById("tarottable_waste").innerHTML = "<div id='tarotsol_waste_div' class='tarotsol_card tarotsol_card_front'>"+tarotsol.waste[tarotsol.waste.length-1]+"</div>";    
    }
    else {
        document.getElementById("tarottable_waste").innerHTML = "<div id='tarotsol_waste_div' class='tarotsol_card tarotsol_emptystack'></div>";
    }
};

tarottable.draw_foundations = function () {
    for (var i = 0; i < 5; i++)
    {
        if (tarotsol.stock[i].length > 0) {
            document.getElementById("tarottable_foundation_"+i).innerHTML = "<div id='tarotsol_foundation_"+i+"_div' class='tarotsol_card tarotsol_card_front'>"+tarotsol.waste[tarotsol.waste.length-1]+"</div>";    
        }
        else {
            document.getElementById("tarottable_foundation_"+i).innerHTML = "<div id='tarotsol_foundation_"+i+"_div'' class='tarotsol_card tarotsol_emptystack'></div>";
        }
    }
}

tarottable.draw = function () {
    if(tarottable.initialized == false) {
        tarottable.init();
    }
    tarottable.draw_cols();
    tarottable.draw_stock();
    tarottable.draw_waste();
    tarottable.draw_foundations();
};