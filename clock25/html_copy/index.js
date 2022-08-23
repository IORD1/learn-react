import React, { Component } from 'react';
import './App.css';
import {useEffect} from 'react';


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
    }
    
  }

  function binc () {
    if(blen != 60){
      blen = blen + 1;
    }
    
  }

  function mdec () {
    if(power == 1){
      if(mlen != 1){
        mlen = mlen - 1;
      }
    }else{
      if(mlen != 1){
        mlen = mlen - 1;
      }
      if(min != 1){
        min = mlen - 1;
      }
    }
  }

  function minc () {
    if(power == 1){
      if(mlen != 60){
        mlen = mlen + 1;
      }
    }else{
      if(mlen != 60){
        mlen = mlen + 1;
      }
      if(min != 60){
        min = mlen + 1;
      }
    }
  }

  function onpower(){
    if(power == 1){
    power = 0
    }else{
      power = 1;
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
            sec = 59 ;
            isbreak = 1;
            display= 'isbreak'
            var audio1 = document.getElementById('beep');
            audio1.play();
          }else if(isbreak == 1){
            min = mlen;
            sec = '00' ;
            isbreak = 0;
            display= 'Session'
            var audio1 = document.getElementById('beep');
            audio1.play();
          }
          
        }else{
          min = min - 1;
          sec = 59;
        }
        
      }else if(sec != 0){
        if(this.checker()){
          sec = "0" + (sec - 1);
        }else{
          sec = sec - 1;
        }
      }

    }
 
  }

  function restart () {
    sec = '00';
    min = mlen;
    power = 0
  }

//   componentDidMount() {
//     this.interval = setInterval(() => this.start(), 1000);
    
//   }
 
//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }
