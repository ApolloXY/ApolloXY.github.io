function navchange(){
	var elem = document.getElementById("menu");
	var mmc = document.getElementById("menu-con"); 
	var bd = document.body; 

        elem.classList.toggle("change");
	mmc.classList.toggle("changeb");
	bd.classList.toggle("changebd");
	
        }