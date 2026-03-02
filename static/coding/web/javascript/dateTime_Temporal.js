
/* Uso di Temporal.Now */
let istantanea = Temporal.Now.instant();
let istantaneaString = istantanea.toString();
console.log("Rappresentazione Istant as ZonedDateTime: " + istantaneaString);
console.log("Rappresentazione Istant in millisecondi: " + istantanea.epochMilliseconds);

let dataCorrente = Temporal.Now.plainDateISO();
let dataCorrenteString = dataCorrente.toString();
console.log("Rappresentazione PlainDate: " + dataCorrenteString);

let dataOraCorrente = Temporal.Now.plainDateTimeISO();
let dataOraCorrenteString = dataOraCorrente.toString();
console.log("Rappresentazione PlainDateTime: " + dataOraCorrenteString);

let tempoCorrente = Temporal.Now.plainTimeISO();
let tempoCorrenteString = tempoCorrente.toString();
console.log("Rappresentazione PlainTime: " + tempoCorrenteString);

let fusoOrario = Temporal.Now.timeZoneId();
console.log("Rappresentazione timeZoneId: " + fusoOrario); // Non necessita di toString()

let dataOraFuso = Temporal.Now.zonedDateTimeISO();
let dataOraFusoString = dataOraFuso.toString();
console.log("Rappresentazione ZonedDateTime: " + dataOraFusoString);

/* Uso di Temporal.from() */

let date = Temporal.PlainDate.from('2023-10-01');
let time = Temporal.PlainTime.from('14:30:00');
let dateTime = Temporal.PlainDateTime.from('2023-10-01T14:30:00');
let yearMonth = Temporal.PlainYearMonth.from('2023-10');
let monthDay = Temporal.PlainMonthDay.from('02-29');
let zonedDateTime = Temporal.ZonedDateTime.from('2023-10-01T14:30:00[Europe/Rome]');
let instantNow = Temporal.Instant.from('2023-10-01T14:30:00Z');

console.log("Rappresentazione PlainDate: " + date.toString())
console.log("Rappresentazione PlainTime: " + time.toString())
console.log("Rappresentazione PlainDateTime: " + dateTime.toString())
console.log("Rappresentazione PlainYearMonth: " + yearMonth.toString())
console.log("Rappresentazione PlainMonthDay: " + monthDay.toString())
console.log("Rappresentazione ZonedDateTime: " + zonedDateTime.toString())
console.log("Rappresentazione Instant: " + instantNow.toString())

let item1 = { year: 2023, month: 3, day: 15, hour: 10, minute: 30, second: 45 }
let dataOraOggetto = Temporal.PlainDateTime.from(item1);
console.log("Rappresentazione PlainDateTime: " + dataOraOggetto.toString())

let item2 = { year: 2023, month: 3, day: 15 }
let dataOggetto = Temporal.PlainDate.from(item2);
console.log("Rappresentazione PlainDateTime: " + dataOggetto.toString())

/* Uso di Instant.fromEpochMilliseconds() */

let instantNowMillis = Temporal.Instant.fromEpochMilliseconds(1696170600000);
console.log("Rappresentazione Instant: " + instantNowMillis.epochMilliseconds);

/* Uso di Duration */
const duration1 = Temporal.Duration.from("P1Y");
const duration2 = Temporal.Duration.from({ years: 1 });
let duration3 = Temporal.Duration.from("P2DT3H15M");
console.log("Rappresentazione Duration 1: " + duration1.toString());
console.log("Rappresentazione Duration 2: " + duration2.toString());
console.log("Rappresentazione Duration 3: " + duration3.toString());

/* Sum, subtract.. */
let dataOra = Temporal.PlainDateTime.from("2023-03-15T10:30:45");
let durationA = Temporal.Duration.from("P5DT2H");
let nuovaDataOra = dataOra.add(durationA);
console.log("Aggiunta periodo: " + nuovaDataOra.toString());

let durationS = Temporal.Duration.from("P3DT1H");
let nuovaDataOraS = dataOra.subtract(durationS);
console.log("Sottrazione periodo: " + nuovaDataOraS.toString());

/* Equals */
let dataOra1 = Temporal.PlainDateTime.from("2023-03-15T10:30:45");
let dataOra2 = Temporal.PlainDateTime.from("2023-03-15T10:30:45");
let dataOra3 = Temporal.PlainDateTime.from("2023-03-16T10:30:45");

let sonoUguali1 = dataOra1.equals(dataOra2); // true
let sonoUguali2 = dataOra1.equals(dataOra3); // false

console.log(sonoUguali1); // Output: true
console.log(sonoUguali2); // Output: false


let dataLocaleIt = dataOra1.toLocaleString('it-IT', {
  year: 'numeric', month: 'long', day: 'numeric',
  hour: '2-digit', minute: '2-digit' 
});
console.log(dataLocaleIt); // Output: "15 marzo 2023, 10:30"