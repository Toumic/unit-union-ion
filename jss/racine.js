// Javascript Racine carrée du nombre initial
// Résultat insatisfaisant du résultat des décimales
function racine2(aSaisi) {
    // let win0 = window.open()
    let a1 = parseFloat(aSaisi);
    // Trouver le nombre entier de l'exposant
    let expE = 1, retour = "";
    while ((expE * expE) < a1){
        expE += 1;
    }
    let expRes, newRac;
    let nBr = 0;
    if (expE * expE !== a1) {
        let gOk = true, exp2, expRac;
        exp2 = expE - 1;
        expRac = exp2.toString() + ".";
        // Voyage parmi les dixièmes
        while (gOk === true) {
            nBr += 1;
            // Domaine du dixième
            for (let i = 0; i < 10; i++) {
                expRac += i.toString();
                // win0.document.write("Début for : expRac ", expRac, "<br>")
                parseFloat(expRac);
                expRes = expRac * expRac;
                parseFloat(aSaisi);
                if (expRes < a1) {
                    let derCar = expRac.slice(-1);
                    if (derCar === "9") break;
                    // win0.document.write("Inférieur: ", derCar, " _expRac_ ", expRac, " expRes ", expRes, "<br>");
                    newRac = expRac.substring(0, expRac.length - 1);
                    expRac = newRac;
                }
                if (expRes > a1) {
                    // win0.document.write("Supérieur : ", expRac, " * i * ", i.toString(), " expRes ", expRes, "<br>");
                    newRac = expRac.substring(0, expRac.length - 1);
                    i -= 1;
                    newRac += i.toString();
                    expRac = newRac;
                    break;
                }
                if (expRes === a1) {
                    gOk = false;
                    // win0.document.write("Boucle racine : ", expRes, "<br>");
                    retour = [" Origine : ... ", expRes, "<br>", " Racine : ... ", expRac]
                }
                // document.write("Boucle for : ", " expRes: ", expRes, " Saisie: ", aSaisi, "<br>")
                // if (nBr === 2) gOk = false;
            }
            if (nBr === 50) {
                gOk = false;
                retour = ["GOK false : ", expRes, "<br>", " Racine proche : ", expRac]
            }  // Pour éviter les boucles sans fins
            // document.write("While nBr : __ ", a1.toString(), "  ", nBr.toString(), "<br>")
        }
    }  // Racine carrée trouvée
    else {
        retour = expE;
    }
    return retour
}


