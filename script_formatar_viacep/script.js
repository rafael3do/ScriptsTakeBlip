
//modelo de entrada = {  "cep": "01001-000",  "logradouro": "Praça da Sé",  "complemento": "lado ímpar",  "bairro": "Sé",  "localidade": "São Paulo",  "uf": "SP",  "ibge": "3550308",  "gia": "1004",  "ddd": "11",  "siafi": "7107"}

function run(entrada) {
    if (entrada) {
        let conversor = JSON.parse(entrada);
        let rua = conversor.logradouro;
        let bairro = conversor.bairro;
        let localidade = conversor.localidade;
        return ' Rua ' + rua + ' Bairro ' + bairro + ' Cidade ' + localidade;
    }
    return 'Entrada Vazia';
}