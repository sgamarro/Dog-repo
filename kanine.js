var ageRef=prompt("How old are you?");
function AgeVerifier(){
    if (ageRef<21){
        location.replace("index.html");
    }
else if (ageRef>=21){
        window.alert('Welcome')
        
    }
    else{
        console.log(`Granted access`)
    }
}
AgeVerifier();

//get current location 
const today= new Date();
console.log(today);
//returns current day in number form
const dayNumber= today.getDay();
console.log(dayNumber);
//storing my output location
const element=document.getElementById('messege')

// function special(){
//     if (dayNumber===1){
//         return '1/2 off all oils';
//     }    else if(dayNumber===2){
//         return '2 for 1 treats';
//     }    else if (dayNumber===3){
//         return 'Buy one get one free';
//     }else if(dayNumber===4){
//         return 'Add a gummy';
//     }else if (dayNumber===5){
//         return 'Bring a friend';
//     }else if (dayNumber===6){
//         return 'Buy two edibles get one free!!';
//     }else if(dayNumber===7){
//         return 'Brunch and free samples';
//     }else(element.classList.add("hideme"))
    
// }
// console.log('You got a'+ special());
// element.innerHTML='check out the Special Today 🍀'  + special();
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
document.getElementById("messege").innerHTML=( `Today is ${day}`)
console.log ('Today is'+ day)
function assignGrade(score){
if(score>90){
    return 'A';
}else if (score > 80 && score<90){
    return 'B';
}else if (score>70 && score<80){
    return 'C';
}else if (score>60 && score<70){
    return 'D';
}else {
    return 'F';
}
}
console.log(`You got a` + " " + assignGrade(85));
console.log(`You got a` + " " + assignGrade(50));
//Array literal
// we assing the array to a variable//
const color=[`black`,`blue`,`grey`,`red`,`jade`];
const myAge=[10,13,16,18,21];
const compNumbs=[12>12,9===`nine`,1==2,`eight`===`Eight`,5>=5];

//JS keyword built in javascript methods new Array()

var colors = new Array(`black`,`grey`,`red`,`jade`,`blue`);
var myAges = new Array(10,13,16,18,21);

//js constructor method

const colorsa=[];
colorsa[0]=`brown`;
colorsa[1]=`grey`;
colorsa[2]=`blue`;
colorsa[3]=`red`;
colorsa[4]=`jade`;

const classNames=[`Emily`,`Lucas`,`Anthony`,`Michael`,`Luz`,`Anna`,`Shelby`];

//acess an Array
console.log(classNames);

//loop over an array//for loop
for (i=0; i<classNames.length;i++){
    console.log(classNames);
}

//Array methods
//.push("N/A") adds an item to the end of an array
//.pop() removes the last item of an array
//.unshift("N/A") adds an item at the beggining of an array
//.shift() removes the first item of an array
//.splice(2,1,item) replaces or changes the array
//

console.log(classNames.indexOf(`Lucas`));

    // Array Assignments //Create an Array called "donuts" that list 7-10 different items
    const donuts=[`chocolate`,`strawberry`,`glaze`,`oreo`,`white chocolate`,`sprinkles`,`vanilla`];

    //1 Using a loop, iterate through this array and console.log all the donuts
    
    for(i=0; i<donuts.length; i++){
console.log(donuts[i])
    }

    //2 Write the command to remove the first donut fron the array
donuts.shift();
    //3 Write the command to remove the last donuts from the array
donuts.pop();
    //4 Write the command to add a new donut "lime zest" to the front of the array
    //5 Write the command to add another donut "lemon pie" to the end of the array
    //6 Use either the join() or toString() method to convert an array to a string.
    //7 Write the command to make a copy of the array using slice. The copy should NOT include two donuts.
    //8 Write the command that gives the indexOf where "chocolate" is located.
    //9 Write the command that gives the indexOf where "glazed" is located (You may get a negative number).
    //10 **Using the splice method, remove one donut from the array and add another.
    //11 **Create a new variable called withSyed and set it equal to the people array concatenated with the string of "Bob".
    //12 **Create a function called getdonuts() that will display all the donuts in your array and display on your page.

