#include <iostream>
#include <math.h>
using namespace std;

/*
Autore: Cognome Nome
Data 2023-05-04

Realizzare un programma che permetta di risolvere un equazione di secondo grado ax^2 + bx + c = 0 che ha delta = b b - 4ac. A partire dai coefficienti a, b e c calcolare il delta e visualizzarlo in output. Inoltre:
- se delta > 0 allora visualizzare che l'equazione ammette due soluzioni reali e distinte;
- se delta = 0 allora visualizzare che l'equazione ammette due soluzioni reali e coincidenti;
- se delta < 0 allora visualizzare che l'equazione ammette due soluzioni immaginarie.

Sia nel caso del delta maggiore di zero, sia nel caso di delta uguale a zero, calcolare le soluzioni:
    x1 = (-b -Sqrt(delta))/(2*a);
    x2 = (-b +Sqrt(delta))/(2*a);
*/

int main() {
 	double a, b, c; // i coefficienti
 	double delta;   // il valore delta
 	double x1, x2;  // le soluzioni
 	
 	// input
 	cout << "inserisci valore a: ";
 	cin >> a;
 	cout << "inserisci valore b: ";
 	cin >> b;
 	cout << "inserisci valore c: ";
 	cin >> c;
 	
 	// elaborazione (calcolo delta)
 	delta=b*b-4*a*c; 
 	
 	cout << "delta : " << delta << endl;
 	
    if (delta<0)
    {
        cout << "l'equaziione ammette 2 soluzioni immaginarie " << endl;
    } else {
        if (delta>0)
        {
            cout << "l'equaziione ammette 2 soluzioni reali e distinte " << endl;
        }
        if (delta==0)
        {
            cout << "l'equaziione ammette 2 soluzioni reali e coicidenti " << endl;
        }
        x1 = (-b -sqrt(delta))/(2*a);
        x2 = (-b -sqrt(delta))/(2*a);
        cout << "x1 = " << x1 << endl;
        cout << "x2 = " << x2 << endl;
    }
 	
	return 0;
}
