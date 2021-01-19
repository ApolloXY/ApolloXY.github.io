
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    document.getElementById("nav-log").style.padding = "40px";
    document.getElementById("nav-log").style.fontSize = "50px";
    document.getElementById("abc").style.fontSize = "50px";

    document.getElementById("user-nav").style.fontSize = "60px";

    document.getElementById("nav-dec").style.backgroundImage = "repeating-linear-gradient(to right, transparent 0px, transparent 30px, 0px, #5bd1ff 60px)";

    document.getElementById("terminalReslutsCont").style.position = "absolute";
    document.getElementById("terminalReslutsCont").style.top = "150px";
    document.getElementById("terminalReslutsCont").style.bottom = "100px";
    document.getElementById("terminalReslutsCont").style.fontSize = "50px";

    document.getElementsByClassName("userEnteredText").style.fontSize = "23px";

    document.getElementById("terminalTextInput").style.height = "100px";
    document.getElementById("terminalTextInput").style.padding = "30px";
    document.getElementById("terminalTextInput").style.fontSize = "50px";


  }else{
    document.getElementById("nav-log").style.padding = "10px";
    document.getElementById("nav-log").style.fontSize = "20px";
    document.getElementById("abc").style.fontSize = "20px";

    document.getElementById("user-nav").style.fontSize = "20px";
    document.getElementById("nav-dec").style.backgroundImage = "repeating-linear-gradient(to right, transparent 0px, transparent 5px, 0px, #5bd1ff 10px)";

    document.getElementById("terminalReslutsCont").style.position = "absolute";
    document.getElementById("terminalReslutsCont").style.top = "100px";
    document.getElementById("terminalReslutsCont").style.bottom = "60px";
    document.getElementById("terminalReslutsCont").style.fontSize = "14px";

    document.getElementsByClassName("userEnteredText").style.fontSize = "14px";

    document.getElementById("terminalTextInput").style.height = "auto";
    document.getElementById("terminalTextInput").style.padding = "18px";
    document.getElementById("terminalTextInput").style.fontSize = "14px";
  }

  
