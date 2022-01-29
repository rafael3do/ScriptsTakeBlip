Caso de uso: Remover os caracteres especiais para envio para uma api ou facilitar o entendimento do bot.


1°Passo: Apos o bloco de entrada criar um bloco para receber o input do usuario e apos isso vamos amazenar essa informação em uma variavel:


Testes realizados:

![image](https://user-images.githubusercontent.com/18338341/151677117-eec71181-793a-442e-a470-152bc18b721b.png)

No teste acima é possivel ver que o ponto e a virgula ainda aparecem e para remove poder adicionar as linhas abaixo:

<script>
        .replace(/[.]+/g, "")  
      .replace(/[,]+/g, "") 
  <script>
