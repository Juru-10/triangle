function myFunction()
  var fv=document.getElementById("fv").value;
  var sv=document.getElementById("sv").value;
  var tv=document.getElementById("tv").value;
  var msg1="Your triangle is ";
  var msg2=" triangle.";
  var res=["EQUILATERAL","ISOSCELES","SCALENE","NOT a triangle"];
  var resp;
  if((fv>0&&sv>0&&tv>0)&&(fv+sv>tv||sv+tv>fv||tv+fv>sv)){
    if((sv==tv)&&(sv==fv)&&(fv==tv)){
      resp = msg1+res[0]+msg2;
    }
    else if(fv==sv||fv==tv||sv==tv){
      resp = msg1+res[1]+msg2;
    }
    else if(fv!=sv&&sv!=tv&&fv!=tv){
      resp = msg1+res[2]+msg2;
    }
  }
