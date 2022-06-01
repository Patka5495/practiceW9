// 초기 변수 선언
let picWidth = 1001;
let moveNum = 0;
const totalNum = 7;

// ul 동적 생성
let dotList = document.createElement("ul");
dotList.setAttribute("id", "dot_list")
document.getElementById("section1").appendChild(dotList);

// li 동적 생성
for(i=0; i<7; i++){
    var li = document.createElement("li");
    li.setAttribute("id", "dot"+i)
    document.getElementById("dot_list").appendChild(li);
    li.innerText = (i+1);
    document.getElementById("dot"+i).onclick = function(){
        moveNum = this.id.substr(3,1);
        imgMove();
    }
}



// 이미지 위치 셋팅
for(var i=0; i<7; i++){
    document.getElementById("pic"+i).style.left = (picWidth*i) + "px";
}
document.getElementById("temp").innerText = "Page : " + moveNum;
document.getElementById("text0").classList.add("active");
document.getElementById("dot0").classList.add("active"); 


var aniFuction = function(){
    document.getElementById("text"+moveNum).classList.remove("active"); 
    document.getElementById("text"+moveNum).classList.add("inactive"); 
    document.getElementById("dot"+moveNum).classList.remove("active"); 
}
var imgMove = function(){
    for(var i=0; i<7; i++){
        document.getElementById("pic"+i).style.left = (picWidth*(i-moveNum)) + "px";
    }
    document.getElementById("temp").innerText = "Page : " + moveNum;
    document.getElementById("text"+moveNum).classList.remove("inactive"); 
    document.getElementById("text"+moveNum).classList.add("active"); 
    document.getElementById("dot"+moveNum).classList.add("active"); 
}


// 좌우 버튼 셋팅
let prev_btn = document.createElement("button");
prev_btn.setAttribute("id", "prev_btn")
document.getElementById("imgSet").appendChild(prev_btn);
prev_btn.innerText = "prev";

let next_btn = document.createElement("button");
next_btn.setAttribute("id", "next_btn")
document.getElementById("imgSet").appendChild(next_btn);
next_btn.innerText = "next";


// 버튼에 따른 위치 이동
document.getElementById("prev_btn").onclick = function(){    
    aniFuction();
    if(moveNum > 0){
        moveNum --;
    }else{
        moveNum = 6;    
    }
    imgMove();
}
document.getElementById("next_btn").onclick = function(){  
    aniFuction();
    if(moveNum < (totalNum-1)){
        moveNum ++;
    }else{
        moveNum = 0;
    }         
    
    imgMove();
}


// document.getElementById("dot0").onclick = function(){
//     moveNum = 0;
//     imgMove();
// }
// document.getElementById("dot1").onclick = function(){
//     moveNum = 1;
//     imgMove();
// }
// document.getElementById("dot2").onclick = function(){
//     moveNum = 2;
//     imgMove();
// }








// for(var i=0; i<10; i++){
//     console.log(1);
// }

