
var s = document.getElementById("submit");
var c = document.getElementById("conversation")

s.addEventListener("click", displayConversation);

function displayConversation(event) {
    event.preventDefault()
    var f = document.getElementById("firstname").value;
    var m = document.getElementById("message").value;
    c.innerHTML = f + ": "; 
    console.log("on click working")
    console.log (f + m)
}