/*
Autore: ________ Data: __________
Calcola il prezzo scontato e applica una tassa

INPUT: il prezzo articolo e la percentuale di sconto
OUTPUT: il prezzo finale, scontato e con la tassa applicata

VARIABILI INPUT: pa, ps
VARIABILI OUTPUT: pf
*/
#include <iostream>
#include <cmath>
using namespace std;
int main()
{
    // variabili input
	float pa=0;     // pa e' il prezzo articolo intero
	int ps=0;       // ps e' la percentuale dello sconto da applicare
	float t=0;      // t e' la tassa da calcolare se pa>10000

	// variabili output
	float pf=0;     // pf e' il prezzo finale da pagare con lo sconto applicato

	// Leggo input dall'utente
	cout<<" inserisci il prezzo dell'articolo:";
	cin>>pa;
	cout<<" inserisci la percentuale dello sconto da applicare:";
	cin>>ps;
	
	// Calcolo il prezzo finale
	pf=pa-(pa*ps)/100;
	
	// Applico la tassa
	if(pa>10000)
	{
		t=sqrt(pf);
		cout<<" la tassa e':"<<t;
		pf=pf+t;
	}
	
	// Output del prezzo finale
	cout<<"il prezzo finale da pagare e':"<<pf;
	return 0;
}
