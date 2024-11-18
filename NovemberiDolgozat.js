//1-feladat
let trollComment = "This is something that a troll would type.";

function disemvowel(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
}

console.log(disemvowel(trollComment));
//2.feladat
function dateCorrect(dateStr) {
    if (!dateStr || !/^\d{2}\.\d{2}\.\d{4}$/.test(dateStr)) {
        return dateStr === "" || dateStr === null ? dateStr : null;
    }

    let [day, month, year] = dateStr.split('.').map(Number);

    let date = new Date(year, month - 1, day);

    let correctedDay = String(date.getDate()).padStart(2, '0');
    let correctedMonth = String(date.getMonth() + 1).padStart(2, '0');
    let correctedYear = date.getFullYear();

    return `${correctedDay}.${correctedMonth}.${correctedYear}`;
}

console.log(dateCorrect("30.02.2016"));
console.log(dateCorrect("40.06.2015"));
console.log(dateCorrect("11.13.2014"));
console.log(dateCorrect("99.11.2010"));
console.log(dateCorrect(""));          
console.log(dateCorrect(null));        
console.log(dateCorrect("32.05.2017"));

//3.feladat
let dna = "GCCTTUUGCTTU";
function DNAtoRNA(dna) {
    return dna.replace(/T/g, 'U');
}
console.log(DNAtoRNA(dna));
//4.feladat
let number = Math.floor(Math.random() * 100);
function fizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return 'FizzBuzz';
    } else if (number % 3 === 0) {
        return 'Fizz';
    } else if (number % 5 === 0) {
        return 'Buzz';
    } else {
        return number;
    }
}

console.log(fizzBuzz(number));
