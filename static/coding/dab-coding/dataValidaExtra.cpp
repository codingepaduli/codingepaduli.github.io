#include <iostream>
using namespace std;

/*
Autore: Cognome Nome
Data 2023-05-04

Progettare un programma che permetta all'utente di inserire giorno, mese 
ed anno e di verificare se essi corrispondono effettivamente ad una data 
valida. L'output deve essere un messaggio indicante "la data è valida" 
oppure "la data è invalida".

Traccia extra: Verificare le date per il mese di Febbraio (giorni 30 e 31 
non sono validi), verificare che il giorno 31 per i mesi pari non sia valido.

Traccia extra 2: Verificare che la data sia valida in caso di anno bisestile;
*/

int main ()
{
    int anno,mese,giorno;
    int annoBisestile = 0;

    cout<<"inserisci anno:";
    cin>>anno;
    cout<<"inserisci mese:";
    cin>>mese;
    cout<<"inserisci giorno:";
    cin>>giorno;

    // Verifico se l'anno è bisestile
    if (anno % 400 == 0) {
        annoBisestile = 1;
    }
    if (anno % 4 == 0 && anno % 100 != 0) {
        annoBisestile = 1;
    }

    // Verifico se il mese non è valido
    if (mese < 1 || mese > 12) {
        cout << "data invalida:";
    } else {
        // Verifico se il giorno non è valido
        if (giorno < 1 || giorno > 31) {
            cout << "data invalida:";
        } else {
            if (mese == 2) {
                // Se l'anno è bisestile, Febbraio ha 29 giorni
                if (annoBisestile == 1) {
                    if (giorno > 29) {
                        cout << "data invalida:";
                    } else {
                        cout << "data VALIDA:";
                    }
                } else {
                    if (giorno > 28) {
                        cout << "data invalida:";
                    } else {
                        cout << "data VALIDA:";
                    }
                }
            } else {
                // Mesi di 31 giorni
                if (mese==1 || mese==3 || mese==5 || mese==7 || mese==8 || mese==10 || mese==12) {
                    if (giorno > 31) {
                        cout << "data invalida:";
                    } else {
                        cout << "data VALIDA:";
                    }
                // Mesi di 30 giorni
                } else {
                    if (giorno > 30) {
                        cout << "data invalida:";
                    } else {
                        cout << "data VALIDA:";
                    }
                }
            }
        }
    }
    
    return 0;
}
