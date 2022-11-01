// Lev2_2_js-vertiefung_math_math-random_math-floor_game ein kleines Spiel

function erraten() {
    let zahl = Math.floor(Math.random() * 10);
    let pro = prompt("errate mal");

    if (pro == zahl) {
        console.log("Du hast gewonnen:" + zahl);
    } else {
        console.log("Du hast verloren:" + zahl);
    }
    console.log(pro);
    // erraten()  
    //  wenn du function dauernd erneuern willst, mach "erraten()" an.
}
erraten();

//================================================================================
//Lev2_1_js-vertiefung_objects_loops

let edelMetallPreise = [
    { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" },
];

// with Map()
//
// let newName = [];
// let newPreis = [];
// let newVeranderung = [];

// let newArray = edelMetallPreise.map((param) => {
//     newName.push(param.name);
//     newPreis.push(param.preiseGramEuro);
//     newVeranderung.push(param.veraenderung);
// });

//  with map() return
// let newName = edelMetallPreise.map(parametr => {
//     return parametr.name;
// })
// let newPreis = edelMetallPreise.map(parametr => {
//     return parametr.preiseGramEuro;
// })
// let newVeranderung = edelMetallPreise.map(parametr => {
//     return parametr.veraenderung;
// })

// console.log(newName);
// console.log(newPreis);
// console.log(newVeranderung);

//================================================================================

// with ForEach()
//
// let newArrayForName = [];
// let newArrayForPreis = [];
// let newArrayForVeranderung = [];

// edelMetallPreise.forEach((parametr) => {
//   newArrayForName.push(parametr.name);
//   newArrayForPreis.push(parametr.preiseGramEuro);
//   newArrayForVeranderung.push(parametr.veraenderung);
// });

// console.log(newArrayForName);
// console.log(newArrayForPreis);
// console.log(newArrayForVeranderung);


//================================================================================
// TeurerPreis

let teurerPreis = edelMetallPreise.filter(paramet => {
    return paramet.preiseGramEuro >= 50
})
console.log(teurerPreis);
//================================================================================

//Table

let table = document.getElementById("table");

for (elements of edelMetallPreise) {

    table.innerHTML += `<tr> <td>${elements.name}</td> <td>${elements.preiseGramEuro} </td>  <td>${elements.veraenderung} </td> <tr>`;
    table.style.fontSize = "30px"
    table.style.border = "1px solid black"
    table.style.padding = "5px 5px"
}