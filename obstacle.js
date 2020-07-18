var score=0;
var obstacle = function(image,speed) {
    var o = new Object();
    
    var toploc =  Math.floor((Math.random() * 65)+15);
    console.log(toploc);
    o.elem = $('<img src="'+image+'" class="obstacle">')
             .css({top:toploc+"%", left:"100%"});
    o.move = function() {
        o.elem.animate({left:"-10%"}, speed, "linear", function() {
            $(this).remove();
            score += 1;
            document.getElementById('score').innerHTML = "Score: " + score;
        })
    }
    return o;
}
var coin = function(image,speed) {
    var c = new Object();
    
    var topcoin =  Math.floor((Math.random() * 65)+15);
    console.log(topcoin);
    c.elem = $('<img src="'+image+'" class="coin">')
             .css({top:topcoin+"%", left:"100%"});
    c.move = function() {
        c.elem.animate({left:"-10%"}, speed, "linear", function() {
            $(this).remove();
            score += 1;
            document.getElementById('score').innerHTML = "Score: " + score;
        })
    }
    return c;
}
