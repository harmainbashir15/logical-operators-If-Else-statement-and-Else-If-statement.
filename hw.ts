//LOGICAL OPERATORS

//1- &&  operators

let karachiscore = 154
let islamabadscore = 120
console.log(karachiscore == islamabadscore && karachiscore == 154)
                  //false                           //true


let students = 15
let teachers = 4
console.log(students == 4 && teachers == 15)
             //false         //false

let apple =  9
let mango = 2
console.log(apple == 9 && mango == 2)
              //true         //true


//2- or operators  

let pencil = 20
let children = 7
console.log(pencil == children || children == 20)
                 //false              //false


let num1 = 23
let num2 = 44
console.log(num1 == 23 || num2 == 44 )
               //true       //true


let coldrink = 6
let juice = 2
console.log(coldrink == juice || juice == 2)
                //false            //true


//3- not operators

let bluedress = 1
let blackdress = 9
console.log( !(bluedress == blackdress ))
     //false but ans is true


let person = 4
let tea = 4
console.log(!(person == tea))
     //true but ans is false


 //IF AND IF-ELSE STATEMENTS 
 
 let ispartytoday = true;
 if(ispartytoday){
    console.log("Wear black dress")
 } else{
    console.log("Wear blue Dress")
 }



 let name1 = "Elaf"
 if(name1 == "Harmain"){
    console.log("name is Harmain")
 }else{
    console.log("name is not Harmain")
 }

 let single = true
 if(single){
    console.log("not married")
 }else{
    console.log("married")
 }



 //ELSE IF STATEMENTS

 let matchscore = 115
 if(matchscore == 120){
    console.log("score is 120")
 } else if (matchscore == 125){
    console.log("score is not 125")
 }else if(matchscore == 115){
    console.log("score is right")
 }else{
    console.log("score is above")
 }


 let num1 = 15
 if(num1 == 20){
    console.log("number is 20")
 }else if(num1 == 44){
    console.log("number is not 44")
 }else if(num1 == 30){
    console.log("number is 30")
 }else if (num1 == 15){
    console.log("number is 15")
 }else{
    console.log("number is not 15")
 }


 let labmarks = 77
 if(labmarks == 45){
    console.log("marks are 45")
 }else if (labmarks == 75){
    console.log("right marks")
 }else{
    console.log("marks are above")
 }