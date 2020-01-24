
var btn = document.createElement("button");
btn.innerHTML = "clicca";

var body = document.getElementsByTagName("body")[0];
btn.append(btn);

btn.addEventListener("click", function(){
    document.getElementById("h1").innerHTML = "ciao come stai"
});