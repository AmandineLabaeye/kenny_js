/**
 * Created by sstienface on 07/10/2018.
 */

document.getElementById('up').addEventListener('click',function() {
   var t = parseInt(document.getElementById('kenny').style.top);
    t=t-10;
    document.getElementById('kenny').style.top = t+'px';
});