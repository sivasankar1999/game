var score = 0;
var total = 0;
$(document).ready(function () {
    console.log("loaded");
    $('#click').click(function () {
        $(this).remove();
        setInterval(function () {
            var obstype =Math.floor((Math.random() * 3)+1);
            var o;
            if (obstype == 1) {
                o = obstacle("ob1.png",1500);
            }else if (obstype == 2) {
                o = obstacle("ob2.png",1400) ;
            }else {
                o = obstacle("cac.png",1800);
            }
            $('#obstacles').append(o.elem);
            o.move();
        }, 1000);
        setInterval(function () {
            var obstyp =Math.floor(Math.random() * 2);
            var c;
            if (obstyp == 0) {
                c = coin("coins.png",1500);
            }else {
                c = coin("coins.png",1500);
            }
            $('#coins').append(c.elem);
            c.move();
        }, 1000);
        setInterval(function () {
            $('#line').animate({ "left": "-100px" }, 1500, "linear", function () {
                $('#line').css({ "left": "100%" });
            })
        }, 500);
        setInterval(function () {
            $('#line1').animate({ "left": "-100px" }, 1500, "linear", function () {
                $('#line1').css({ "left": "100%" });
            })
        }, 1000);
        setInterval(function () {
            $('#line2').animate({ "left": "-100px" }, 1500, "linear", function () {
                $('#line2').css({ "left": "100%" });
            })
        }, 1500);
        setInterval(function () {
            var playerpos = $('#car').position();
            var px = playerpos.left;
            var py = playerpos.top;
            var px2 = px + $('#car').width();
            var py2 = py + $('#car').height();
            $(".obstacle").each(function () {
                var obspos = $(this).position();
                var ox = obspos.left;
                var oy = obspos.top;
                var ox2 = ox + $(this).width();
                var oy2 = oy + $(this).height();
                if (ox > px2 || ox2 < px || oy > py2 || oy2 < py) {
                    console.log(ox, oy, ox2, oy2, px, py, px2, py2);

                }
                else {
                    $('audio#blast')[0].play();
                    alert("GAME OVER and YOUR SCORE IS : "+score,);
                    location.reload(true);
                }
            });
        }, 50);
        setInterval(function(){
            $('audio#street ')[0].play();
        })
    });
    setInterval(function () {
        var playerpos = $('#car').position();
        var px = playerpos.left;
        var py = playerpos.top;
        var px2 = px + $('#car').width();
        var py2 = py + $('#car').height();
        $("#tree").each(function () {
            var obspos = $(this).position();
            var ox = obspos.left;
            var oy = obspos.top;
            var ox2 = ox + $(this).width();
            var oy2 = oy + $(this).height();
            if (ox > px2 || ox2 < px || oy > py2 || oy2 < py) {
                console.log(ox, oy, ox2, oy2, px, py, px2, py2);

            }
            else {
                $('audio#blast')[0].play();
                alert("GAME OVER and YOUR SCORE IS : "+score);
                $(this).remove();
                location.reload(true);
            }
        });
    }, 50);

    setInterval(function () {
        var playerpos = $('#car').position();
        var px = playerpos.left;
        var py = playerpos.top;
        var px2 = px + $('#car').width();
        var py2 = py + $('#car').height();
        $("#trees").each(function () {
            var obspos = $(this).position();
            var ox = obspos.left;
            var oy = obspos.top;
            var ox2 = ox + $(this).width();
            var oy2 = oy + $(this).height();
            if (ox > px2 || ox2 < px || oy > py2 || oy2 < py) {
                console.log(ox, oy, ox2, oy2, px, py, px2, py2);
            }
            else {
                $('audio#blast')[0].play();
                alert("GAME OVER and YOUR SCORE IS : "+score);
                location.reload(true);
            }
        });
    }, 50);
    setInterval(function () {
        var playerpos = $('#car').position();
        var px = playerpos.left;
        var py = playerpos.top;
        var px2 = px + $('#car').width();
        var py2 = py + $('#car').height();
        $(".coin").each(function () {
            var obspos = $(this).position();
            var ox = obspos.left;
            var oy = obspos.top;
            var ox2 = ox + $(this).width();
            var oy2 = oy + $(this).height();
            if (ox > px2 || ox2 < px || oy > py2 || oy2 < py) {
                console.log(ox, oy, ox2, oy2, px, py, px2, py2);
            }
            else {
                $('audio#con')[0].play();
                score += 5;
                document.getElementById('score').innerHTML = "Score: " + score;
                $(this).remove();
            }
        });
    }, 50);
    

    $(document).keydown(function (e) {
        console.log('in function');
        switch (e.which) {
            case 38: 
                $('#car').finish().animate({ "top": "-=20px" }, 30, "linear");
                break;
            case 37: $('#car').finish().animate({ "left": "-=20px" }), 30, "linear";
                break;
            case 39: $('#car').finish().animate({ "left": "+=20px" }, 30, "linear");
                break;
            case 40: $('#car').finish().animate({ "top": "+=20px" }, 30, "linear");
                break;
        }
    });
});
