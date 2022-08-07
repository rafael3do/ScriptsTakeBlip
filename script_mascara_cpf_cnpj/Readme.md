<b>Caso de uso</b> : Ao validar dados sensiveis que não devem ser expostos vamos mostrar so uma parte das credenciais nesse exemplo estou mostrando os 2 ultimos digitos do cpf, mas funciona para cnpj entre outros dados. O cenario elaborado e a pessoa digita um dado como usuario/matricula e o sistema confirme é para esse cpf que você deseja atendimento.

<b>1°- Passo</b>No bloco apos a requisição http que retorna o dado sensivel recebemos o cpf
<br>![image](https://user-images.githubusercontent.com/18338341/179419695-84e71f26-eb78-415e-b236-ad737a74bff3.png)
</br>
<b>2°- Passo</b> Na ação de entrada nos passamos o cpf e adicionamos o script abaixo:
<br>![image](https://user-images.githubusercontent.com/18338341/179419634-c1e27e42-8a0c-46a5-b079-06aa9e06c620.png)
</br>
![image](https://user-images.githubusercontent.com/18338341/179419657-0c63bc4a-ab8f-445b-96dc-237f8ba82074.png)

<br>
<code>function run (entrada){
    let cpf = entrada;
    let ultimosn = cpf.slice(-2);
    let mascara = ultimosn.padStart(cpf.length, '*');
    return mascara;
    } </code>
    </br>
Na variavel de saida colocaremos o cpf conforme imagens acima.

<b>3°- Passo</b> No bloco onde será apresentado o dado na parte de conteudo vamos colocar dessa forma para ser impresso os dados.
<br>![image](https://user-images.githubusercontent.com/18338341/179419751-e7cca851-37b7-47f1-90b6-9ddfedd9867d.png)
</br>

<b>Teste do fluxo:</b>
<br>![image](https://user-images.githubusercontent.com/18338341/179419726-e69924fd-0cac-455c-84e1-02090c4aef9d.png)
</br>
<b>Teste do script: </b>
<br>![image](https://user-images.githubusercontent.com/18338341/179419742-2544746c-6f0e-4f46-8977-1b0282b80fcd.png)
</br>
