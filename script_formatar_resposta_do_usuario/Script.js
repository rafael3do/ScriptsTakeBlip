function run(entrada) {
    switch (entrada) {
        case '1':
            entrada = '1 - Compra de produto';
            break;
        case '2':
            entrada = '2 - Venda de produto';
            break;
        case '3':
            entrada = '3 - Renegociar';
            break;
        case '4':
            entrada = '4 - Falar com atendente';
            break;
         default://valor padrão caso não entre em nenhum dos casos acima
            entrada='valor invalido'
            break;
    }

    return entrada;
}