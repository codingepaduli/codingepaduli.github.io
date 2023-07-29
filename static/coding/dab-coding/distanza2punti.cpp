#include <iostream>
#include <cmath>
using namespace std;

/*
Autore: Cognome
Data: 2023-02-07

Calcolare la distanza tra due punti A di coordinate (x1, y1) e B di
 coordinate (x2, y2), utilizzando il teorema di Pitagora.
*/

int main() {
 	int x1, x2; //coordinate x1 e x2
 	int y1, y2; //coordinate y1 e y2
 	int b;      // base del triangolo
 	int h;      // altezza del triangolo
 	double distanza; // distanza tra A e B
 	
 	cout << "inserisci valore x1: ";
 	cin >> x1;
 	cout << "inserisci valore x2: ";
 	cin >> x2;
 	cout << "inserisci valore y1: ";
 	cin >> y1;
 	cout << "inserisci valore y2: ";
 	cin >> y2;
 	
 	b=x2-x1; //calcolo base del triangolo
 	cout << "il valore della base e' di: " << b << endl;
 	h=y2+y1; //calcolo l'altezza del triangolo
 	cout << "il valore dell'altezza o' di: " << h << endl;
 	distanza = sqrt(b^2+h^2); //calcolo distanza
 	cout << "il valore della distanza di: " << distanza << endl;
 	
	return 0;
}
