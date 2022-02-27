function pad2(n) {
    return (n < 10 ? '0' : '') + n;
}
function run(entrada) {
    let data = new Date();
    let dia = String(data.getDate()).padStart(2, '0');
    let mes = pad2(data.getMonth() + 1);
    let ano = data.getFullYear();
    let dataatual = ano + '-' + mes + '-' + dia;
    var feriadonacional = entrada.includes(dataatual);
    return feriadonacional;
}