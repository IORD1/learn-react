

var min = 25;
var sec = "00";
var blen= 5;
var mlen= 25;
var power = 0;
var isbreak = 0;
var display = 'Session' ;



function bdec () {
  if(blen != 1){
    blen = blen - 1;
    document.getElementById("break-length").innerHTML = blen;
  }
  
}

function binc () {
  if(blen != 60){
    blen = blen + 1;
    document.getElementById("break-length").innerHTML = blen;
  }
  
}

function mdec () {
  if(power == 1){
    if(mlen != 1){
      mlen = mlen - 1;
      document.getElementById("session-length").innerHTML = mlen;
    }
  }else{
    if(mlen != 1){
      mlen = mlen - 1;
      document.getElementById("session-length").innerHTML = mlen;
    }
    if(min != 1){
      min = min - 1;
      document.getElementById("time-left-min").innerHTML = min;
    }
  }
}

function minc () {
  if(power == 1){
    if(mlen != 60){
      mlen = mlen + 1;
      document.getElementById("session-length").innerHTML = mlen;
    }
  }else{
    if(mlen != 60){
      mlen = mlen + 1;
      document.getElementById("session-length").innerHTML = mlen;
    }
    if(min != 60){
      min = min + 1;
      document.getElementById("time-left-min").innerHTML = min;
    }
  }
}





function onpower(){
  if(power == 0){
    power = 1;
  }else{
    power = 0;
  }

}





function checker(){
  if(sec == 10){
    return true;
  }
  if(sec[0] == 0){
    return true;
  }
  return String(Math.abs(sec)).charAt(0) == sec;
}

function start () {
  if(power == 1){
    if(sec == '00'){
      if(min == 0 && sec == 0){
        if(isbreak == 0){
          min = blen - 1;
          document.getElementById("time-left-min").innerHTML = min;
          sec = 59 ;
          document.getElementById("time-left-sec").innerHTML = sec;
          isbreak = 1;
          display= 'Break'
          document.getElementById("timer-label").innerHTML = display;
          var audio1 = document.getElementById('beep');
          audio1.play();
        }else if(isbreak == 1){
          min = mlen;
          document.getElementById("time-left-min").innerHTML = min;
          sec = '00' ;
          document.getElementById("time-left-sec").innerHTML = sec;
          isbreak = 0;
          display= 'Session'
          document.getElementById("timer-label").innerHTML = display;
          var audio1 = document.getElementById('beep');
          audio1.play();
        }
        
      }else{
        min = min - 1;
        document.getElementById("time-left-min").innerHTML = min;
        sec = 59;
        document.getElementById("time-left-sec").innerHTML = sec;
      }
      
    }else if(sec != 0){
      if(checker()){
        sec = "0" + (sec - 1);
        document.getElementById("time-left-sec").innerHTML = sec;
      }else{
        sec = sec - 1;
        document.getElementById("time-left-sec").innerHTML = sec;
      }
    }

  }

}

function restart () {
  sec = '00';
  document.getElementById("time-left-sec").innerHTML = sec;
  min = mlen;
  document.getElementById("time-left-min").innerHTML = mlen;
  power = 0;
}


var intervalId = window.setInterval(function(){
  start();
}, 1000);  ;