// tarottable.js depends on tarotsol.js

var tarottable = {};

tarottable.init = function () { 
    document.writeln("\
        <table id='tarottable_container'>\
        <tr><td id='tarottable_stock'></td>\
        <td id='tarottable_discard'></td>\
        <td id='tarottable_gap' colspan=2>\
        <td id='tarottable_foundation_trumps'></td>\
        <td id='tarottable_foundation_wands'></td>\
        <td id='tarottable_foundation_cups'></td>\
        <td id='tarottable_foundation_swords'></td>\
        <td id='tarottable_foundation_pentacles'></td>\
        </tr>");
        for(var c = 0; c < tarotsol.columns.length; c++)
        {
            document.write("<td id='tarottable_col_"+c+"'></td>");
        }
        document.write("</tr></table>");
};

tarottable.drawcols = function () {
    var theseCards = [];
    for(var i = 0; i < tarotsol.columns.length; i++)
    {
        theseCards = [];
        for(var j = 0; j < tarotsol.columns[i].length; j++)
        {
            theseCards.push("<div class='tarotsol_card'>"+tarotsol.tarot_key[tarotsol.columns[i][j]].abbr+"</div><br>")
        }
        document.getElementById("tarottable_col_"+i).innerHTML = theseCards.join("");
    }
};