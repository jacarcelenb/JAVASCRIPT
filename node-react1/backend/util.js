const palabraSinAcentos = (palabra) =>
       palabra.toLowerCase().replace("é","e").replace("á","a").replace("í","i").replace("ó" ,"o").replace("ú","u"); 

module.exports ={
    palabraSinAcentos,
};