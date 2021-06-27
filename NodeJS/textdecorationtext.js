
(function(){

    "use strict"
    var size=12;
    var timer=null;
    window.onload=function(){
        var theText=document.getElementById('mytext');
        
        var theBtn=document.getElementById('btnbig');
        theBtn.onclick=startBigging;

        var theradio= document.getElementById('bling');
        // size=20; 
        //size=parseInt(document.getElementsByClassName('textclass').fontSize);
        theradio.onchange=bilingEffect;
        var thelatine=document.getElementById("weirdbtn");
        thelatine.onclick=igpay;

        var themalko=document.getElementById("malkobtn");
        themalko.onclick=malkovitch;
    };

    function malkovitch(){

    }
    function igpay(){
        var cheker=document.getElementById('mytext');
        if (cheker.charAt(0)==="A"){
        }
    }
    function startBigging(){
        if (timer===null){
            timer=setInterval(getBigger,1000);
        }else{
            clearInterval(timer);
            timer=null;
        }
    }
    function getBigger(){ 
            size+=2;
            document.getElementById('mytext').style.fontSize = size+'pt';      
        
    }

    function bilingEffect(){
        var radio=document.getElementById('bling');
        if (radio.checked){
            document.getElementById('mytext').style.color='green';
            document.getElementById('mytext').style.fontWeight='bold';
            document.getElementById('mytext').style.textDecoration='underline';
            document.body.style.backgroundImage="url(image/photo-1461749280684-dccba630e2f6.jpg)"
        }else{
            document.getElementById('mytext').style.color='black';
            document.getElementById('mytext').style.fontWeight='normal';
            document.getElementById('mytext').style.textDecoration='none';
            document.body.style.backgroundImage="url()"
            document.body.style.backgroundColor='darkolivegreen'
        }
    }

})();
