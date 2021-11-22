switch (new Date().getDay()) {
    case 0:
      day = "Brunch and free samples";
      break;
    case 1:
      day = "50% off oils";
      break;
    case 2:
       day = "2 for 1 on treats";
      break;
    case 3:
      day = "Buy one get one free";
      break;
    case 4:
      day = "Get a gummy free";
      break;
    case 5:
      day = "Bring a friend get an extra treat";
      break;
    case 6:
      day = "Buy one get one free";
  }
document.getElementById("messege").innerHTML=( `Today's special is ${day}!!!`)