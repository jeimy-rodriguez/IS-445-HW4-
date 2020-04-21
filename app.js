console.log("Balloon changed")

document.addEventListener("keyup", sizeChange); 
document.addEventListener("keyup", feedback)

function feedback() {
    console.log("key was pressed")
}

function sizeChange() {
    var b = event.keyCode;
    var size = document.getElementById("balloon").style.fontSize;
    if (b == 73){
        /*console.log("key pressed")*/
        if (parseInt(size)>60){
            document.getElementById("balloon").innerHTML = "💥";
            document.removeEventListener('keyup', sizeChange);
            console.log(sizeChange)
        }
        else{
            if(size==""){
                size=30;
            }
            var inflateSize = parseInt(size) + 5;
            document.getElementById("balloon").style.fontSize=inflateSize.toString()+"px";
        }
        
    }
        else if (b == 68){
        console.log("key was pressed");
        if(parseInt(size)==0){
            document.getElementById("balloon").innerHTML = "Done";
            document.removeEventListener('keyup', sizeChange);
            console.log(parseInt)
        } 
        else{
            if(size==""){
                size=30;
            }
            var deflateSize = parseInt(size) - 10;
            document.getElementById("balloon").style.fontSize = deflateSize.toString() +"px";
        }       
    }
}