function run() {
    var cumprimento='';//variavel onde vamos armazenar o cumprimento
    let data = new Date();//pegamos a data atual
    let hora = data.getHours();//filtramos para pegar apenas a hora.
    
    if(hora>6 && hora<13){// condições para retornar a mensagem conforme o horario.
        cumprimento = ' bom dia, tudo bem? ';
    }else if (hora>13 && hora<19){
        cumprimento = ' boa tarde, tudo bem? ';
    }else if (hora>19 && hora<6){
        cumprimento = ' boa noite, tudo bem? ';
    }
    return cumprimento; 
}