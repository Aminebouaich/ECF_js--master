let prod1 = new Product('Michaël Gregorio', '43,00', 'non', 'non', 'musique')
let prod2 = new Product('Daniel Guichard', '43,00', 'non', '20%', 'musique')
let prod3 = new Product('PC Portable Gaming MSI GL75 Leopard 10SFK-457FR 17,3 Intel Core I7 16 Go RAM 256 Go SSD + 1 To SATA Noir', '1999.99', 'oui', '20%', 'informatique')
let prod4 = new Product('PC Portable Gaming AsusTUF505DVHN232T 15.6"AMD Ryzen 7 16Go RAM 512 GoSSD Noir', '1499,99', 'oui', '33%', 'informatique')
let prod5 = new Product('PC Portable Gaming AcerPredator Triton700 PT715-51-76D4 15.6"Gaming IntelCore i7 32 GoRAM 256 Go SSD+ 256 Go SATANoir', '3499,99', 'non', 'non', 'informatique')
let tabProd = [prod1, prod2, prod3, prod4, prod5]
let tabHtml = document.querySelector("#tabprod")
let afficherPromo = document.querySelector("#promo")
let reafficheliste = document.querySelector("#reaffiche")
let afficheRemise = document.querySelector("#remise")
let trierOrdre = document.querySelector('#ordre')
let tabData = " "
let tabPromo = " "
let tabRemise = " "



tabProd.forEach(produit => afficheTableau(produit))
tabHtml.innerHTML = tabData

function afficheTableau(produit) {
    tabData += `<tr><td>${produit.name}</td>
    <td>${produit.price}</td> 
    <td>${produit.category}</td> 
    <td>${produit.discount}</td>
    <td>${produit.promotion}</td> 
     </tr> `
    return tabData

}
//on affiche que les promos
afficherPromo.addEventListener('click', event => {
    reafficheliste.style.display = "flex"
    afficherPromo.style.display = "none"
    afficheRemise.style.display = "flex"

    tabHtml.innerHTML = " "
    //reset le tableau de promotion 
    tabPromo = ""
    tabProd.forEach(produit => affichePromo(produit))
    tabHtml.innerHTML = tabPromo


    function affichePromo(produit) {
        if (produit.promotion !== "non") {
            tabPromo += `<tr><td>${produit.name}</td>
    <td>${produit.price}</td> 
    <td>${produit.category}</td> 
    <td>${produit.discount}</td> 
    <td>${produit.promotion}</td> 
    </tr> `
            return tabPromo
        }
    }
})

reafficheliste.addEventListener('click', event => {
    tabHtml.innerHTML = tabData
    reafficheliste.style.display = "none"
    afficherPromo.style.display = "flex"
    afficheRemise.style.display = "flex"

})


//on affiche que les produits avec une remise
afficheRemise.addEventListener('click', event => {
    reafficheliste.style.display = "flex"
    afficheRemise.style.display = "none"
    afficherPromo.style.display = "flex"


    tabHtml.innerHTML = " "
    //reset le tableau de promotion 
    tabPromo = ""
    tabRemise = ""
    tabProd.forEach(produit => afficherRemise(produit))
    tabHtml.innerHTML = tabRemise


    function afficherRemise(produit) {
        if (produit.discount !== "non") {

            let price = parseInt(produit.price)
            let discount = parseInt(produit.discount)
            // Math.round et *100/100 à la fin pour limiter à 2 chiffres après la virgule
            let montantDeduit = Math.round((price * (1 - (discount) / 100)) * 100) / 100


            tabRemise += `<tr><td>${produit.name}</td>
                <td>${produit.price}</td> 
                <td>${produit.category}</td> 
                <td>${produit.discount}</td> 
                <td>${produit.promotion}</td> 
                <td>${montantDeduit}$</td> 
                </tr> `
            return tabRemise
        }
    }
})
//6 7 
trierOrdre.addEventListener('click', event => {
    reafficheliste.style.display = "flex"
    tabHtml=" "
    tabData=""


tabProd.sort(function compare(a, b) {
    if (a.name < b.name)
        return -1;
    if (a.name > b.name)
        return 1;
    return 0;
});
tabProd.forEach(produit => tabHtml += produit.name + '</br>')
   

    // document.querySelector('#tabprod').innerHTML = tabHtml
// tabProd.sort(function compare(a, b) {
//     if (a.name < b.name)
//         return -1;
//     if (a.name > b.name)
//         return 1;
//     return 0;
// });
tabProd.forEach(produit =>
    tabHtml +=
    `<tr><td>${produit.name}</td><td>${produit.category}</td></tr>`);
    document.querySelector('#tabprod').innerHTML = tabHtml ;

})




/////ex3
let cat1 = new Category(prod4)
// alert(cat1.name)