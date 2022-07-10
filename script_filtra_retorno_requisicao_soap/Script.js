
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