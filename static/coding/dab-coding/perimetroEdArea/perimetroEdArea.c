#include <stdio.h>
#include <math.h>

/* 
	Autore ____ Data 18/01/2023
	
	Programma che, a partire da un numero D inserito dall'utente, 
	calcola l'area ed il perimetro del quadrato di lato D, l'area
	e la circonferenza del cerchio di raggio D e l'area ed il 
	perimetro del triangolo equilatero di lato D.
	
	Input: D
	Elaborazione ed Output: areaQuadrato, perimetroQuadrato, 
		areaCerchio, circonferenza, areaTriangoloEq, perimetroTriangoloEq
*/

int main(int argc, char** argv) {
	
	// variabili di input
	float D;
	
	// variabili di output
	float areaQuadrato, perimetroQuadrato;
	float areaCerchio, circonferenza;
	float areaTriangoloEq, perimetroTriangoloEq;
	
	// input
	printf("inserisci il valore D: ");
	scanf("%f", &D);
	
	// elaborazione
	areaQuadrato = D * D; 
	perimetroQuadrato = D * 4;
	areaCerchio = 3.14 * D * D;
	circonferenza = 2 * 3.14 * D;
	areaTriangoloEq = 0.86 * D * D;
	perimetroTriangoloEq = D * 3;
	
	// output
	printf("L'area del quadrato è %f \n", areaQuadrato);
	printf("Il perimetro del quadrato è %f \n", perimetroQuadrato);  
	printf("L'area del cerchio è %f \n", areaCerchio); 
	printf("La circonferenza del cerchio è %f \n", circonferenza); 
	printf("L'area del triangolo equilatero è %f \n", areaTriangoloEq); 
	printf("Il perimetro del triangolo equilatero è %f \n", perimetroTriangoloEq);
	
	return 0;
}
