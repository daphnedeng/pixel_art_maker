/* window.onload=function() {
    
    function getStyle(obj, attr) //（参数一：获取谁的，参数二：获取什么)
        {
            if(obj.currentStyle) {
                return obj.currentStyle[attr];
            }
            else {
                return getComputedStyle(obj, false)[attr];
            }
        }

     var timer=setInterval(function (){
        var line=document.getElementById('line');

        if (line.style.width == 100) {
            clearInterval(timer);
        }
        else {
            line.style.width=parseInt(getStyle(line, 'width'))+1+'%';
        }        
    }, 5); //每5毫秒 add 1 % 
}
*/


$(document).ready(function (){
    var loadPercent = 1,
    $line = $('#line'),
    load = function (){
        $line.width(loadPercent + '%');
        loadPercent++;
        if (loadPercent <= 100) 
        setTimeout(load, 15);
        }
    load();
}) 


