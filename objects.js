
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
document.getElementById('xbox').innerHTML=xbox;
}
xboxSpec();
