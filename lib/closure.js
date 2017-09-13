$(function () {
    var outer = 10;

    var addTo = function() {
        var inner =5;

        return outer + inner;
    };

    console.dir(addTo);
    
    
    $("#closure").append("<div>Sum via simple closure : " + addTo() + "</div>"); //15

    //modified the value of global var
    var outer = 15;
    $("#closure").append("<div>Sum via simple closure : " + addTo() + "</div>");  //20
    
    //modified again the value of global var without var keyword
    outer = 20;
    $("#closure").append("<div>Sum via simple closure : " + addTo() + "</div>");  //25
    
    
    // Some complex closure
    var addMe = function (outer) {
        var add = function (inner) {
            return outer + inner;
        };
        
        return add;
    };
    
    
    var addThree = addMe(3);
    $("#complex-closure").append("<div>Sum via complex closure : " + addThree(10) + "</div>");  //13
    
    var addSeven = addMe(7);
    $("#complex-closure").append("<div>Sum via complex closure : " + addSeven(10) + "</div>");  //17
    
    
});