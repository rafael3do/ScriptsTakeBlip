Caso de uso : Ao validar dados sensiveis que não devem ser expostos vamos mostrar so uma parte das credenciais nesse exemplo estou mostrando os 2 ultimos digitos do cpf, mas funciona para cnpj entre outros dados. O cenario elaborado e a pessoa digita um dado como usuario/matricula e o sistema confirme é para esse cpf que você deseja atendimento.

1°No bloco apos a requisição http que retorna o dado sensivel recebemos o cpf
2° Na ação de entrada nos passamos o cpf e adicionamos o script abaixo:


Na variavel de saida colocaremos o cpf

3° No bloco onde será apresentado o dado na parte de conteudo vamos colocar dessa forma para ser impresso os dados.


