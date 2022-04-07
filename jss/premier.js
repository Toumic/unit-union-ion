/*Javascript pour calculer rapidement l'origine d'un nombre*/

function origine(num){
    // let win = window.open();
    num = parseInt(num)
    let retour = ""
    let tip = num % 6;
    let car = Math.trunc(num ** 0.5);
    let di7 = Math.trunc(num / 7);
    let prime = [2, 3, 4, 6];
    let neo = true;
    if (tip in [2, 3, 4, 0]){
        for (let i = 0; i < prime.length; i++) {
            let p1er = prime[i];
            if (num % p1er === 0){
                neo = false;
                // win.document.write(' > Num commun base: ', p1er.toString(), "<br>");
                retour += "Base 0: " + p1er;
            }
        }
    }
    if (car * car === num) {
        neo = false;
        // win.document.write('Num carré: ', car.toString(), "<br>");
        if (retour){ retour += "<br>"}
        retour += "Carré" + car;
    }
    if (di7 * 7 === num) {
        neo = false;
        // win.document.write('Num commun 7: ', di7.toString(), "<br>");
        if (retour){ retour += "<br>"}
        retour += "Base 7: " + di7;
    }

    if (neo){
        let qi = 0;
        for (let fw = 5; fw < car; fw += 6){
            let qui = Math.trunc(num / fw);
            if (qui * fw === num){
                qi = num / qui;
                // win.document.write(' QUI:', qui.toString());
                retour += "Multiple" + qui;
                break;
            }
        }
        if (qi === 0)
        {
            // win.document.write('Num premier: ', num.toString());
            retour = "Premier" + num;
        }
    }
    return retour
}