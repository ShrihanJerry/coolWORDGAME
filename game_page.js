player1name=localStorage.getItem("player1name")
player2name=localStorage.getItem("player2name")
document.getElementById("player1name").innerHTML=player1name
document.getElementById("player2name").innerHTML=player2name
player1score=0
player2score=0
document.getElementById("player1score").innerHTML=player1score
document.getElementById("player2score").innerHTML=player2score
document.getElementById("playerqueston").innerHTML="questonturn="+ player1name
document.getElementById("playeranswer").innerHTML="answer turn="+ player2name
function send(){
 getword=document.getElementById("word").value
 word=getword.toLowerCase()
 char1=word.charAt(1)
 len=word.length
 char2=word.charAt(Math.floor(len/2))
 char3=word.charAt(len-1)
 removecharAt1=word.replace(char1, "_")
 removecharAt2=removecharAt1.replace(char2, "_")
 removecharAt3=removecharAt2.replace(char3, "_")
questonword="<h4>"+removecharAt3+"</h4>"
inputbox="<br><br><input id='answer'>"
button="<br><button onclick='check()'>Check</button>"
row=questonword+inputbox+button
document.getElementById("output").innerHTML=row
document.getElementById("word").value=""
}
var questonturn="player1"
var answerturn="player2"
function check(){
getanswer= document.getElementById("answer").value
answer=getanswer.toLowerCase()
if (answer==word) {
    if (answerturn=="player1") {
        player1score=player1score+1
        document.getElementById("player1score").innerHTML=player1score
    } else{
        player2score=player2score+1
        document.getElementById("player2score").innerHTML=player2score
    }
}
 if (questonturn=="player1") {
    questonturn="player2"
    document.getElementById("playerqueston").innerHTML="questonturn="+ player2name
 }
 else{
    questonturn="player1"
    document.getElementById("playerqueston").innerHTML="questonturn="+ player1name
 
 }
 if (answerturn=="player1") {
    answerturn="player2"
    document.getElementById("playeranswer").innerHTML="answerturn="+ player2name
 }
 else{
    questonturn="player1"
    document.getElementById("playeranswer").innerHTML="answerturn="+ player1name
 
 }
}