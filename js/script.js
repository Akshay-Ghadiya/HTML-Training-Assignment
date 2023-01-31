function SideBar(){

    
    var x = document.getElementById("sidebarr");

    if(x.style.display == "block"){
        document.getElementById("sidebarr").style.display = "none";
    }
    else{
        document.getElementById("sidebarr").style.display = "block";
    }
}


function FirstTab(){
    document.getElementById("tab1-content").style.display = "block";
    document.getElementById("tab2-content").style.display = "none";
    document.getElementById("tab3-content").style.display = "none";
    document.getElementById("button1").style.color = "red";
    document.getElementById("button2").style.color = "black";
    document.getElementById("button3").style.color = "black";
 

}
function SecondtTab(){
    document.getElementById("tab1-content").style.display = "none";
    document.getElementById("tab2-content").style.display = "block";
    document.getElementById("tab3-content").style.display = "none";
    document.getElementById("button2").style.color = "red";
    document.getElementById("button1").style.color = "black";
    document.getElementById("button3").style.color = "black";
}
function ThirdTab(){
    document.getElementById("tab1-content").style.display = "none";
    document.getElementById("tab2-content").style.display = "none";
    document.getElementById("tab3-content").style.display = "block";
    document.getElementById("button3").style.color = "red";
    document.getElementById("button1").style.color = "black";
    document.getElementById("button2").style.color = "black";
}
