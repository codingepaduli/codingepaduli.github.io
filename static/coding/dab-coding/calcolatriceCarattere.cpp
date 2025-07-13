/* 
Autore: _______ Data: _________
Traccia: Questo programma realizza una calcolatrice che svolge una delle
  quattro operazioni, scelta dall'utente, su due numeri inseriti dall'utente.

INPUT i due numeri ed il carattere che indica l'operazione;
OUTPUT il risultato dell'operazione

VARIABILI INPUT: num1, num2, operazione
VARIABILI OUTPUT: risultato
*/

#include <iostream>
using namespace std;

int main() 
{
    // variabili input
    double num1, num2;
    char operatore;

    // variabili output
    double risultato;

    // Richiesta dei numeri e dell'operatore
    cout << "Inserisci il primo numero: ";
    cin >> num1;
    cout << "Inserisci il secondo numero: ";
    cin >> num2;
    cout << "Inserisci l'operatore (+, -, *, /): ";
    cin >> operatore;

    // Eseguo l'operazione in base all'operatore
    switch (operatore) 
    {
        case '+':
            risultato=N1+N2;
            break;
        case '-':
            risultato=N1-N2;
            break;
        case '*':
            risultato=N1*N2;
            break;
        case '/':
            // Controlla se il secondo numero è zero per evitare la divisione per zero
            if (num2 != 0)
            {
                risultato=N1/N2;
            } else 
            {
                cout << "Errore: divisione per zero!" << endl;
            }
            break;
        default:
            cout << "Operatore non valido!" << endl;
    }

    // Output del risultato
    cout << "Risultato: " << risultato << endl;

    return 0;
}