Casos de uso: Esse script foi elaborado para verificars data dos feriados nacionais no bot atraves da api : https://brasilapi.com.br/api/feriados/v1/ e com um script bem simples.

1° Passo coloque a requisição http em um bloco na ação de entrada adficiones a requisição que ira fazer a verificação, o metodo da requisição é o get e a url a ser utilizada é : https://brasilapi.com.br/api/feriados/v1/{{calendar.year}} pois ela coloca o ano vigiente de forma automaica sem necessidade de ficar alterando a cada ano no bot, não é necessario cabeçalho.

2° Passo : Adicione nesse bloco na ação de entrada tambem o script e salve a saida como a variavel: feriado , pois iremos utilizar ela nas condições de saida.

3° Passo : Configurando a ação de saida do bloco conforme o exemplo.
