// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
// skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu -
// "(XXX) XXX-XXXX". (10 taškų)

console.log('-==1==-');

const a = 10;
const b = 20;

if(a>b) {
    console.log('A daugiau uz B');
}
if(a===b) {
    console.log('A lygu B');
}
if(b>a) {
    console.log('B lygu A');
}

console.log('-==2==-');

for (let i = 1; i < 11; i++) {
    console.log(i);
}

console.log('-==3==-');

for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

console.log('-==4==-');

for (let i = 1; i <= 5; i++) {
    console.log(Math.floor(Math.random() * 10) + 1);
}

console.log('-==5==-');
let number = Math.floor(Math.random() * 10) + 1;

while (true) {
    console.log(number);
    if (number === 5) break;
    number = Math.floor(Math.random() * 10) + 1;
}

console.log('-==9==-');
function firstNumber(e) {
    if (typeof (e) !== 'number' && e < 2) {
        return `${e} nepirminis skaicius`
    }
    for (let i = 2; i < e; i++) {
        if (e % i === 0) {
            return `${e} nepirminis skaicius`
        }
    }

    return `${e} pirminis skaicius`

}

console.log(firstNumber(7));