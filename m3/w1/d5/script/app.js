"use strict";
class User {
    constructor(carica) {
        this.carica = 0;
        this.numeroChiamate = 0;
        this.spesaChiamate = 0;
        this.carica = carica;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    chiamata(minutiDurata) {
        let costoChiamata = (minutiDurata * 0.20);
        if ((this.carica - costoChiamata) <= 0) {
            throw new Error('credito insufficente');
        }
        else {
            this.numeroChiamate++;
            this.spesaChiamate += costoChiamata;
            this.carica -= costoChiamata;
        }
    }
    numero404() {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
class User2 {
    constructor(carica) {
        this.carica = 0;
        this.numeroChiamate = 0;
        this.spesaChiamate = 0;
        this.carica = carica;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    chiamata(minutiDurata) {
        let costoChiamata = (minutiDurata * 0.20);
        if ((this.carica - costoChiamata) <= 0) {
            throw new Error('credito insufficente');
        }
        else {
            this.numeroChiamate++;
            this.spesaChiamate += costoChiamata;
            this.carica -= costoChiamata;
        }
    }
    numero404() {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
class User3 {
    constructor(carica) {
        this.carica = 0;
        this.numeroChiamate = 0;
        this.spesaChiamate = 0;
        this.carica = carica;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    chiamata(minutiDurata) {
        let costoChiamata = (minutiDurata * 0.20);
        if ((this.carica - costoChiamata) <= 0) {
            throw new Error('credito insufficente');
        }
        else {
            this.numeroChiamate++;
            this.spesaChiamate += costoChiamata;
            this.carica -= costoChiamata;
        }
    }
    numero404() {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
class UserError {
    constructor(carica) {
        this.carica = 0;
        this.numeroChiamate = 0;
        this.spesaChiamate = 0;
        this.carica = carica;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    chiamata(minutiDurata) {
        let costoChiamata = (minutiDurata * 0.20);
        if ((this.carica - costoChiamata) <= 0) {
            throw new Error('credito insufficente');
        }
        else {
            this.numeroChiamate++;
            this.spesaChiamate += costoChiamata;
            this.carica -= costoChiamata;
        }
    }
    numero404() {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
let firstUser = new User(10);
console.log(firstUser);
firstUser.ricarica(15);
console.log('Ricarica effettuata');
console.log('Credito residuo: ' + firstUser.numero404() + '€');
console.log('Chiamata');
firstUser.chiamata(7);
console.log('Chiamata terminata, costo: ' + firstUser.spesaChiamate + ' €');
console.log('Credito residuo: ' + firstUser.numero404() + '€');
console.log('Chiamata');
firstUser.chiamata(5);
console.log('Chiamata terminata, costo: ' + firstUser.spesaChiamate + ' €');
console.log('Credito residuo:' + firstUser.numero404() + '€');
console.log('Chiamata');
firstUser.chiamata(5);
console.log('Chiamata terminata , costo: ' + firstUser.spesaChiamate + ' €');
console.log('Credito residuo:' + firstUser.numero404() + '€');
firstUser.chiamata(3);
console.log('Chiamata');
console.log('Chiamata terminata , costo: ' + firstUser.spesaChiamate + ' €');
console.log('Chiamate effettuate: ' + firstUser.getNumeroChiamate());
console.log('Credito residuo:' + firstUser.numero404() + '€');
firstUser.azzeraChiamate();
console.log('azzera chiamate');
console.log('Chiamate effettuate: ' + firstUser.getNumeroChiamate());
console.log('==========QUI FINISCE IL PRIMO UTENTE========');
let secondUser = new User2(10);
console.log(secondUser);
secondUser.ricarica(25);
console.log('Ricarica effettuata');
console.log('Credito residuo: ' + secondUser.numero404() + '€');
console.log('Chiamata');
secondUser.chiamata(3);
console.log('Chiamata terminata, costo: ' + secondUser.spesaChiamate + ' €');
console.log('Credito residuo: ' + secondUser.numero404() + '€');
console.log('Chiamata');
secondUser.chiamata(9);
console.log('Chiamata terminata, costo: ' + secondUser.spesaChiamate + ' €');
console.log('Credito residuo: ' + secondUser.numero404() + '€');
console.log('Chiamata');
secondUser.chiamata(11);
console.log('Chiamata terminata , costo: ' + secondUser.spesaChiamate + ' €');
console.log('Credito residuo: ' + secondUser.numero404() + '€');
console.log('Chiamata');
secondUser.chiamata(6);
console.log('Chiamata terminata , costo: ' + secondUser.spesaChiamate + ' €');
console.log('Credito residuo: ' + secondUser.numero404() + '€');
console.log('Chiamate effettuate ' + secondUser.getNumeroChiamate());
secondUser.azzeraChiamate();
console.log('azzera chiamate');
console.log('Chiamate effettuate ' + secondUser.getNumeroChiamate());
console.log('==========QUI FINISCE IL SECONDO UTENTE========');
let thirdUser = new User3(10);
console.log(thirdUser);
thirdUser.ricarica(50);
console.log('Ricarica effettuata');
console.log('Credito residuo: ' + thirdUser.numero404() + '€');
console.log('Chiamata');
thirdUser.chiamata(18);
console.log('Chiamata terminata, costo: ' + thirdUser.spesaChiamate + ' €');
console.log('Credito residuo: ' + thirdUser.numero404() + '€');
console.log('Chiamata');
thirdUser.chiamata(2);
console.log('Chiamata terminata, costo: ' + thirdUser.spesaChiamate + ' €');
console.log('Credito residuo: ' + thirdUser.numero404() + '€');
console.log('Chiamata');
thirdUser.chiamata(27);
console.log('Chiamata terminata , costo: ' + thirdUser.spesaChiamate + ' €');
console.log('Credito residuo: ' + thirdUser.numero404() + '€');
console.log('Chiamata');
thirdUser.chiamata(17);
console.log('Chiamata terminata , costo: ' + thirdUser.spesaChiamate + ' €');
console.log('Chiamate effettuate ' + thirdUser.getNumeroChiamate());
console.log('Credito residuo: ' + thirdUser.numero404() + '€');
thirdUser.azzeraChiamate();
console.log('azzera chiamate');
console.log('Chiamate effettuate ' + thirdUser.getNumeroChiamate());
console.log('==========QUI FINISCE IL TERZO UTENTE========');
let errorUser = new UserError(0);
console.log(errorUser);
errorUser.ricarica(0);
console.log('Ricarica effettuata');
console.log('Il tuo credito residuo è di ' + errorUser.numero404() + '€');
console.log('Chiamata');
errorUser.chiamata(17);
console.log('Chiamata terminata, costo: ' + errorUser.spesaChiamate + ' €');
console.log('Credito residuo: ' + errorUser.numero404() + '€');
console.log('Chiamata');
errorUser.chiamata(2);
console.log('Chiamata terminata, costo: ' + errorUser.spesaChiamate + ' €');
console.log('Credito residuo: ' + errorUser.numero404() + '€');
console.log('Chiamata in corso...');
errorUser.chiamata(29);
console.log('Chiamata terminata , costo: ' + errorUser.spesaChiamate + ' €');
console.log('Chiamate effettuate ' + errorUser.getNumeroChiamate());
errorUser.azzeraChiamate();
console.log('azzera chiamate');
console.log('Chiamate effettuate ' + errorUser.getNumeroChiamate());
//# sourceMappingURL=app.js.map