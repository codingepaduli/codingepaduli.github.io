#include <iostream>
using namespace std;

/*
Autore: Cognome Nome
Data 2023-05-04

Progettare un programma che permetta all'utente di inserire giorno, mese 
ed anno e di verificare se essi corrispondono effettivamente ad una data 
valida. L'output deve essere un messaggio indicante "la data è valida" 
oppure "la data è invalida".
*/

int main ()
{
    int anno,mese,giorno;

    cout<<"inserisci anno:";
    cin>>anno;
    cout<<"inserisci mese:";
    cin>>mese;
    cout<<"inserisci giorno:";
    cin>>giorno;

    if (giorno>0 && giorno<32 && mese<13 && mese>0) {
        cout<<"la data è valida:";
    } else {
        cout<<"la data è invalida:";
    }
    return 0;
}
