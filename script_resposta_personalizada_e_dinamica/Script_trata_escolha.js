function run (entrada,escolha){
    let lojas=JSON.parse(entrada);
    let enderecos=[];
    let resposta='\n';
    const maplojas = lojas.response.map((p)=>{
        let id = p.Id;
        let nome=p.Nomedaloja;
        let end=p.Endereco;
        let cep=p.cep;
        return{id,nome,end,cep};
    });
            
        resposta = escolha +' - '+maplojas[escolha].nome+' endereço: '+maplojas[escolha].end+' cep: '+maplojas[escolha].cep+'\n';
    
    
    return resposta;
}