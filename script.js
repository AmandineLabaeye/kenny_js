/**
 * Created by sstienface on 07/10/2018.
 */


    document.getElementById('up').addEventListener('click', function () {
        var t = parseInt(document.getElementById('kenny').style.top);
        if (t >= 10)
        t = t - 10;
        document.getElementById('kenny').style.top = t + 'px';
    });

document.getElementById('left').addEventListener('click', function () {
    var u = parseInt(document.getElementById('kenny').style.left);
    if (u <= 60)
        alert("Kenny is Dead !");
        return ;
    u=u-10;
    document.getElementById('kenny').style.left = u+'px';
});

document.getElementById('down').addEventListener('click',function() {
    var v = parseInt(document.getElementById('kenny').style.top);
    if (v <= 460)
    v=v+10;
    document.getElementById('kenny').style.top = v+'px';
});

document.getElementById('right').addEventListener('click', function () {
    var w = parseInt(document.getElementById('kenny').style.left);
    if (w <= 460)
    w=w+10;
    document.getElementById('kenny').style.left = w+'px';
});

