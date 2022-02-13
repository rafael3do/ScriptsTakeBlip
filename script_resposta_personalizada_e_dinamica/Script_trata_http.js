function run (entrada){
    let lojas=JSON.parse(entrada);
    
    let resposta="";
    const maplojas = lojas.response.map((p)=>{
        let id = p.Id;
        let nome=p.Nomedaloja;
        let end=p.Endereco;
        let cep=p.cep;
        return{id,nome,end,cep};
    });
    for(let i =1;i<5;i++){
        resposta += i +' - '+maplojas[i].nome+' endereço: '+maplojas[i].end+' cep: '+maplojas[i].cep+'\n';
    }
    return resposta;
}