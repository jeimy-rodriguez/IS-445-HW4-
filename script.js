document.addEventListener("keydown", changeSize);

function changeSize() {
    var e = event.keyCode;
    var size = document.getElementById("balloon").style.fontSize;
    if (e == 73){
        if (parseInt(bSize)>60){
            document.getElementById("balloon").innerHTML = "💥";
            document.removeEventListener('keyup', changeSize);
        }
        else{
            if(size==""){
                size=30;
            }
            var inflateSize = parseInt(size) + 5;
            document.getElementById("balloon").style.fontSize=inflateSize.toString()+"px";
        }
        
    }
    else if (e == 68){
        console.log("d was pressed");
        if(parseInt(size)==0){
            document.getElementById("balloon").innerHTML = "Done";
            document.removeEventListener('keyup', changeSize);
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