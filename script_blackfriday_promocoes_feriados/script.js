
function pad2(n) {
    return (n < 10 ? '0' : '') + n;
}
function run() {
    let diasblackfriday = ['2022-01-22', '2022-01-23', '2022-01-24', '2022-01-25', '2022-01-26'];//dias que terão a promoção no bot ou o mesmo terá uma mensagem promocional
    let data = new Date();
    let dia = String(data.getDate()).padStart(2, '0');
    let mes = pad2(data.getMonth() + 1);
    let ano = data.getFullYear();
    let dataatual = ano + '-' + mes + '-' + dia;
    var blackfriday = diasblackfriday.includes(dataatual);

    return blackfriday;//se estiver no dias de promoção vai retornar true, caso contrario vai retornar false

}