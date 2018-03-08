// tarottable.js depends on tarotsol.js

var tarottable = {
    init : function () {
        writeln("\
        <table id='tarottable_container'>\
        <tr><td id='tarottable_stock'></td>\
        <td id='tarottable_discard'></td>\
        <td id='tarottable_gap' colspan=2>\
        <td id='tarottable_foundation_trumps'></td>\
        <td id='tarottable_foundation_wands'></td>\
        <td id='tarottable_foundation_cups'></td>\
        <td id='tarottable_foundation_swords'></td>\
        <td id='tarottable_foundation_disks'></td>\
        </tr>");
        for(var c = 0; c < tarotsol.columns.length; c++)
        {
            write("<td id='tarottable_col_"+c+"'></td>");
        }
        write("</tr></table>");
    },
    drawcols : function () {
        for(var i = 0; i < tarotsol.columns.length; i++)
        {
            for(var j = 0; tarotsol.columns[i]; j++)
            {
                //DO THIS IN APPROPRIATE COLUMN ID
                writeln(tarotsol.columns[i][j]+"<br>")
            }
        }
    }
};