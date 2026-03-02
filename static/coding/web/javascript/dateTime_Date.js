let date = new Date('2023-03-15T10:30:45.000+01:00');

let dateString = date.toString();
let dateLocaleITString = date.toLocaleString('it-IT', {timeZoneName: 'short'});
let dateLocaleUSString = date.toLocaleString('en-US', {timeZoneName: 'short'}); // 02/11/2022,  1:02:00 PM
let dateLocaleGBString = date.toLocaleString('en-GB', {timeZoneName: 'short'}); // 11/02/2022, 13:02:00
let dateISOString = date.toISOString();

console.log("date as String: " + dateString);
console.log("date as Locale IT String: " + dateLocaleITString);
console.log("date as Locale US String: " + dateLocaleUSString);
console.log("date as Locale GB String: " + dateLocaleGBString);
console.log("date as ISO String: " + dateISOString);

// Utilizziamo i metodi getter per ottenere informazioni sulla data
let year = date.getFullYear();   // Ottiene l'anno (2023)
let month = date.getMonth();     // Ottiene il mese (2 per marzo, 0-based)
let day = date.getDate();        // Ottiene il giorno del mese (15)
let dayOfWeek = date.getDay();   // Ottiene il giorno della settimana (3 per mercoledì, 0-based)
let hours = date.getHours();     // Ottiene le ore (10)
let minutes = date.getMinutes(); // Ottiene i minuti (30)
let seconds = date.getSeconds(); // Ottiene i secondi (45)
let milliseconds = date.getMilliseconds(); // Ottiene i millisecondi (0)
let timezoneOffset = date.getTimezoneOffset(); // Ottiene il fuso orario in minuti (60)

console.log("year: " + year);
console.log("month: " + month);
console.log("day: " + day);
console.log("dayOfWeek: " + dayOfWeek);
console.log("hours: " + hours);
console.log("minutes: " + minutes);
console.log("seconds: " + seconds);
console.log("milliseconds: " + milliseconds);
console.log("timezoneOffset: " + timezoneOffset);

date.setFullYear(2024);    // Imposta l'anno a 2024
date.setMonth(5);          // Imposta il mese a giugno (5, 0-based)
date.setDate(20);          // Imposta il giorno del mese a 20
date.setHours(15);         // Imposta le ore a 15 (3 PM)
date.setMinutes(45);       // Imposta i minuti a 45
date.setSeconds(30);       // Imposta i secondi a 30
date.setMilliseconds(500); // Imposta i millisecondi a 500
// setTimezoneOffset non consentito

dateISOString = date.toISOString();

console.log("Resetting the date, shown as ISO String: " + dateISOString);

date.setHours(date.getHours() + 12);
date.setDate(date.getDate() + 20);
date.setMonth(date.getMonth() + 11);
date.setFullYear(date.getFullYear() + 1);

dateISOString = date.toISOString();

console.log("Adding 1Y, 11M, 20D, 12h, shown as ISO String: " + dateISOString);
