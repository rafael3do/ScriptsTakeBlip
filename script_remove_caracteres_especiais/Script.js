function run(texto) {
    texto = texto
      .toString()
      .replace(/[àÀáÁâÂãÃäÄÅåª]+/g, "a") //as funcões de replace abaixo removem os acentos e colocam a letra de forma correta.
      .replace(/[èÈéÉêÊëË]+/g, "e") 
      .replace(/[ìÌíÍîÎïÏ]+/g, "i")
      .replace(/[òÒóÓôÔõÕöÖº]+/g, "o") 
      .replace(/[ùÙúÚûÛüÜ]+/g, "u") 
      .replace(/[ýÝÿŸ]+/g, "y") 
      .replace(/[ñÑ]+/g, "n") 
      .replace(/[çÇ]+/g, "c") 
      .replace(/[ß]+/g, "ss") 
      .replace(/[Ææ]+/g, "ae") 
      .replace(/[Øøœ]+/g, "oe") 
      .replace(/[%]+/g, "pct") 
      .replace(/^-+/, "") 
      .replace(/-+$/, "") 
      .replace(/[L]+/g, "L")       
    return texto;
  }