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

function special(){
    if (dayNumber===1){
        return '1/2 off all oils';
    }    else if(dayNumber===2){
        return '2 for 1 treats';
    }    else if (dayNumber===3){
        return 'Buy one get one free';
    }else if(dayNumber===4){
        return 'Add a gummy';
    }else if (dayNumber===5){
        return 'Bring a friend';
    }else if (dayNumber===6){
        return 'Buy two edibles get one free!!';
    }else if(dayNumber===7){
        return 'Brunch and free samples';
    }else(element.classList.add("hideme"))
    
}
console.log('You got a'+ special());
element.innerHTML='check out the Special Today 🍀'  + special();
 


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