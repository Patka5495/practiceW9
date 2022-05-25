// 비교연산자
// let a = 10;
// let b = 20;
// let c = "10";
// let d = 9;

// let result;

// console.log(a>b);
// console.log(a<b);
// console.log(a==b);
// console.log(a===b);
// console.log("---------------------------------");
// console.log(a==c);
// console.log(a===c);
// console.log("---------------------------------");3
// console.log(a<=d);
// console.log(a>=d);

//===는 자료형까지 같아야 한다.


// console.log(a);
// console.log(a<b);
// console.log(result);
// console.log(typeof(result));
// console.log(Boolean(result));

// console.log(b);
// console.log(typeof(b));
// console.log(Boolean(b));




// 이벤트
// console.log(document);
// console.log(document.getElementById("prev_btn"));

let picNum = 1;
const totalNum = 5;
var picSetting = function(){
    document.getElementById("pic_num").innerText = picNum;
}
picSetting();

// 이벤트 핸들러
document.getElementById("prev_btn").onclick = function(){
    prevFuction(); // 매개인자, 매개변수
    console.log("왼쪽 눌렸어");
}
document.getElementById("next_btn").onclick = function(){
    nextFuction();
    console.log("오른쪽 눌렸어");
}

var prevFuction = function(){
    if(picNum == 1){
        picNum = totalNum;
    }else{
        picNum --;
    } 
    picSetting();
}
var nextFuction = function(){
    if(picNum == totalNum){
        picNum = 1;
    }else{
        picNum ++;
    }    
    picSetting();
}








// 함수 선언
var myFuction = function(a){
    picNum = picNum + (1*a);
    document.getElementById("pic_num").innerText = picNum;    
}