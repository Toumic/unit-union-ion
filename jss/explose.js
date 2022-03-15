// Javascript Puissance relative de deux nombres

function explore(aS1, aS2) {
    let aN1 = parseFloat(aS1);
    let aN2 = parseFloat(aS2);
    let enTier = "0";
    let entSup = "";
    // Let stop = 0;
    /*________________________________________________________________*/
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
                enTier = parseFloat(entZero);
                entSup = aN1;
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
                enTier = entEnt;
                entSup = aN2;
                win1.document.write("Entier: ", entEnt.toString(), "<br>");
                win1.document.write(" Résultat: ", (aN1 ** entEnt).toString(), "<br>");
                break
            }
        }
    }
    /*________________________________________________________________*/
    if (aN1 === aN2) {
        // let win1 = window.open();
        // win1.document.write("Puis a1 = a2 : ", aS1.toString(), "<br>");
        return "Nombres Égaux et Puissance Relative Nulle"
    }
    /*________________________________________________________________*/
    /*________________________________________________________________*/
    if (enTier !== "0"){
        let win1 = window.open();
        let stop = -1;
        while (stop < 3){
            // win1.document.write("Entier : ", enTier.toString(), "<br>");
            stop += 1;
            for (let i = 0; 10; i++){
                if (aN1 === parseFloat(entSup)){
                    // aN1 ** Zéro, Décimale.
                    // Départ au niveau supérieur vers l'inférieur
                    if ((aN1 ** enTier) < aN2){
                        // win1.document.write("A1>A2 : ", aN1.toString(), "<br>");
                    }
                }
                else if ((aN1 ** enTier) < aN2){
                    // aN1 ** Entier, Décimale.
                    // Départ au niveau inférieur vers le supérieur
                    // win1.document.write("A1<A2 : ", aN1.toString(), "<br>");
                }
            }
        }
        win1.document.write("       AN1 : ", aN1.toString(), "     AN2 : ", aN2.toString(), "<br>");
        win1.document.write("   Entière : ", enTier.toString(), " SUP ", entSup.toString(), "<br>");
        return aS1
    }
}