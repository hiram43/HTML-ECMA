// JavaScript source code
//----------------------------------------------Creating a NavBar--------------------------------------------------------------------------------------------------------------------------------
let tag = document.createElement("div");
tag.id = "NavId";
//Creating Nav Elements
let NavBarOb1 = document.createElement("a");
let NavBarOb2 = document.createElement("a");
let NavBarOb3 = document.createElement("a");
let NavBarOb4 = document.createElement("a");
let ImgNavBar = document.createElement("img");
NavBarOb1.innerHTML = "News";
NavBarOb2.innerHTML = "Contact";
NavBarOb3.innerHTML = "About";
NavBarOb4.innerHTML = "Info";
ImgNavBar.src = "https://upload.wikimedia.org/wikipedia/commons/d/df/Img_logo_blue.jpg";
ImgNavBar.style.width = "100px"
ImgNavBar.style.float ="right"
//Maping the body
let element = document.getElementById("Cuerpo");

element.appendChild(tag);
//Inserting the "a" Elements
tag.appendChild(ImgNavBar);
tag.appendChild(NavBarOb1);
tag.appendChild(NavBarOb2);
tag.appendChild(NavBarOb3);
tag.appendChild(NavBarOb4);

//Adding Styles
let Styles = document.getElementById("NavId");
Styles.classList.add("topnav")
//--------------------------------------------------End NavBar-----------------------------------------------------------------------------------------------------------------------------------------


//-------------------------------------------------Body Content--------------------------------------------------------------------------------------------------
let space = document.createElement("br")
let TabBody = document.createElement("div");
TabBody.id = "BodyMain";
let BodyImg = document.createElement("img");
element.appendChild(space);
element.appendChild(TabBody);
BodyImg.alt ="Img-Boddy"
BodyImg.src ="https://lh4.googleusercontent.com/1ClelnhE69INfK-vVBtKLCt4ypoo0CIeWV9TPKNmqNny1rUvRaQVXeJduqAmKmruOBxUBEqVVIcW-78LTmjMHOSVWm1jeTIPo9vDhcMcBvCS9HsxxIORtf3AgOgJlaEblwfXgMFp"
TabBody.appendChild(BodyImg);
BodyImg.style.width = "1517.0px"
BodyImg.style.overflow ="hidden"
