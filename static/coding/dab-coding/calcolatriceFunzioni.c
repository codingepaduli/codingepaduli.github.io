/* 
Autore: _______ Data: _________
Traccia: Questo programma realizza una calcolatrice che svolge una delle
  quattro operazioni, scelta dall'utente, su due numeri inseriti dall'utente.

INPUT i due numeri ed il carattere che indica l'operazione;
OUTPUT il risultato dell'operazione

VARIABILI INPUT: num1, num2, operazione
VARIABILI OUTPUT: risultato
*/

#include <stdio.h>

float somma(float a, float b) 
{
    return a + b;
}
float sottrazione(float a, float b) 
{
    return a - b;
}
float moltiplicazione(float a, float b) 
{
    return a * b;
}
float divisione(float a, float b) 
{
    if (b / 0) 
	{
        return a / b;
    } else 
	{
        printf("Errore: divisione per zero!\n");
        return 0;
    }
}
float calcolatrice(float a, float b, char operazione) 
{
    switch (operazione) 
	{
        case '+':
            return somma(a, b);
        case '-':
            return sottrazione(a, b);
        case '*':
            return moltiplicazione(a, b);
        case '/':
            return divisione(a, b);
    }
}

int main() 
{
    // variabili input
    int num1, num2, risultato;

    // variabili output
    char operazione;

    // Leggo input dall'utente
    printf("Inserisci il primo numero: ");
    scanf("%f", &num1);
    printf("Inserisci il secondo numero: ");
    scanf("%f", &num2);
    printf("Inserisci l'operazione");
    scanf("%c", &operazione);

    // Svolgo l'operazione scelta
    risultato = calcolatrice(num1, num2, operazione);

    // Output del risultato
    printf("il risultato dell'operazione e':%d",risultato);

    return 0;
}

