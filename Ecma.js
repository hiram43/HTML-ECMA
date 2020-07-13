// Vanilla JavaScript
//----------------------------------------------Creating a NavBar--------------------------------------------------------------------------------------------------------------------------------
let tag = document.createElement("div");
tag.id = "NavId";
//Creating Nav Elements
let NavBarOb1 = document.createElement("a");
NavBarOb1.href = "https://www.google.com/"
NavBarOb1.target ="_blank"
let NavBarOb2 = document.createElement("a");
NavBarOb2.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
NavBarOb2.target ="_blank"
let NavBarOb3 = document.createElement("a");
NavBarOb3.href = "https://www.youtube.com/watch?v=t8FHSNIc3wI"
NavBarOb3.target ="_blank"
let NavBarOb4 = document.createElement("a");
NavBarOb4.target ="_blank"
NavBarOb4.href ="https://www.youtube.com/watch?v=12DPT3uutdU"
let ImgNavBar = document.createElement("img");
ImgNavBar.alt = "TopImg"
ImgNavBar.href ="https://www.youtube.com/watch?v=aKD86dc4U0c"
NavBarOb1.innerHTML = "News";
NavBarOb2.innerHTML = "Nudes";
NavBarOb3.innerHTML = "Secret Song";
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
BodyImg.style.width = "78%"
BodyImg.style.marginLeft = "225px"
BodyImg.style.marginTop ="100px"

//-----------------------------------------------End Body Content----------------------------------------------------------------------------------


//-----------------------------------------------Footer--------------------------------------------------------------------------------------------------
let Footer = document.createElement("footer");
let FooterImg = document.createElement("img");
FooterImg.src ="https://juliancastiblanco.com/web/wp-content/uploads/2017/05/registrate.png"
element.appendChild(Footer);
element.appendChild(FooterImg);
FooterImg.style.width = "25%";
FooterImg.style.marginTop = "25px"
FooterImg.style.marginLeft ="40%"
