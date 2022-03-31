// Javascript des nombres premiers communs et typages
// La définition des nombres selon le chiffre six (6)

function typage (nombre){
    // let wiNew = window.open()
    let nbr = parseFloat(nombre);
    let reste = nbr % 6;
    const tableTypes = [
        " Reste division 6 = 0 :   Pair ; Double trois(I)",
        " Reste division 6 = 1 : Impair ; Probable premier",
        " Reste division 6 = 2 :   Pair ; Initial(P) commun",
        " Reste division 6 = 3 : Impair ; Initial(I) commun",
        " Reste division 6 = 4 :   Pair ; Double deux(P)",
        " Reste division 6 = 5 : Impair ; Probable premier"
    ]
    let typo = tableTypes[reste];
    // wiNew.document.write("Un ", nbr.toString(), "   ", reste.toString(), "<br>")
    return ["Nombre origine : ", nombre, "<br><br>", ". : ... ", typo]
}