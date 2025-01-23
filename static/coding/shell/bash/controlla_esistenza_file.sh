#!/bin/bash

# Si realizzi uno script “controlla.sh” che prende come parametro il nome di un
# file ed, ad intervalli di 20 secondi, controlli che il file sia stato creato,
# restando in attesa fino alla creazione.

if [ ! $# -eq 1 ]
then
	echo -e "\n\tQuesto script richiede come parametro il nome di un file."
	exit 1
fi

until [ -f $1 ]
do  
	echo -e "\tIo attendo 20 secondi, tu invece crea il file \"$1\" ";
	echo -e "\t oppure interrompimi premendo Control + C."
	sleep 20
done

echo -e "\n\tFile \"$1\" creato, termino l'esecuzione."

