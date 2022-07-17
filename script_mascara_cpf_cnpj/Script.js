function run (entrada){
    let cpf = entrada;
    let ultimosn = cpf.slice(-2);
    let mascara = ultimosn.padStart(cpf.length, '*');
    return mascara;
    }