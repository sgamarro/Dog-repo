var xbox ={
  Manufacture: "Microsoft",
  Memory:"1TB",
  RAM:"16 GB",
  FPS:"120fps",
  Graphics:"AMD RDNA graphics "
  };
var ps5 ={
    Manufacture: "Sony",
    Memory:"825 GB",
    RAM:"16 GB",
    FPS:"120fps",
    Graphics: "AMD RDNA graphics" 
} ;

var swit ={
    Manufacture: "Nintendo",
    Memory:"32GB",
    RAM:"4GB",
    FPS:"60fps",
    Graphics:"NVIDIA GPU"
};


function xboxSpec(){
 document.getElementById('xbox').innerHTML = JSON.stringify(xbox);
 var x = document.getElementById("xbox");
 if (x.style.display === "none") {
   x.style.display = "block";
 } else {
   x.style.display = "none";
 }
}
xboxSpec();
function ps5Spec(){
  document.getElementById('ps5').innerHTML = JSON.stringify(ps5);
  var x = document.getElementById("ps5");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
 }
 function switSpec(){
  document.getElementById('swit').innerHTML = JSON.stringify(swit);
  var x = document.getElementById("swit");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
 }