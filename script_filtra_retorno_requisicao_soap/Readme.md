
<b>Caso de uso</b> : Filtrar retorno de requisição http do tipo soap, no exemplo vou demostrar o sistema Omie através de requisições http do tipo SOAP e ainda como tratar o retorno da requisição para que fique legível dentro do bot. Nos exemplos que vou mostrar abaixo é do caso de requisição http para obter segunda via de boleto.

<b>1°</b>- Adicione a requisição http nas ações de saída no bloco onde você irá solicitar o id do titulo para que o sistema busque o boleto.

![image](https://user-images.githubusercontent.com/18338341/178158211-3687fc19-0db6-4c66-9f19-5e6b67cd53cf.png)

Coloque a url :

https://app.omie.com.br/api/v1/financas/pesquisartitulos/
No Header coloque:

Content-Type : application/xml
Coloque o body :
<code>
<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"

xmlns:wsdl="http://app.omie.com.br/api/v1/geral/clientes/?WSDL" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/">
    <soapenv:Header>
        <app_key>2059847273484</app_key>
        <app_secret>0efb1d1084fd281b053b64d26045f2e7</app_secret>
    </soapenv:Header>
    <soapenv:Body>
        <wsdl:ObterURLBoleto soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
            <ltLinkBoletoRequest xsi:type="wsdl:ltLinkBoletoRequest">
                <nCodTitulo xsi:type="xsd:integer">6967578468</nCodTitulo>
                <cCodIntTitulo xsi:type="xsd:string">0</cCodIntTitulo>
            </ltLinkBoletoRequest>
        </wsdl:ObterURLBoleto>
    </soapenv:Body>
</soapenv:Envelope>
</code>
Não esqueça de salvar o status o body da requisição
![image](https://user-images.githubusercontent.com/18338341/178158219-4daf5493-92f2-4417-8403-f56efce21ae3.png)

:exclamation: <b>Obs</b> : O body acima está fixo com id do usuário, mas pode passar a variável que solicitamos no padrão {{variavel}} no lugar o ncodtitulo

<b>2°</b> -Agora no próximo bloco onde vamos informar o retorno da url para nosso contato teremos que tratar o retorno de uma requisição soap através de um script na ação de entrada do bloco.
<br>
![image](https://user-images.githubusercontent.com/18338341/178158226-1024a870-5fae-4acc-a6e5-5f477a6de8ba.png)
</br>
Coloque na variável de entrada o body e como variável de saída a url.

no script coloque o codigo :

<code>
            function run(body) {                
                let retorno ="";
                retorno=body;
                retorno= retorno.replace('</cLinkBoleto></ltLinkBoletoResponse></ns1:ObterURLBoletoResponse></SOAP-ENV:Body></SOAP-ENV:Envelope>','');
                retorno = retorno.replace('<?xml version="1.0" encoding="UTF-8"?> <SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="http://app.omie.com.br/api/v1/financas/pesquisartitulos/?WSDL" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"><SOAP-ENV:Body><ns1:ObterURLBoletoResponse><ltLinkBoletoResponse xsi:type="ns1:ltLinkBoletoResponse"><nCodTitulo xsi:type="xsd:integer">6967578468</nCodTitulo><cCodIntTitulo xsi:type="xsd:string"></cCodIntTitulo><cLinkBoleto xsi:type="xsd:string">','');
                retorno = retorno.replace('<nCodTitulo xsi:type="xsd:integer">','');
                retorno = retorno.replace('</nCodTitulo>','@');
                retorno = retorno.split("@")[1];
                return retorno; 
            } 
            </code>
Não se preocupe com o valor fixado do ncodtitulo no script, pois as linhas finias tratam isso de uma forma simples.

No conteúdo do bloco eu coloquei assim :
<br>
![image](https://user-images.githubusercontent.com/18338341/178158229-0d4ebb62-7bac-4cd8-b696-f541b594e410.png)
</br>

<b>Resultado</b> : :rocket:
<br>
![image](https://user-images.githubusercontent.com/18338341/178158270-297ec976-07a4-4777-9fb8-defb7d1d6043.png)
</br>

Com isso eu encerro esse tutorial e fica bem claro o poder da plataforma do Blip onde podemos fazer requisições do tipo soap apenas passando o envelope correto e tratando sua resposta para ficar algo mais amigável para o contato.
