<br>Caso de uso: Remover os caracteres especiais para envio para uma api ou facilitar o entendimento do bot.<br>


<br>1°Passo: Apos o bloco de entrada criar um bloco para receber o input do usuario e apos isso vamos amazenar essa informação em uma variavel:<br>
![image](https://user-images.githubusercontent.com/18338341/151677251-2f94d13a-b76a-40b3-b24f-027e9f9f63ce.png)


Testes realizados:

![image](https://user-images.githubusercontent.com/18338341/151677117-eec71181-793a-442e-a470-152bc18b721b.png)

<br>No teste acima é possivel ver que o ponto e a virgula ainda aparecem e para remove poder adicionar as linhas abaixo:<br>

<code>
      .replace(/[.]+/g, "")  
      .replace(/[,]+/g, "") 
  <code>
   
              
           
