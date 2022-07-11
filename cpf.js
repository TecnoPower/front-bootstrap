let cpf = [7, 1, 1, 3, 7, 3, 3, 8, 4];
let i = 10;
let soma = 0;
for (let index = 0; index < cpf.length; index++) {
     soma += cpf[index]*i;
     console.log(cpf[index]+"*"+i);
     i--
}
console.log(soma/11);
//19 1+9=10
//considera-se 10 como 0, 0 é o próximo número do cpf