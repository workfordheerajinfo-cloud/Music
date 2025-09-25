const userlocation=document.getElementById("userLocation")  // for selection the element... easiest way to select the html element by using Id....
converter=document.getElementById("converter");
icon=document.querySelector(".weathericon")
temperature=document.querySelector(".temperature")
feelslike=document.querySelector(".feels-like")
description=document.querySelector(".description")
date=document.querySelector(".date")
city=document.querySelector(".city")



HValue=document.getElementById("HValue")
WValue=document.getElementById("WValue")
SRValue=document.getElementById("SRValue")
SSValue=document.getElementById("SSValue")
CValue=document.getElementById("CValue")
UVValue=document.getElementById("UVValue")
PValue=document.getElementById("PValue")


forecast=document.querySelector(".forecast")

// we need to add the end points of the weather right for that i'll add two global variables first one as weather Api end point and then second one as weather data end point so here inside this i'm going to use the weather Api open data so for that here

WEATHER_API_END=""
WEATHER_DATA_ENDPOINT=""


function finduserlocation(){ //Alert is issued by the browser not by webpage.. function is a block of code which is used to perform a specific task...
    alert(1);

}



