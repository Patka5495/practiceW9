let picWidth = 1440;

// document.getElementById("pic0").style.left = "calc(1440px*0)";
// document.getElementById("pic1").style.left = "calc(1440px*1)";
// document.getElementById("pic2").style.left = "calc(1440px*2)";

// 문자 숫자 연결연산자
for(var i=0; i<3; i++){
    document.getElementById("pic"+i).style.left = (picWidth*i) + "px";
}

document.getElementById("prev_btn").onclick = function(){
    document.getElementById("pic0").style.left = (picWidth*1) + "px";
    document.getElementById("pic1").style.left = (picWidth*2) + "px";
    document.getElementById("pic2").style.left = (picWidth*3) + "px";
    if(moveNum > 0){
        moveNum --;
    }else{
        moveNum = 2;
    }

    for(var i=0; i<3; i++){
        document.getElementById("pic"+i).style.left = (picWidth*(i-moveNum)) + "px";
    }
}
let moveNum = 0;
document.getElementById("next_btn").onclick = function(){
    document.getElementById("pic0").style.left = (picWidth*-1) + "px";
    document.getElementById("pic1").style.left = (picWidth*0) + "px";
    document.getElementById("pic2").style.left = (picWidth*1) + "px";
    
    if(moveNum < 2){
        moveNum ++;
    }else{
        moveNum = 0;
    }

    for(var i=0; i<3; i++){
        document.getElementById("pic"+i).style.left = (picWidth*(i-moveNum)) + "px";
    }
}








// for(var i=0; i<10; i++){
//     console.log(1);
// }

