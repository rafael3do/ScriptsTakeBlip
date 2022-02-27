<b>Casos de uso:</b> Esse script foi elaborado para verificars data dos feriados nacionais no bot atraves da api : https://brasilapi.com.br/api/feriados/v1/ e com um script bem simples.

<b>1° - Passo:</b> coloque a requisição http em um bloco na ação de entrada adficiones a requisição que ira fazer a verificação, o metodo da requisição é o get e a url a ser utilizada é : https://brasilapi.com.br/api/feriados/v1/{{calendar.year}} pois ela coloca o ano vigiente de forma automaica sem necessidade de ficar alterando a cada ano no bot, não é necessario cabeçalho.

<b>2° - Passo :</b> Adicione nesse bloco na ação de entrada tambem o script e salve a saida como a variavel: feriado , pois iremos utilizar ela nas condições de saida.

<b>3° - Passo :</b> Configurando a ação de saida do bloco conforme o exemplo.


<b>Teste do fluxo: <b>
<br>![image](https://user-images.githubusercontent.com/18338341/155884461-41334eb8-1d49-4555-af13-15676cae3683.png)
</br>  
  
<b>Teste do script:</b> <br>
![image](https://user-images.githubusercontent.com/18338341/155884359-b6d9f82f-c326-4a52-8f62-dbd61eb86c13.png) </br>

