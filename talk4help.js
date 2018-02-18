

t4 = {};

const t4id = function(el) {
    return document.getElementById(el);  
  }
const t4log = function(el) {
    console.log(el);  
  }
const t4alert = function(el) {
    alert(el);  
  }
  t4log(t4id("MOMA"));
  t4log("1");
  t4alert("2");
  
/*** js talk4help.com ***/

var p; p = document.getElementById("startchat");
var w; w = document.getElementById("chat");
var s; s = document.getElementById("exit");

 p.addEventListener("click",function(){
 p.style.display = "none";
 w.style.display = "block";

 });
 s.addEventListener("click",function(){
 w.style.display = "none";
 p.style.display = "block";

 });