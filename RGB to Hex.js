function convertToHex(){

   var r= Number(document.getElementById("R").value);
   var g= Number(document.getElementById("G").value);
   var b= Number(document.getElementById("B").value);
   
   /*check if R, G, B Is not a number */
   if(isNaN(r) || isNaN(g) || isNaN(b))
   {
   		document.getElementById("error").style.display="block";
        document.getElementById("error").innerHTML= "R ,G, B value should be of number type only";
        document.getElementById("hexContainer").style.backgroundColor="#efefef";
        document.getElementById("hexContainer").innerHTML="";
   }
   else{

    if(r>255 || g>255 || b>255){
    	document.getElementById("error").style.display="block";
        document.getElementById("error").innerHTML= "R ,G, B value can not be greater than 255";
        document.getElementById("hexContainer").style.backgroundColor="#efefef";
        document.getElementById("hexContainer").innerHTML="";

    }
    else{
    	document.getElementById("error").style.display="none"; /*hide error conainer*/

        var rHex=r.toString(16);
        var gHex=g.toString(16);
        var bHex=b.toString(16);

        if(rHex.length<2){
        	rHex="0"+rHex;
        }
        if(gHex.length<2){
        	gHex="0"+gHex;
        }
        if(bHex.length<2){
        	bHex="0"+bHex;
        }

        console.log(rHex);
        console.log(gHex);
        console.log(bHex);

        var toHex=rHex+gHex+bHex;

        /*check if color is black, then set the text color to white*/

        if(toHex==="000000"){
        	document.getElementById("hexContainer").style.color="#ffffff";
        }

        /*check if color is white, then set the text color to black*/

        if(toHex==="ffffff"){
        	document.getElementById("hexContainer").style.color="#000000";
        }

        document.getElementById("hexContainer").innerHTML="#"+toHex.toUpperCase();
        document.getElementById("hexContainer").style.backgroundColor="#"+toHex.toUpperCase();
    }   
  }    

}
