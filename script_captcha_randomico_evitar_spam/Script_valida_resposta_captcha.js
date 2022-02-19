
            function run(entrada, resultado) {
                let resolvido = false;
                if(entrada==resultado){
                    resolvido=true;
                    return resolvido;
                }
                resultado=Math.round(resultado);
                 if(entrada==resultado){
                resolvido=true;
                 return resolvido;
                }
                return resolvido;
            }