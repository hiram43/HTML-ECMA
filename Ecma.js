// JavaScript source code
    //Creating a NavBar
let tag = document.createElement("div");
//Addin Id
tag.id = "NavId";
//Creating Nav Elements
let NavBarOb1 = document.createElement("a");
let NavBarOb2 = document.createElement("a");
let NavBarOb3 = document.createElement("a");
NavBarOb1.innerHTML = "News";
NavBarOb2.innerHTML = "Contact";
NavBarOb3.innerHTML = "About";
//Maping the body
var element = document.getElementById("Cuerpo");

element.appendChild(tag);
//Inserting the "a" Elements
tag.appendChild(NavBarOb1);
tag.appendChild(NavBarOb2);
tag.appendChild(NavBarOb3);
//Adding Styles
let Styles = document.getElementById("NavId");
Styles.classList.add("topnav")



