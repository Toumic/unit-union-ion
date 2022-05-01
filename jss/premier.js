/*Javascript pour calculer rapidement l'origine d'un nombre*/

function origine(num){
    let win = window.open();
    num = parseInt(num)
    let retour = ""
    let tip = num % 6;
    let car = Math.trunc(num ** 0.5);
    let di7 = Math.trunc(num / 7);
    let prime = [2, 3, 4];
    let neo = true;
    if (5 > tip){
        for (let i = 0; i < prime.length; i++) {
            let p1er = prime[i];
            if (num % p1er === 0){
                if (num < 4){
                    retour += "OUI! Num premier: " + num;
                    // win.document.write(' > Num premier: ', num.toString(), "<br>");
                }
                else{
                    retour += "Num commun base: " + p1er + "<br>";
                    win.document.write(' > Num commun base: ', p1er.toString(), "<br>");
                }
                neo = false;
            }
        }
    }
    if (car * car === num) {
        neo = false;
        // win.document.write('Num carré: ', car.toString(), "<br>");
        if (retour){ retour += "<br>"}
        retour += "Carré: " + car;
    }
    if (num !== 7 && di7 * 7 === num) {
        neo = false;
        // win.document.write('Num commun 7: ', di7.toString(), "<br>");
        if (retour){ retour += "<br>"}
        retour += "Base 7: " + di7;
    }

    if (neo){
        let qi = 0, yo = 0, ix = [];
        for (let fw = 5; fw < car; fw += 6){
            yo = fw + 2;
            ix = [fw, yo];
            for (let y = 0; y < ix.length; ++y) {
                let qui = Math.trunc(num / ix[y]);
                if (qui * ix[y] === num) {
                    qi = num / qui;
                    // win.document.write(' QUI:', qui.toString());
                    retour += "Multiple: " + qui;
                    break;
                }
            }
        }
        if (qi === 0)
        {
            // win.document.write('Num premier: ', num.toString());
            retour = "Premier: " + num;
        }
    }
    return retour
}