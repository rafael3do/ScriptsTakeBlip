<b>Caso de uso</b> : Reconhecer o cpf do usuario que utiliza o bot sem necessidade de fixar uma formação como orientar o contato a mandar sem ponto(11122233344) e traço ou pedir que mande com ponto e traço(111.222.333-44) ou que mande com espaço. Esse script vai entender qualquer uma dessas entras e não vai utilizar regex o outro ponto é que ele pode ser adequado para funcionar com cpf e cnpj sem precisar de um script para cada caso.

<b>1°- Passo</b> : No bloco onde você coloca solicitação do cpf salve a entra do usuario em uma variavel. 

<b>2°- Passo</b> : No bloco de validação do cpf na ação de entrada coloque o script: 

<br><code> </code></br>

<b>Teste do fluxo:</b>
<br>![image](https://user-images.githubusercontent.com/18338341/183294367-4bfaa013-e973-43b1-84c6-989b4981909d.png)</br>
<br>![image](https://user-images.githubusercontent.com/18338341/183294418-4f4015df-e89f-482f-a15c-015a6b754174.png)</br>
<br>![image](https://user-images.githubusercontent.com/18338341/183294474-3bef8862-fb71-42ed-8de8-f75214733b16.png)</br>
<br>![image](https://user-images.githubusercontent.com/18338341/183294518-66a2cc91-7ba8-49e5-aa4b-8214dc08871b.png)</br>
<br>![image](https://user-images.githubusercontent.com/18338341/183294567-72e67818-da70-4d49-b983-6dfb8d72509a.png)</br>
<b>Teste do script: </b>
<br>![image](https://user-images.githubusercontent.com/18338341/183294632-dc1c3a1c-4175-4380-92f2-8fad11001010.png)
</br>
 ## Obs : Não recomendamos que seja solicitado informações sensiveis dentro do bot, é apenas um exemplo ilustrativo de como pode ser feito uma solução que solicita alguma entrada e a mesma é tratada de forma internar pelo script de forma inteligente de alto desempenho para garantir uma boa resposta e qualidade na navegação.
