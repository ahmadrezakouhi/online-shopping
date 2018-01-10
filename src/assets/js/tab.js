function openCity(cityName,itsButton) {
    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(cityName).style.display = "block";
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    }
    
    // w3.addClass('#'+itsButton,'w3-bottombar w3-border-red')
       w3.removeClass('.tablink','w3-bottombar w3-border-red')
 w3.addClass('#'+itsButton,'w3-bottombar w3-border-red w3-text-red')
}
function hide(cityName,itsButton){
    var i ;
    var x = document.getElementsByClassName('city');
    for(i=0;i<x.length;i++){
        x[i].style.display="none"
    }
   w3.removeClass('#'+itsButton,'w3-bottombar w3-border-red w3-text-red') 
}






