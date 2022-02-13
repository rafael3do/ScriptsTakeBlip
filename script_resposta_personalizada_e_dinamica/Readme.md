<b>Caso de uso</b>: Enviar um menu de opções de 1 a 4 de forma personalizada de acordo com uma requisição http que tras as lojas proximas do cep digitado.

<b>1°- Passo: </b> Perguntar para o contato o cep dele e bater com uma api propia nesse exemplo não irei mostrar a requisição em si apenas a resposta <b>:</b>
<code>{ "success": true, "status": 200, "response": [ { "Id": "52", "Nomedaloja": "Loja Amarela", "Endereco": "Rua das amarelas", "cep": "32240020" }, { "Id": "33", "Nomedaloja": "Loja Azul", "Endereco": "Rua das azuis", "cep": "32245025" }, { "Id": "41", "Nomedaloja": "Loja Verde", "Endereco": "Rua das verdes", "cep": "32248038" }, { "Id": "15", "Nomedaloja": "Loja Roxa", "Endereco": "Rua das roxas", "cep": "32250050" }, { "Id": "26", "Nomedaloja": "Loja Lilas", "Endereco": "Rua dos lilas", "cep": "32300030" }, { "Id": "6", "Nomedaloja": "Loja Cinza", "Endereco": "Rua das cinzas", "cep": "32400040" } ] }</code>
e tratar ela para criar de forma dinamica a escolha do usuario.Na ação de entrada do bloco que faz a requisição http vamos adicionar um executar script apos a requisição:
<br>![image](https://user-images.githubusercontent.com/18338341/153756645-3e369f80-e720-40c7-aecc-0140f8c3861d.png)</br>
Iremos utilizar o script_trata_http e ficará assim(com a resposta da requisição http na variavel(response) de entrada e iremos utilizar a variavel(lojas) de saida ) :

<br>![image](https://user-images.githubusercontent.com/18338341/153756693-17ca33c6-83c4-47fd-8f8d-351207d757c2.png)</br>
Na aba de conteudo vamos montar a escrita para o usuario ver : 
<br>![image](https://user-images.githubusercontent.com/18338341/153756788-d2e06eef-1f97-4f59-b03f-3017dfa04c21.png)</br>
Iremos salvar o input do usuario tambem para utilizar no script de saida desse bloco: 
<br> ![image](https://user-images.githubusercontent.com/18338341/153756819-f592f306-316b-4444-911a-15f4b06ffda0.png)</br>

<b>2°- Passo: </b> Agora na ação de saida do bloco iremos utilizar o script trata escolha, nesse ponto tenha atenção pois terá duas variaveis de entrada(response e escolha) e vamos utilizar a varivel(escolheu) como saida:
<br>![image](https://user-images.githubusercontent.com/18338341/153756874-ca36c0a8-533f-4373-a3c6-1aae677445da.png)</br>
No bloco seguinte vamos utilizar a variavel que salvamos na saida do script da seguinte forma:
<br> ![image](https://user-images.githubusercontent.com/18338341/153756917-701fa44c-3143-43d5-b8a2-fb8d6d72fb70.png)
</br>



Teste do fluxo:
<br>![image](https://user-images.githubusercontent.com/18338341/153755925-b6a65e54-6fe1-400e-a666-8c113eb5c7ff.png)
