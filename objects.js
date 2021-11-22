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
 document.getElementById('xbox').innerHTML = `Manufacture: ${xbox["Manufacture"]}<br>
  Memory: ${xbox['Memory']}<br>
  RAM: ${xbox['RAM']}<br>
  FPS:${xbox['FPS']}<br>
  Graphics:${xbox['Graphics']}`;
}
function closeX(){
  document.getElementById('xbox').style.display= "none";
  
}
function ps5Spec(){
  document.getElementById('ps5').innerHTML = `Manufacture: ${ps5["Manufacture"]}<br>
  Memory: ${ps5['Memory']}<br>
  RAM: ${ps5['RAM']}<br>
  FPS:${ps5['FPS']}<br>
  Graphics:${ps5['Graphics']}`;
 }
 function closeP(){
   document.getElementById('ps5').style.display="none";
 }
 function switSpec(){
  document.getElementById('swit').innerHTML = `Manufacture: ${swit["Manufacture"]}<br>
  Memory: ${swit['Memory']}<br>
  RAM: ${swit['RAM']}<br>
  FPS:${swit['FPS']}<br>
  Graphics:${swit['Graphics']}`;
 
 }
 function closeS(){
 document.getElementById('swit').style.display="none";
 }
 

