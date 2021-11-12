function calculateDogAge(num) {
    var degree = document.getElementById("dog").value;
    var tempCalc = degree*7;
    document.getElementById("celDeg").innerHTML = Math.round(tempCalc);
    } 
calculateDogAge();

