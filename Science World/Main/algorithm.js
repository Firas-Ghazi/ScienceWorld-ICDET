var contentTra, faceBG, faceBS, h1Color, imgOpacity, reSet = true;

function personOver(i)
{
	var faceElement = document.getElementsByClassName("face")[i];
	var contentElement = document.getElementsByClassName("content")[i];

	if (reSet)
	{
		faceBG = faceElement.style.backgroundColor;
		contentTra = contentElement.style.transform;
		faceBS = faceElement.style.boxShadow;

		h1Color = document.querySelectorAll(".face h1")[i].style.color;
		imgOpacity = document.querySelectorAll(".face img")[i].style.opacity;

		reSet = false;
	}
	
	faceElement.style.backgroundColor ="#ff0053";
	contentElement.style.transform = "translateY(0px)";
	faceElement.style.boxShadow = "10px 0px 20px rgba(255,0,83,1)";

	document.querySelectorAll(".face h1")[i].style.color = "rgba(255,255,255,1)";
	document.querySelectorAll(".face img")[i].style.opacity = "1";
}

function personOut(i)
{
	var faceElement = document.getElementsByClassName("face")[i];
	var contentElement = document.getElementsByClassName("content")[i];

	faceElement.style.backgroundColor = faceBG;
	contentElement.style.transform = contentTra;
	faceElement.style.boxShadow = faceBS;

	document.querySelectorAll(".face h1")[i].style.color = h1Color;
	document.querySelectorAll(".face img")[i].style.opacity = imgOpacity;

	reSet = true;
}

//person1
document.getElementsByClassName("face")[0].addEventListener("mouseover", function() {
	personOver(0);
});

document.getElementsByClassName("face")[0].addEventListener("mouseout", function() {
	personOut(0);
});

document.getElementsByClassName("content")[0].addEventListener("mouseover", function() {
	personOver(0);
});

document.getElementsByClassName("content")[0].addEventListener("mouseout", function() {
	personOut(0);
});

//person2
document.getElementsByClassName("face")[1].addEventListener("mouseover", function() {
	personOver(1);
});

document.getElementsByClassName("face")[1].addEventListener("mouseout", function() {
	personOut(1);
});

document.getElementsByClassName("content")[1].addEventListener("mouseover", function() {
	personOver(1);
});

document.getElementsByClassName("content")[1].addEventListener("mouseout", function() {
	personOut(1);
});

//person3
document.getElementsByClassName("face")[2].addEventListener("mouseover", function() {
	personOver(2);
});

document.getElementsByClassName("face")[2].addEventListener("mouseout", function() {
	personOut(2);
});

document.getElementsByClassName("content")[2].addEventListener("mouseover", function() {
	personOver(2);
});

document.getElementsByClassName("content")[2].addEventListener("mouseout", function() {
	personOut(2);
});