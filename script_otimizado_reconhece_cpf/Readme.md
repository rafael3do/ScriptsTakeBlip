<b>Caso de uso</b> : Reconhecer o cpf do usuario que utiliza o bot sem necessidade de fixar uma formação como orientar o contato a mandar sem ponto(11122233344) e traço ou pedir que mande com ponto e traço(111.222.333-44) ou que mande com espaço. Esse script vai entender qualquer uma dessas entras e não vai utilizar regex o outro ponto é que ele pode ser adequado para funcionar com cpf e cnpj sem precisar de um script para cada caso.

<b>1°- Passo</b> : No bloco onde você coloca solicitação do cpf salve a entra do usuario em uma variavel. 
<br>![image](https://user-images.githubusercontent.com/18338341/183295098-cfe47737-1d2b-4c06-871c-ebf97988df1e.png)</br>

<b>2°- Passo</b> : No bloco de validação do cpf na ação de entrada coloque o script: 
<br><code> function run(cpf){ 
    try{   
    if (typeof cpf !== 'integer'){
    cpf=cpf.toString();    
    }
    if (typeof cpf !== 'string') return false;
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false;
    cpf = cpf.split('').map(el => +el);
    const rest = (count) => (cpf.slice(0, count-12)
        .reduce( (soma, el, index) => (soma + el * (count-index)), 0 )*10) % 11 % 10;
    return rest(10) === cpf[9] && rest(11) === cpf[10];
}catch{
    return "Error";
}
}</code></br>

<br>![image](https://user-images.githubusercontent.com/18338341/183295125-91dfe2f5-1d97-40d7-89ff-b60f5a1b84f4.png)</br>

Não esqueça de colcoar a variavel de entrada 'cpf'
e salvar o retorno em uma variavel como o exemplo 'iscpfvalid' que aparece no print acima
<br>No bloco que traz o retorno imprimimos da forma mostrada abaixo, mas pode ser feito na condição de saida e mandar para um bloco de cpf valido ou invalido dependendo do cenario</br>
<br>![image](https://user-images.githubusercontent.com/18338341/183295382-2c4f56d6-1f01-496e-85af-4ee4509e1b03.png)
</br>

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
