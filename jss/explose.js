// Javascript Puissance relative de deux nombres

function explore(aS1, aS2) {
    // let win1 = window.open();
    let aN1 = parseFloat(aS1);
    let aN2 = parseFloat(aS2);
    let enTier = 0, retour = [];
    /*________________________________________________________________*/
    /*________________________________________________________________*/
    // Quand aS1 est plus grand qu'aS2, alors aS1 puissance zéro décimal.
    if (aN1 > aN2) {
        /* aN1 ** Zéro, Décimale
        * Exemple : a = 3658, b = 3 :
        *   a**0.1 = 2.0, a**0.2 = 5.0 */
        let entZero = "0.";
        for (let i = 0; aN1; ++i){
            let entHero = entZero + i.toString();
            let entNero = parseFloat(entHero);
            if ((aN1 ** entNero) > aN2){
                let iOn = i - 1;
                entZero += iOn;
                // win1.document.write(" Décimal** ", entZero, "<br>");
                // win1.document.write(" Résultat: ", (aN1 ** entZero).toString(), "<br>");
                enTier = parseFloat(entZero);
                break
            }
        }
    }
    /*________________________________________________________________*/
    // Si aS1 est plus petit qu'aS2, alors aS1 puissance entier décimal.
    if (aN1 < aN2) {
        /* aN1 ** Entier, Décimale
        * Exemple : a = 3, b = 3658 :
        *   a**7 = 2187, a**8 = 6561 */
        let entEnt = 0;
        for (let i = 0; aN2; ++i) {
            if ((aN1 ** i) > aN2) {
                entEnt = i - 1;
                enTier = entEnt;
                // win1.document.write("Entier: ", entEnt.toString(), "<br>");
                // win1.document.write(" Résultat: ", (aN1 ** entEnt).toString(), "<br>");
                break
            }
        }
    }
    /*________________________________________________________________*/
    if (aN1 === aN2) {
        // win1.document.write("Puis a1 = a2 : ", aS1.toString(), "<br>");
        return "Nombres Égaux et Puissance Relative Nulle"
    }
    /*________________________________________________________________*/
    /*________________________________________________________________*/
    let newExp, resExp, stpExp = 50;
    if (enTier !== 0) {
        let entString = enTier.toString();
        let nbrDec = false;
        let stop = 0;
        for (let p = 0; p < entString.length; p++) {
            if ("." === entString[p]) {
                nbrDec = true;
            }
        }
        if (nbrDec === false) entString += ".";
        while (stop < stpExp) {
            stop += 1;
            for (let y = 1; y < 10; y++) {
                entString += y.toString();
                let resPlus = aN1 ** parseFloat(entString)
                retour = [aN1, " Exp ", entString, " Res ", resPlus, " aN2 ", aN2]
                // win1.document.write("<br><br>", "RES PLUS : ", resPlus.toString(), "<br>");
                //
                if (resPlus < aS2) {
                    // win1.document.write(". _ _ _ _ _ _ Résultat inférieur à aS2 : ", "<br>");
                    if (y !== 9) {
                        // win1.document.write(".._ INF..ENT : ", " :entString ", entString, "<br>");
                        newExp = entString.substring(0, entString.length - 1);
                        entString = newExp;
                        // win1.document.write(".._ INF..ENT : ", " :entString ", entString, "<br>");
                    }
                    if (y === 9) {
                        resExp = parseFloat(entString);
                        // win1.document.write(".._ INF..EXP y=9 : ", resExp, " + ", entString, "<br>");
                        break
                    }
                }
                if (resPlus > aS2){
                    // win1.document.write(" _ _ _ _ .... Résultat supérieur à aS2 : ", entString,"<br>");
                    let yy = y - 1;
                    newExp = entString.substring(0, entString.length - 1);
                    entString = newExp + yy;
                    resExp = parseFloat(entString);
                    // win1.document.write(". SUP ..RES : ", resPlus.toString(), "<br>");
                    break
                }
                if (resPlus === aS2){
                    stop = stpExp;
                    // win1.document.write(" _ _ _ _ .... Résultat égal à aS2 : ", entString,"<br>");
                    break
                }
            }
        }
    }
    // win1.document.write(". NOT IF : ", "<br>");
    return retour
}