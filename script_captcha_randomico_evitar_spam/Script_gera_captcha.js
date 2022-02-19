
            function run() {
                let resolva='\n';
                let calculo="";
                let primeirovalor= Math.floor(Math.random() * 100);
                let segundovalor= Math.floor(Math.random() * 99);
                let operacao=Math.floor(Math.random() * 4);
                let resultado=0;
                switch (operacao){
                    case 0:
                    calculo=' Qual o resultado de: ' + primeirovalor +' + '+ segundovalor +' = ';
                    resultado=primeirovalor+segundovalor;
                    break;
                    case 1:
                    calculo=' Qual o resultado de: ' + primeirovalor +' - '+ segundovalor +' = ';
                    resultado=primeirovalor-segundovalor;
                    break;
                    case 2:
                    calculo=' Qual o resultado de: ' + primeirovalor +' * '+ segundovalor +' = ';
                    resultado=primeirovalor*segundovalor;
                    Math.round(resultado);
                    break;
                    case 3:
                    calculo=' O numero ' + segundovalor + ' é impar ou par ?';
                    if(segundovalor%2==0){
                        resultado="par";
                    }else{
                        resultado="impar";
                    }
                    
                    break;
                }
                resolva= 'responda a pergunta abaixo para provar que você não é um robô. ' + calculo ;
                
                return {resultado,resolva}; 
            }