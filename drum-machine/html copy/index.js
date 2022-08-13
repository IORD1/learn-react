var ispower = 0;
var isswitch = 0;
var vol = 1;




function power(){
    if(ispower == 0){
        document.getElementById('display').innerHTML = 'Power : Off';
        ispower = 1;
      }else{
        document.getElementById('display').innerHTML = 'Power : On';
        ispower = 0;
      } 
}

function switcher(){
    if(isswitch == 0){
        document.getElementById('display').innerHTML = 'Smooth Piano Kit';
        isswitch = 1;
        this.componentDidMount();
      }else if(isswitch == 1){
        document.getElementById('display').innerHTML = 'Heater Kit';
        isswitch = 0;
      }
}

function setvol(){
    vol = document.getElementById('slider').value;
    document.getElementById('display').innerHTML = "Vol : " + document.getElementById('slider').value * 10;

}

function func(key){
    if(isswitch == 0){
        
        if(ispower == 1){
            document.getElementById('display').innerHTML = 'Power : Off';
        }else{
        let aud = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-" + key + ".mp3");
        let aud4 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3");
        let aud5 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3");
        let aud6 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3");
        let aud7 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3");
        let aud8 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3");
        let aud9 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3");
        aud.volume =  vol;
        aud4.volume = vol;
        aud5.volume = vol;
        aud6.volume = vol;
        aud7.volume = vol;
        aud8.volume = vol;
        aud9.volume = vol;
        if(key == 1){
          var audio1 = document.getElementById('Q');
          document.getElementById('display').innerHTML = 'Heater 1';
          audio1.play();
        }else if(key == 2){
          var audio2 = document.getElementById('W');
          document.getElementById('display').innerHTML = 'Heater 2';
          audio2.play();
        }else if(key == 3){
          var audio3 = document.getElementById('E');
          document.getElementById('display').innerHTML = 'Heater 3';
          audio3.play();
        }else if(key == 4){
          var audio4 = document.getElementById('A');
          document.getElementById('display').innerHTML = 'Heater 4';
          audio4.play();
        }else if(key == 5){
          var audio5 = document.getElementById('S');
          document.getElementById('display').innerHTML = 'Clap';
          audio5.play();
        }else if(key == 6){
          var audio6 = document.getElementById('D');
          document.getElementById('display').innerHTML = 'Open HH';
          audio6.play();
        }else if(key == 7){
          var audio7 = document.getElementById('Z');
          document.getElementById('display').innerHTML = "Kick n' Hat";
          audio7.play();
        }else if(key == 8){
          var audio8 = document.getElementById('X');
          document.getElementById('display').innerHTML = 'Kick';
          audio8.play();
        }else if(key == 9){
          var audio9 = document.getElementById('C');
          document.getElementById('display').innerHTML = 'Closed HH';
          audio9.play();
        }

      }
    }else{
      if(ispower == 1){
        document.getElementById('display').innerHTML = 'Power : Off';
      }else{
        
        let aud = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Chord_" + key + ".mp3");
        let aud4 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3");
        let aud5 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3");
        let aud6 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3");
        let aud7 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3");
        let aud8 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3");
        let aud9 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3");
        aud.volume =  vol;
        aud4.volume = vol;
        aud5.volume = vol;
        aud6.volume = vol;
        aud7.volume = vol;
        aud8.volume = vol;
        aud9.volume = vol;
        if(key == 1){
            document.getElementById('display').innerHTML = 'Chord 1';
          
          aud.play();
        }else if(key == 2){
            document.getElementById('display').innerHTML = 'Chord 2';
          aud.play();
        }else if(key == 3){
            document.getElementById('display').innerHTML = 'Chord 3';
          aud.play();
        }else if(key == 4){
            document.getElementById('display').innerHTML = 'Shake 4';
          aud4.play();
        }else if(key == 5){
            document.getElementById('display').innerHTML = 'Open HH';
          aud5.play();
        }else if(key == 6){
            document.getElementById('display').innerHTML = 'Closed HH';
          aud6.play();
        }else if(key == 7){
            document.getElementById('display').innerHTML = 'Punchy Kick';
          aud7.play();
        }else if(key == 8){
            document.getElementById('display').innerHTML = 'Side Stick';
          aud8.play();
        }else if(key == 9){
            document.getElementById('display').innerHTML = 'Snare';  
          aud9.play();
        }

      }
    }
  }


  document.addEventListener('keypress', function(event){
    if(event.key == 'Q'){
      func(1);
    }else if(event.key == 'W'){
      func(2);
    }else if(event.key == 'E'){
      func(3);
    }else if(event.key == 'A'){
      func(4);
    }else if(event.key == 'S')  {
      func(5);
    }else if(event.key == 'D'){
      func(6);
    }else if(event.key == 'Z'){
      func(7);
    }else if(event.key == 'X'){
      func(8);
    }else if(event.key == 'C'){
      func(9);
    }
  });