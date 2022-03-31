/*Javascript pour calculer le développement diatonique de la gamme naturelle*/

function diatone(){
    // let wiNew0 = window.open();
    let gamNature = ["C", "o", "D", "o", "E", "F", "o", "G", "o", "A", "o", "B"];
    let indNat = ["C", "D", "E", "F", "G", "A", "B"]; // Notes naturelles diatoniques
    let indMaj = [0, 2, 4, 5, 7, 9, 11]; // Rangs naturels
    let indChr = []; // Emplacements majeurs
    let signes = ["", "#", "b"]; // Signes dièse et bémol
    let retDic = {}; // Retour fonction définitif
    let deg = 0; // deg(indice majeur)
    let degGam = true; // degGam(condition)
    while (degGam) {
        let modChr = []; // Modèles numériques chromatiques
        let nat = indNat[deg]; // Note naturelle : Valeur note
        retDic[nat] = [];
        let maj = indMaj[deg]; // Rang majeur : Indice tonique
        let chr = maj, mod = 0, ton = 1;
        while (mod < 12) {
            let lectureGamme = gamNature[chr];
            if (lectureGamme !== "o"){
                modChr.push(ton);
                ton += 1;
            }
            else {
                modChr.push(0)
            }
            if (chr === 11) {
                chr = 0;
            }
            else {
                chr += 1;
            }
            mod += 1;
        }
        if (nat === "C") {
            let cop = "";
            for (let i = 0; i < modChr.length; i++) {
                cop = modChr[i]; // cop égal degré (1,2,3,,,)
                indChr.push(cop);
            }
        }
        let ind1 = 0, ind2 = 0, dif = 0;
        for (let i = 0; i < modChr.length; i++) {
            let val0 = "";
            if (modChr[i] !== 0) {
                ind1 = indChr.indexOf(modChr[i]); //
                ind2 = modChr.indexOf(modChr[i]); //
                dif = ind2 - ind1;
                if (dif !== 0) {
                    let daf = dif;
                    if (dif < 0) daf = signes.length + dif;
                    let pif = signes[daf];
                    val0 += pif;
                    val0 += modChr[i].toString();
                    retDic[nat].push(val0);
                }
                else {
                    retDic[nat].push(modChr[i]);
                }
            }
            else {
                retDic[nat].push(modChr[i]);
            }
        }
        retDic[degGam] = [];
        if (nat === "B") degGam = false;
        deg += 1;
    }
    return retDic
}