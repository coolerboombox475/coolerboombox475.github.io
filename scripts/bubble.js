var i = 0;
var txt = 'Hello! Welcome to the website of Legperture Labs! How can I help you today? \n\r - Boombox Pickles, real Legperture employee'; /* The text */
var speed = 40; /* The speed/duration of the effect in milliseconds */

typeWriter()

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function updates() {
    document.getElementById("desk").setAttribute("src" , "images/boom/explain.gif");
    document.getElementById("text").innerHTML = '';
    txt = "The site was last updated on 10/6/2024! Almost nothing has changed other than a new host but bear with me here"
    i = 0
    typeWriter()
    document.getElementById("buttons").innerHTML = "<button onclick='chat1()'>How's your day?</button></span>";
}

function chat1 () {
    document.getElementById("desk").setAttribute("src" , "images/boom/excited.gif");
    document.getElementById("text").innerHTML = '';
    txt = "I'm having the TIME OF MY LIFE! I get to do SCIENCE!!! In a LABORATORY!! Like with stuff in bottles."
    i = 0
    typeWriter()
    document.getElementById("buttons").innerHTML = "<button onclick='chat2()'>Sounds neat.</button> <button onclick='chat3()'>Like what?</button>";
}

function chat2 () {
    document.getElementById("desk").setAttribute("src" , "images/boom/excited.gif");
    document.getElementById("text").innerHTML = '';
    txt = "IT'S AWESOME SAUCE!!! I LOVE WORKING WITH MYSTERIOUS SUBSTANCES OF UNKNOWN ORIGIN!!! I LOVE TO MAKE VOLATILE FORMULAS WITH INGREDIENTS THAT SHOULD NEVER BE PUT TOGETHER!!!"
    i = 0
    speed = 20
    typeWriter()
    document.getElementById("buttons").innerHTML = "<button onclick='chat4()'>Why does it do that when you talk</button>";
}

function chat3 () {
    document.getElementById("desk").setAttribute("src" , "images/boom/explain.gif");
    document.getElementById("text").innerHTML = '';
    txt = "Like um.... Like uhh... There's some uhhh... Green goop?"
    i = 0
    typeWriter()
    document.getElementById("buttons").innerHTML = "<button onclick='chat2()'>Sounds great!</button>";
}

function chat4 () {
    document.getElementById("desk").setAttribute("src" , "images/boom/idle.gif");
    document.getElementById("text").innerHTML = '';
    txt = "Idk I'll fix it"
    speed = 40
    i = 0
    typeWriter()
    document.getElementById("buttons").innerHTML = "<button>...</button>";
}