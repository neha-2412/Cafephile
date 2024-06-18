window.addEventListener('scroll', function(){
    if(this.scrollY >= 120){
        document.getElementById("header").style.backgroundColor = "#ffffff";
        document.getElementById("logoName").style.color = "#000000";
        document.getElementById("li").style.color = "#000000";
        document.getElementById("pages").style.color = "#000000";
        document.getElementById("moon").style.color = "#000000";
    }
    else{
        document.getElementById("header").style.backgroundColor = "transparent";
        document.getElementById("logoName").style.color = "#ffffff";
        document.getElementById("li").style.color = "#ffffff";
        document.getElementById("pages").style.color = "#ffffff";
        document.getElementById("moon").style.color = "#ffffff";
    }
});