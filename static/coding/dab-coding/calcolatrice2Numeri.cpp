/* 
Autore: _______ Data: _________
Traccia: Questo programma realizza una calcolatrice che svolge una delle
  quattro operazioni, scelta dall'utente, su due numeri inseriti dall'utente.

INPUT i due numeri ed il numero che indica l'operazione;
OUTPUT il risultato dell'operazione

VARIABILI INPUT: N1, N2, t
VARIABILI OUTPUT: R
*/

#include <iostream>
using namespace std;

int main()
{
  // variabili input
  int N1,N2,t;

  // variabili output
  int R;

  // Leggo input dall'utente
  cout<<"inserisci N1:";
  cin>>N1;
  cout<<"inserisci N2:";
  cin>>N2;
  cout<<"inserisci t:";
  cin>>t;

  // Svolgo l'operazione scelta
  if(t=1)
  {
    R=N1+N2;
  }
  if(t=2)
  {
    R=N1-N2;
  }
  if(t=3)
  {
    R=N1*N2;
  }
  if(t=4)
  {
    R=N1/N2;
  }

  // Output del risultato
  cout<<"Il risultato dell'operazione e':"<<R;

  return 0;
}
