var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
document.querySelector(".Dice-Image1").setAttribute("src","../Images/dice"+randomNumber1+".png");
document.querySelector(".Dice-Image2").setAttribute("src","../Images/dice"+randomNumber2+".png");
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML='🏆 Player 1 Wins';
}
else if(randomNumber2>randomNumber1){
    document.querySelector('h1').innerHTML='Player 2 Wins 🏆';
}
