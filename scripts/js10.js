document.getElementById("hufflepuff").onclick = function () {
    moveRight1(0);
    function moveRight1(i)
    {
        var t = setTimeout(function () {
            document.getElementById("hufflepuff").style.marginLeft = i + "px";
            if (i < 300) moveRight1(i+1);
        },5);
    }
}
document.getElementById("ravenclaw").onclick = function () {
    moveRight2(0);
    function moveRight2(i)
    {
        var t = setTimeout(function () {
            document.getElementById("ravenclaw").style.marginLeft = i + "px";
            if (i < 300) moveRight2(i+1);
        },5);
    }
}

document.getElementById("gryffindor").onclick = function () {
    moveRight3(0);
    function moveRight3(i)
    {
        var t = setTimeout(function () {
            document.getElementById("gryffindor").style.marginLeft = i + "px";
            if (i < 300) moveRight3(i+1);
        },5);
    }
}

document.getElementById("slytherin").onclick = function () {
    moveRight4(0);
    function moveRight4(i)
    {
        var t = setTimeout(function () {
            document.getElementById("slytherin").style.marginLeft = i + "px";
            if (i < 300) moveRight4(i+1);
        },5);
    }
}