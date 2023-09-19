var number = 456;
var lastNumber = 0;
var sortNumber = 0;

while(number>=1) {
    lastNumber = number % 10;
    sortNumber = sortNumber*10 + lastNumber;
    number /= 10;
    
}
console.log("So dao nguoc la: ",sortNumber);