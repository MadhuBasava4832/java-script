// import dsp from"./3.2.js"
// var x={
//     name : "hanu",
//     age : 20,
// }
// x.extra = dsp;
// export default x;


import area from "./3.2.js";
var grading={
    area,
    grades:function(){
    var g=window.prompt("enter your marks");
    var grade;
    if (90<g && g<=100){
        grade="A";
    }
    else if (80<g && g<=90){
        grade="B";
    }
    else if (70<g && g<=80){
        grade="C";
    }else if (60<g && g<=70){
        grade="D";
    }
    else{
        grade="Fail";
    }
    return grade;
}
}
export default grading;
