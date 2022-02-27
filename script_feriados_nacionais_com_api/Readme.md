<b>Casos de uso:</b> Esse script foi elaborado para verificars data dos feriados nacionais no bot atraves da api : https://brasilapi.com.br/api/feriados/v1/ e com um script bem simples.

<b>1° - Passo:</b> coloque a requisição http em um bloco na aba ações e na ação de entrada adicione a requisição que ira fazer a verificação, o metodo da requisição é o get e a url a ser utilizada é : https://brasilapi.com.br/api/feriados/v1/{{calendar.year}} pois ela coloca o ano vigiente de forma automaica sem necessidade de ficar alterando a cada ano no bot e não é necessario cabeçalho.
<br>![image](https://user-images.githubusercontent.com/18338341/155884637-cc1c8da8-9b65-4d18-9911-5cf57aef87aa.png)
</br>
<br> ![image](https://user-images.githubusercontent.com/18338341/155884616-e32485b2-18b4-45b4-a9cb-459a61f4a4db.png) </br>

<b>2° - Passo :</b> Adicione nesse bloco na ação de entrada tambem o script e salve a saida como a variavel: feriado , pois iremos utilizar ela nas condições de saida.
<br>![image](https://user-images.githubusercontent.com/18338341/155884801-be35d123-983f-4d52-87f0-53e7415ba72b.png)
</br>
<b>3° - Passo :</b> Configurando a ação de saida do bloco conforme o exemplo.
<br>![image](https://user-images.githubusercontent.com/18338341/155884841-45f7f224-6973-4e7e-b0dc-7201c434bdec.png)
</br>

<b>Teste do fluxo: <b>
<br>![image](https://user-images.githubusercontent.com/18338341/155884461-41334eb8-1d49-4555-af13-15676cae3683.png)
</br>  
  
<b>Teste do script:</b> <br>
![image](https://user-images.githubusercontent.com/18338341/155884359-b6d9f82f-c326-4a52-8f62-dbd61eb86c13.png) </br>

