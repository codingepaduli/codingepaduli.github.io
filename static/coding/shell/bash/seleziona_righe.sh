#!/bin/bash

if [[ ! $# -eq 1 ]]
then
	echo "Devi specificare un file da creare."
	exit 1
fi

if [[ ! -f seleziona_righe_elenco.txt ]] 
then
	echo "Il file \"seleziona_righe_elenco.txt\" non esiste."
	exit 1
fi

if [[ ! -f seleziona_righe_lista.txt ]]
then
	echo "Il file \"seleziona_righe_lista.txt\" non esiste."
	exit 1
fi

if [[ -f $1 ]]
then
	echo "Il file $1 esiste già".
	exit 1
fi


seconda_riga=`sort seleziona_righe_elenco.txt | head --lines=2 | tail --lines=1`
echo -e "\n\t La riga del file \"seleziona_righe_elenco.txt\" che viene lessicograficamente "
echo -e "\t per seconda è: $seconda_riga."

selezione=`head --lines=3 seleziona_righe_elenco.txt && tail --lines=2 seleziona_righe_lista.txt`
echo -e "\n\t Creo il file "$1" contenente le prime 3 righe del file "
echo -e "\t \"seleziona_righe_elenco.txt\" e le ultime 2 righe del file \"seleziona_righe_lista.txt\" "
echo -e "\n\t $1="$selezione
echo "$selezione" > $1

exit 0

