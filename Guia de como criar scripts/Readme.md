> # Olá, hoje vou mostar um pouco de como criar script para usar em bots feitos na plataforma Take Blip e também pode ser usado em sites e aplicações.

<br>1.0-Vou demostrar com o google chrome como montar scripts basicos e explicar os passos, apos isso irei demostrar com a plataforma da Take Blip como ficaria.</br>
<br>1.1-Abra o google chorme pressione F12 e irá abrir a tela de desenvolvimento.</br>
![image](https://user-images.githubusercontent.com/18338341/152656012-a2ba15d3-8d91-449a-9f92-2a75bb2beca3.png)
<br>1.2-Clique em "Console"</br>

1.3-Apos isso coloque o codigo:
<code> function run(entrada){
    let resultado = entrada *2;                                                 return resultado;
} </code>

![image](https://user-images.githubusercontent.com/18338341/152656116-dfe3b5fb-fede-4362-85dd-18feb0ed9ea8.png)
    
<br>Apos isso vamos executar o comando</br>
<code> run(4) </code>

<br>Teremos o retorno de 8, pois o codigo pega o valor de entrada e multiplica por 2

<br>Com scripts podemos fazer calculos matematicos, trata objetos em json e entrada de texto ou de valores booleanos, nesse acima estamos so fazendo uma calculo simples para que possamos entender o que é a entrada e o que é a saida.</br>
     
# Agora iremos mostrar isso na plataforma da Take Blip 

<br>1° Em um bloco vamo solicitar que o usuario digite o numero e salvares a sua resposta em uma variavel:</br>
     
![image](https://user-images.githubusercontent.com/18338341/152661362-6cc0e9b8-8d5a-4c3f-91bb-d901f4babe59.png)

![image](https://user-images.githubusercontent.com/18338341/152661368-b4cbd678-5402-4ce0-91a0-68ba6e55007f.png)

<br>2° Passo no bloco na ação de saida colocaremos o executar script passando a variavel de entrada e salvaremos a saida.</br>
![image](https://user-images.githubusercontent.com/18338341/152661388-6f91a776-b37c-42b5-91cd-b282e7bd0dbe.png)

<br>3° Passo iremos criar no proximo bloco o retorno do script.</br>
    
![image](https://user-images.githubusercontent.com/18338341/152661410-88f6b8a1-d794-48ad-a5e6-b887f2e97ef0.png)

<br>Teste realizado : </br>
 
![image](https://user-images.githubusercontent.com/18338341/152661431-ddf78b06-aa9b-4e16-9aab-705aaf756b64.png)

