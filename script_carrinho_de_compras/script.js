
            function run(produto1, produto2,produto3) {//entrdadas de exemplo, mas podem ser varios produtos
                let nome1='Borracha ';
                let preco1=produto1*0.95;
                let nome2='Caderno ';
                let preco2=produto2*4.00;
                let nome3='Caneta ';
                let preco3=produto3*2.00;
                let precototal=preco1+preco2+preco3;
                let produtos= produto1+' '+nome1 +','+' '+ produto2 +' '+nome2 +','+' '+ produto3+' '+nome3+ ',';
                return {produtos,precototal}; //retorno da quantidade, nome e soma dos preços dos produtos
            }