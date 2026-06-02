function hideAll(){
    document.getElementById("about").style.display="none";
    document.getElementById("skills").style.display="none";
    document.getElementById("contact").style.display="none";
}
function showHome(){
    hideAll();
    document.getElementById("home").style.display="block";
}
function showAbout(){
    hideAll();
    document.getElementById("home").style.display="none";
    document.getElementById("icons").style.display="none";
    document.getElementById("about").style.display="block";
}function showSkills(){
    hideAll();
    document.getElementById("home").style.display="none";
    document.getElementById("icons").style.display="none";
    document.getElementById("skills").style.display="block";
}
function showContact(){
    hideAll();
    document.getElementById("home").style.display="none";
    document.getElementById("icons").style.display="none";
    document.getElementById("contact").style.display="block";
}