const age = 19;
if(age<15){
    console.log("Young")
}else if(age>15 && age<30){
    console.log("Adult")
}else{
    console.log("Old")
}


// const a = 31;
// var b = a<30?"Adult":"Old";
// console.log(b);

// if age less than 15 , print ""Young"" , age greater than 15 but less than 30 print ""Adult"" else ""Old"" by using if else ladder


// Use switch case and create Week calendar Monday - print 0 , Tuesday - print 1 and so on Sunday - print 6





const a = 1;

switch (a) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("error");
        break;
}