import input from 'readline-sync';

let valor = input.question("informe o valor devido: R$ ");

if (Number(valor) <= 0) {
    console.log('O valor da dívida deve ser maior que zero!')
}

else {
    let dias_atraso = input.question("Informe quantos dias se passaram desde o vencimento do boleto: ");

    if (Number(dias_atraso) === 0) {
        console.log("Você esta em dia!")
    }

    else {
        let juros = (dias_atraso > 15) ? 10 : 5;
    
        let taxa = (Number(valor) / 100) * juros;
        let valor_total = Number(valor) + taxa;
        
        console.log(" ")
        console.log('Valor original da dívida: R$ '+valor);
        console.log('Dias atrasados: '+dias_atraso);
        console.log('Taxa de Juros: 10%');
        console.log('Valor total com juros: R$ '+valor_total);
    }
    
}

