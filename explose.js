// Javascript Puissance relative de deux nombres

function explore(aS1, aS2) {
    let aN1 = parseFloat(aS1);
    let aN2 = parseFloat(aS2);
    let enTier = 0.0
    // Let stop = 0
    /*________________________________________________________________*/
    // Quand aS1 est plus grand qu'aS2, alors aS1 puissance entier décimal.
    if (aN1 > aN2) {
        /* aN1 ** Zéro, Décimale
        * Exemple : a = 3658, b = 3 :
        *   a**0.1 = 2.0, a**0.2 = 5.0 */
        let win1 = window.open();
        let entZero = "0.";
        for (let i = 0; aN1; ++i){
            let entHero = entZero + i.toString();
            let entNero = parseFloat(entHero);
            // win1.document.write("Z: ", entNero.toString(), " EZ ", entZero, " ..|.. ", i.toString(), "<br>");
            if ((aN1 ** entNero) > aN2){
                let iOn = i - 1;
                // let derZero = entZero.substring(0, entZero.length - 1);
                entZero += iOn;
                win1.document.write(" Décimal** ", entZero, "<br>");
                win1.document.write(" Résultat: ", (aN1 ** entZero).toString(), "<br>");
                enTier = parseFloat(entZero)
                break
            }
        }
        win1.document.write("Puis a1 > a2 : ", aN1.toString(), "  ", aN2.toString(), "<br>");
    }
    /*________________________________________________________________*/
    // Si aS1 est plus petit qu'aS2, alors aS1 puissance zéro décimal.
    if (aN1 < aN2) {
        let win1 = window.open();
        win1.document.write("Puis a1 < a2 : ", aN1.toString(), "  ", aN2.toString(), "<br>");
        /* aN1 ** Entier, Décimale
        * Exemple : a = 2, b = 3658 :
        *   a**7 = 2187, a**8 = 6561 */
        let entEnt = 0;
        for (let i = 0; aN2; ++i) {
            if ((aN1 ** i) > aN2) {
                entEnt = i - 1;
                enTier = entEnt
                win1.document.write("Entier: ", entEnt.toString(), "<br>");
                win1.document.write(" Résultat: ", (aN1 ** entEnt).toString(), "<br>");
                break
            }
        }
    }
    /*________________________________________________________________*/
    if (aN1 === aN2) {
        // let iSo = "Mêmes Nombres Ou Puissance Relative Zéro";
        // win1.document.write("Puis a1 = a2 : ", aS1.toString(), "<br>", iSo, "<br>");
        return "Mêmes Nombres Ou Puissance Relative Nulle"
    }
    /*________________________________________________________________*/
    // win1.document.write("<br><br>", "Nombres 1 et 2 : ", aS1, " et ", aS2, "<br>");
    if (enTier !== 0){
        let win1 = window.open();
        win1.document.write("Traitement par puissance relative entière : ", enTier.toString(), "<br>");
        return aS1
    }
}