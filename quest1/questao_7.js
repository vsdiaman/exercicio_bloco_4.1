let notas = 0;
let resultado = (notas / 100) * 100;
    
if (notas >=1 && notas <= 50) {
    console.log("O conceito da nota é: F\n" + "Sua porcentagem de nota é: " + resultado+"%");
}else if(notas >= 50 && notas < 60) {
    console.log("O conceito da nota é: E\n" + "Sua porcentagem de nota é: " + resultado+"%");
}else if(notas >= 60 && notas < 70) {
    console.log("O conceito da nota é: D\n" + "Sua porcentagem de nota é: " + resultado+"%");
}else if(notas >= 70 && notas < 80) {
    console.log("O conceito da nota é: C\n" + "Sua porcentagem de nota é: " + resultado+"%");
}else if(notas >= 80 && notas < 90) {
    console.log("O conceito da nota é: B\n" + "Sua porcentagem de nota é: " + resultado)+"%";
}else if(notas >= 90 && notas <= 100) {
    console.log("O conceito da nota é: A\n" + "Sua porcentagem de nota é: " + resultado+"%");
}else if(notas <= 0 || notas > 100){
    console.log("erro404")
}



