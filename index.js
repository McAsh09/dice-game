// var nameOne = prompt("Enter player 1 name: ");
// var nameTwo = prompt("Enter player 2 name: ");

function startGame(){

    console.log("clicked");
    var nameOne = prompt("Enter player 1 name: ");
    var nameTwo = prompt("Enter player 2 name: ");


document.querySelector("#players .playerOne").innerHTML = nameOne;
document.querySelector("#players .playerTwo").innerHTML = nameTwo;

var randomvalueOne = Math.floor((Math.random() * 6) + 1);
var randomvalueTwo = Math.floor((Math.random() * 6) + 1);

//conditions for player 1
if(randomvalueOne === 1){
    var img = document.createElement("img");
    img.src = "images/dice-six-faces-one.png";
    img.style.height = "100px";
    
    var x = document.querySelector("#randomValue .valueOne");
    x.appendChild(img);
}

else if(randomvalueOne === 2){
    var img = document.createElement("img");
    img.src = "images/dice-six-faces-two.png";
    img.style.height = "100px";
    
    var x = document.querySelector("#randomValue .valueOne");
    x.appendChild(img);
}

else if(randomvalueOne === 3){
    var img = document.createElement("img");
    img.src = "images/dice-six-faces-three.png";
    img.style.height = "100px";
    
    var x = document.querySelector("#randomValue .valueOne");
    x.appendChild(img);
}

else if(randomvalueOne === 4){
    var img = document.createElement("img");
    img.src = "images/dice-six-faces-four.png";
    img.style.height = "100px";
    
    var x = document.querySelector("#randomValue .valueOne");
    x.appendChild(img);
}

else if(randomvalueOne === 5){
    var img = document.createElement("img");
    img.src = "images/dice-six-faces-five.png";
    img.style.height = "100px";
    
    var x = document.querySelector("#randomValue .valueOne");
    x.appendChild(img);
}

else if(randomvalueOne === 6){
    var img = document.createElement("img");
    img.src = "images/dice-six-faces-six.png";
    img.style.height = "100px";
    
    var x = document.querySelector("#randomValue .valueOne");
    x.appendChild(img);
}

//Conditions for player 2

if(randomvalueTwo === 1){
    var img = document.createElement("img");
    img.src = "images/dice-six-faces-one.png";
    img.style.height = "100px";
    
    var x = document.querySelector("#randomValue .valueTwo");
    x.appendChild(img);
}

else if(randomvalueTwo === 2){
    var img = document.createElement("img");
    img.src = "images/dice-six-faces-two.png";
    img.style.height = "100px";
    
    var x = document.querySelector("#randomValue .valueTwo");
    x.appendChild(img);
}

else if(randomvalueTwo === 3){
    var img = document.createElement("img");
    img.src = "images/dice-six-faces-three.png";
    img.style.height = "100px";
    
    var x = document.querySelector("#randomValue .valueTwo");
    x.appendChild(img);
}

else if(randomvalueTwo === 4){
    var img = document.createElement("img");
    img.src = "images/dice-six-faces-four.png";
    img.style.height = "100px";
    
    var x = document.querySelector("#randomValue .valueTwo");
    x.appendChild(img);
}

else if(randomvalueTwo === 5){
    var img = document.createElement("img");
    img.src = "images/dice-six-faces-five.png";
    img.style.height = "100px";
    
    var x = document.querySelector("#randomValue .valueTwo");
    x.appendChild(img);
}

else if(randomvalueTwo === 6){
    var img = document.createElement("img");
    img.src = "images/dice-six-faces-six.png";
    img.style.height = "100px";
    
    var x = document.querySelector("#randomValue .valueTwo");
    x.appendChild(img);
}



// document.querySelector("#randomValue .valueOne").innerHTML = randomvalueOne;
// document.querySelector("#randomValue .valueTwo").innerHTML = randomvalueTwo;

if(randomvalueOne > randomvalueTwo){
    document.getElementById("mainTitle").innerHTML = nameOne + " WINS!";
    document.getElementById("mainTitle").style.color = "#6aff6a";
}

else if(randomvalueOne === randomvalueTwo){
document.getElementById("mainTitle").innerHTML = "DAMN! It's a TIE!";
document.getElementById("mainTitle").style.color = "white";
}


else{
document.getElementById("mainTitle").innerHTML = nameTwo + " WINS!";
document.getElementById("mainTitle").style.color = "#ffd96e";
}
}
