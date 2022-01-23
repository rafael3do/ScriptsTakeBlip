
            function run() {
                let fluxo = Math.floor(Math.random() * 9)+1;//função vai gerar um numero de 0 a 10
                if (fluxo % 2 == 0) {//vai validar se a divisão por 2 vai da um numero inteiro
                    fluxo = 2;
                } else {
                    fluxo = 1;
                }
                return fluxo;
            }