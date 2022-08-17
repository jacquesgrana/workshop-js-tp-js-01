let villes = ["nantes", "paris", "saint-nazaire", "angers", "le mans"];

villes.forEach(v => {
    console.log(v)
});

let lettreADansToutesLesVilles = villes.every(v => v.indexOf("a") !== -1);
console.log("lettreADansToutesLesVilles :", lettreADansToutesLesVilles);

let auMoinsUneVilleAvecUnTiret = villes.some(v => v.indexOf("-") !== -1);
console.log("auMoinsUneVilleAvecUnTiret :", auMoinsUneVilleAvecUnTiret);

let villesSansTiretSansEspace = villes.filter(v => v.indexOf("-") == -1 && v.indexOf(" ") == -1)
console.log("villesSansTiretSansEspace", villesSansTiretSansEspace);

let villesMajusculeSeTerminantParS = villes.filter(v => v.charAt(v.length - 1) == "s").map(v => v.toUpperCase());
console.log("villesMajusculeSeTerminantParS", villesMajusculeSeTerminantParS);