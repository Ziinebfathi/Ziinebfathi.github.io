(function(){

    var animation=null;

    var btnStop;
    var btnStart;
    var selectFont;
    var selectAnimation;
    var txtShowAnimation;
    var chkSpeed;

    var currentAnimationText;

    var delay=250;
    var timer=null;
    var index=0;
    window.onload=function(){

        txtShowAnimation=document.getElementById("txtShowAnimation");
        
        btnStart=document.getElementById("start-btn");
        btnStart.onclick=startAnimation;

        btnStop=document.getElementById("stop-btn");
        btnStop.onclick=stopAnimation;

        selectAnimation=document.getElementById("select-Animation");
        selectAnimation.onchange=changeAnimationText;
        selectAnimation.selectedIndex=0;

        selectFont=document.getElementById("select-size");
        selectFont.onchange=changeFontSize;
        selectFont.selectedIndex=2;

        chkSpeed=document.getElementById("chk-speed");
        chkSpeed.onchange=changeDelay;
    };

    function startAnimation(){
        toogleControl('start');
        currentAnimationText=txtShowAnimation.value;
        if (timer===null){
            timer=setInterval(changeFrame,delay);
        }
    
    }

    function stopAnimation(){
        toogleControl('stop');

        if (timer!==null){
            clearInterval(timer);
            timer=null;
        }

        index=0;
        restoreOrginalText();
    }

    function changeAnimationText(){
        var selected=selectAnimation.options[selectAnimation.selectedIndex].value;
        animation=ANIMATIONS[selected];

        txtShowAnimation.value=animation;
    }

    function changeFontSize(){
        txtShowAnimation.style.fontSize=selectFont.options[selectFont.selectedIndex].value;
    }

    function changeDelay(){
        
        if(chkSpeed.checked){
            delay=50;
            clearInterval(timer);
            timer=setInterval(changeFrame,delay);
        }
        else{
            delay=250;
            clearInterval(timer);
            timer=setInterval(changeFrame,delay);
        }
    }

    function toogleControl(state){
        if (state==='start'){
            btnStart.disabled=true;
            btnStop.disabled=false;
            selectAnimation.disabled=true;
        } else if(state==='stop'){
            btnStart.disabled=false;
            btnStop.disabled=true;
            selectAnimation.disabled=false;
        }

    }

    function changeFrame(){
        var frames=currentAnimationText.split('=====\n');
        txtShowAnimation.value=frames[index];
        index++;

        if (index===frames.length)
            index=0;
    }

    function restoreOrginalText(){
        txtShowAnimation.value=currentAnimationText;
    }

})();