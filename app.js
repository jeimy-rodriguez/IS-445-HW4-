document.addEventListener("keyup", sizeChange); 
/*document.addEventListener("keyup", feedback)

function feedback() {
    console.log("key was pressed")
}*/

function sizeChange() {
    var b = event.keyCode;
    var size = document.getElementById("balloon").style.fontSize;
    if (b == 73){
        /*console.log("key pressed")*/
        if (parseInt(size)>60){
            document.getElementById("balloon").innerHTML = "💥";
            document.removeEventListener('keyup', sizeChange);
        }
        else{
            if(size==""){
                size=30;
            }
            var inflate = parseInt(size) + 5;
            document.getElementById("balloon").style.fontSize=inflate.toString()+"px";
        }
        
    }
        else if (b == 68){
        console.log("D key was pressed");
        if(parseInt(size)<=5){
           document.getElementById("balloon").style.fontSize=30+"px"; 
           document.getElementById("balloon").innerHTML = "Done";
           document.removeEventListener('keydown', sizeChange);
        } 
        else{
            if(size==""){
                size=30;
            }
            var deflate = parseInt(size) - 10;
            document.getElementById("balloon").style.fontSize = deflate.toString() +"px";
        }       
    }
}