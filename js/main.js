//呈現字串
document.write("安安"); 

//字串
"早"

//數字
5428.444

//布林值
true
false

//變數
//只能是數字或英文(大小寫均可)或_或$的組合
//開頭不可是數字
var my_name = "Shawn";
document.write(my_name);
document.write("</br>");
var my_age = 20;
document.write(my_age);
document.write("</br>");
var is_male = true;
document.write(is_male);
document.write("</br>");
document.write(my_name + ":說早安妳各位的");
document.write("</br>")
my_name = "正妹"
document.write(my_name + ":早安");

//字串寫法及用法
var phrase = "hello \"World";
//            012345 67891011
document.write(phrase.charAt(7));
document.write("</br>");
document.write(phrase.indexOf("W"));
document.write("</br>");
document.write(phrase.indexOf("M"));
document.write("</br>");
var text = "ahahaha";
document.write(phrase + text);
document.write("</br>");
document.write(phrase + text.length);
document.write("</br>");
document.write(phrase.toUpperCase());
document.write("</br>");
document.write(phrase.toLowerCase());
document.write("</br>");
document.write(phrase.substring(4,11));
document.write("</br>");
//數字用法
var number = 5
document.write((58+42)*number);
document.write("</br>");
//+-*/加減乘除
document.write(100%7);
document.write("</br>");
//%=取餘數
document.write(Math.abs(-888-112));
document.write("</br>");
//Math.abs取絕對值
document.write(Math.max(-888,-112,-5454,-99999,-8,number));
document.write("</br>");
//Math.max取最大值
document.write(Math.min(-888,-112,-5454,-99999,-8,number));
document.write("</br>");
//Math.min取最小值
document.write(Math.round(-9.8));
document.write("</br>");
//Math.round四捨五入
document.write(Math.pow(-8,5));
document.write("</br>");
//Math.pow做次方
document.write(Math.sqrt(36));
document.write("</br>");
//Math.sqrt開根號
document.write(Math.round(Math.random()*10));
document.write("</br>");
//Math.random從數字0-1隨機傳數

//製作一個基本計算機
// var num1 = prompt("請輸入數字1");
// var num2 = prompt("請輸入數字2");
// num1=parseFloat(num1);
// num2=parseFloat(num2);
// document.write(Math.pow(num1,num2)*num1+Math.sqrt(Math.pow(num1,8))*num2);
//parseInt將字串之整數為值轉為"數字"
//parseFloat將字串之數字完整轉為"數字"

//陣列 array
var test = [true,888,"早安",100];
test[3] = 90;
document.write(test[0]);
document.write("</br>");
document.write(test.length);
document.write("</br>");

//函式 function
function hello(name,age){
    document.write("哈囉"+name+"你今年"+age+"歲嗎?");
}
hello("Shawn","18");
document.write("</br>");
function add(number1,number2){
    document.write(number1 + number2);
}
add(8,14);
document.write("</br>");
function tryy(ha1,ha2){
    return ha1 * ha2 ;
}
document.write( tryy(99,100) );
document.write("</br>");

//if判斷
//first situation
var hungry = true;
if(hungry){
    document.write("我就去吃飯!");
}

document.write("</br>");
//second situation 
var rainy = true 
if(rainy){
    document.write("我就開車去上班!");
}
else{
    document.write("我就走路!");
}

document.write("</br>");
//third situation
var score = 2
if(score==100){
    document.write("我給你1000");
}
else if(score>=80){
    document.write("我就給你500");
}
else if(score>=60){
    document.write("我就給你300");
}
else{
    document.write("你就給我5000");
}

document.write("</br>");
//&&(且)、||(或)(輸入法:shift+\)、!(反面之意)(ex:!rainy)
//                                         (!+變數名稱)
//練習:呈現最大值(也可使用if、else if、else搭配">="去撰寫)
// var firstnum = prompt("輸入數字一");
// var secondnum = prompt("輸入數字二");
// var thirdnum = prompt("輸入數字三");
// firstnum=parseInt(firstnum);
// secondnum=parseInt(secondnum);
// thirdnum=parseInt(thirdnum);
// function num(firstnum,secondnum,thirdnum){
//     Math.max(firstnum,secondnum,thirdnum);
// }
// if(num==firstnum){
//     document.write(firstnum+"是最大的數字");
// }
// else if(num==secondnum){
//     document.write(secondnum+"是最大的數字");
// }
// else{
//     document.write(thirdnum+"是最大的數字");
// }

//物件 object
//key 鍵 
//value 值
var person = {
    myname:"Shawn",
    myage:18,
    is_man:true,
    print_my_name:function(){
        document.write(this.myage);
    }
};
document.write(person);
document.write("</br>");
document.write(person.myname);
document.write("</br>");
person.print_my_name;

//真實世界物件
var movie = {
    title:"刻在你心底的名字",
    maker:"氧氣電影",
    duration:114,
    actors:[
        {
            hisname:"陳昊森",
            hisage:24,
            he_is_male:true
        },
        {
            hisname:"曾敬驊",
            hisage:23,
            he_is_male:true
        }
    ]
}
document.write(movie.actors[1].hisname);
document.write("</br>");

//while 迴圈
var i = 1;
while(i<=100){
    document.write(i);
    document.write("</br>");
    i=i+1; //(i=i+1)=i++
}

do{
    i++;
    document.write(i+"嗨");
    document.write("</br>");
}while(i<=10)

//密碼檢驗程式
// var password = 123456789;
// var input;
// var entry_count = 0;
// var entry_limit = 3;
// var out_of_limit= false;

// while(password!=input && !out_of_limit){
//     entry_count++;
//     if(entry_count<=entry_limit){
//         input=prompt("請輸入密碼");
//     }
//     else{
//         out_of_limit=true;
//     }
// }

// if(out_of_limit){
//     alert("超出登入次數");
// }
// else{
//     alert("登入成功");
// }

//for 迴圈
var friends = ["black","white","green"];
for(var q = 0;q<friends.length;q++){
    document.write(friends[q]);
    document.write("</br>");
}

// var qusetions = [
//     {
//         prompt:"草莓甚麼顏色?\n(A)黃色\n(B)紅色\n(C)藍色",
//         answer:"B"
//     },
//     {
//         prompt:"一公尺幾公分?\n(A)1\n(B)10\n(C)100",
//         answer:"C"
//     },
//     {
//         prompt:"一公斤幾公克?\n(A)10\n(B)100\n(C)1000",
//         answer:"C"
//     }
// ]
// var score1 = 0;
// for(var p = 0;p<qusetions.length;p++){
//     var input1=prompt(qusetions[p].prompt);
//     if(input1==qusetions[p].answer){
//         score1++;
//         alert("答對了!");
//     }
//     else{
//         alert("答錯了!");
//     }
// }
// alert("總共答對了" + score1 + "題!")
