function check_device(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        location.replace("/WebTerminal/m");
    }else{
     location.replace("/WebTerminal/d");
    }
}
