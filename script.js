//  Java Script if - else  And  Conditional (Ternary) Operator


//  Example - of ==  if/else 👇👇👇👇  ===========



// ================ Example - 1  ==============
function chakeNumber (num) {
if(num > 0)
    return "positive"


else if(num < 0 ){
    return "Negative"
}

else {
    return "Zero"
}
}
console.log(chakeNumber(10));

// ================ Example - 2  ==============

function leepYear (year){
    if((year % 4 === 0 && year % 100 !==0 )||
year % 400 === 0
){
    return " Leep Year...... "
}

else {
    return " Is Not A Leep Year"
}
}

console.log( leepYear(2024) );

  AKS - Traner 
function leepYear (year){
    if((year % 4 === 0 && year % 100 !==0 )||
year % 400 === 0
){
    return " Leep Year...... "
}

else {
    return " Is Not A Leep Year"
}
}

console.log( leepYear(2024) );


// ================ Example - 3  ==============
 let  multupul = (a , b) =>{
if (a*b >= 100){
    return "Product is 100 more than"
}
else{
    return "Product is Less......... than 100"
}
 } 

 console.log(multupul(10,20));
 console.log(multupul(4,2));
 console.log(multupul(10,10));
 console.log(multupul(10 ,5));

// ================ Example - 4  ==============

// 👉 0-12 = " Child"  - 12-19 = "Theen"  -  20👆 = "Adul" 

const DeterMineAgeGroup = (age) =>{
    if(age >= 0  && age <=12 ){
 return "Child"
    }

    else if (age >= 12 && age <= 19){
        return "Teen"
    }

    else if (age >= 20 ){
        return "Adult"
    }

    else {
        return "Invaild Age"
    }

}
console.log(DeterMineAgeGroup(10));
console.log(DeterMineAgeGroup(17));
console.log(DeterMineAgeGroup(22));


// ================ Example - 5  =============
const startWithWord =  (str,word) =>{
if(str.startsWith(word)){
    return `starts With ${word}`
}
else{
    return `Does not with ${word}`
}
}

console.log(startWithWord("Hello World" , "Hello")) 
console.log(startWithWord("Java script is Fan" , "Java"))
console.log(startWithWord("Python is Great" , "Java"))
// ================ Example - 6  ==============
// ================ Example - 7  ==============
// ================ Example - 8  ==============
// ================ Example - 9  ==============
// ================ Example - 10  ==============
// ================ Example - 11  ==============
// ================ Example - 12  ==============
// ================ Example - 13  ==============
// ================ Example - 14  ==============
// ================ Example - 15  ==============
// ================ Example - 16  ==============




//  Example - of ==  Conditional (Ternary) Operator 👇👇👇👇  ===========


// ================ Example - 1  ==============
 const calculateDiscount = (price) => {
   return  price > 1000 
    ?`10 % Discount${price*0.9}` 
    : `5 % Discount${price*0.95}`;
 }

console.log(calculateDiscount(1200))