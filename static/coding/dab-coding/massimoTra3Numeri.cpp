/* 
Autore: _______ Data: _________
Traccia: Questo programma determina il numero massimo tra 3 numeri.

INPUT i 3 numeri a, b, c
OUTPUT il massimo dei tre numeri

VARIABILI INPUT: a, b, c
VARIABILI OUTPUT: max
*/

#include <iostream>
using namespace std;

int main()
{
  // variabili input
  int a,b,c;

  // variabili output
  int max;

  // Leggo input dall'utente
  cout<<"inserisci il primo numero:";
  cin>>a;
  cout<<"inserisci il secondo numero:";
  cin>>b;
  cout<<"inserisci il terzo numero:";
  cin>>c;

  // Trovo il massimo
  if(a>b)
  {
    max=a;
  }
  else 
  {
    max=b;
  }

  if(c>max)
  {
    max=c;
  }

  // Output del massimo
  cout<<"il numero max dei tre numeri e':"<<max;
  return 0;	
}
