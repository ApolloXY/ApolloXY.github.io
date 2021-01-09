var textarea = document.getElementById("message-input");
function sent() {
    var text = textarea.value;
    
    if(text!="" || text !=null){
        var html = "";
        // give each message a unique ID
        html += "<div class='message-row user2'><div class='message-text'>";
        
        html += text;
        html += "</div></div>";
    
        document.getElementById("chat-messages").innerHTML += html;
        textarea.style.height = "";
      
    }
    

    if(text == "@admin"){
    var htm = "";
    // give each message a unique ID
    htm += "<div class='message-row user1'><div class='message-text'>";
    
    htm += "Enter Password";
    htm += "</div></div>";

    document.getElementById("chat-messages").innerHTML += htm;
    }

    if(text == "hello" || text == "Hello" || text == "hi" || text == "Hi"){
        var ht = "";
        // give each message a unique ID
        ht += "<div class='message-row user1'><div class='message-text'>";
        
        ht += "Hello";
        ht += "</div></div>";
    
        document.getElementById("chat-messages").innerHTML += ht;
        }
        
console.log(text);
document.getElementById("message-input").value = "";

var elmnt = document.getElementById("chat-messages");
 elmnt.scrollTop = elmnt.scrollHeight;


}


var limit = 80; //height limit

textarea.oninput = function() {
  textarea.style.height = "";
  textarea.style.height = Math.min(textarea.scrollHeight, limit) + "px";
};

/*
var input = document.getElementById("message-input");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     sent();
    }
  });
  */