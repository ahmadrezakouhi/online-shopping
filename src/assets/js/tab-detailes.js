function openTabDetaile(tab,tabButton) {
    var i;
    var x = document.getElementsByClassName("details");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(tab).style.display = "block";
    w3.removeClass('#desButton','w3-white  ')
    w3.removeClass(' #detButton' ,'w3-white ')
    w3.removeClass(' #comButton','w3-white ')
    w3.addClass("#"+tabButton,'w3-white ');
}