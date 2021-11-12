function tellFortune(){
    var fortune = new Array('money',' to travel','a new car','a new house',' finding love','death',' become homeless','nothing');
        var random= fortune[Math.floor(Math.random()*fortune.length)];
        document.getElementById('btn').innerHTML= "your fortune is" + " " + random ;
    }
    tellFortune();