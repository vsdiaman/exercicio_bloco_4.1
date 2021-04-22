let num1 = 222;
let num2 = 222;
let num3 = 222;

if (num1 > num2 && num1 > num3) {
    console.log("O numero maior é: " + num1);
}else if (num2 > num1 && num2 > num3) {
    console.log("O numero maior é: " + num2);
}else if (num3 > num2 && num3 > num1) {
    console.log("O numero maior é: " + num3);
}else{
    console.log("Valor igual ou não existe. ")
}