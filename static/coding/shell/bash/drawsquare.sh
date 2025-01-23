#!/bin/bash
# Disegno un quadrato di lato n
# gli angoli li disegno col segno meno
# ed i lati col trattino

if [[ ! $# -eq 1 ]]
then
	echo "Devi passare un solo argomento (numerico)."
	exit -1
else
	if [[ $1 -ge 2 ]]
	then
		if [[ $1 -le 15 ]]
		then
			echo -e "\n\n"

			#Stampo la prima riga
			i=2
			rigaOutput="+"
			while [[ $i -lt $1 ]]
			do
				rigaOutput=$rigaOutput-
				i=$((i+1))
			done
			rigaOutput=$rigaOutput+
			echo $rigaOutput

			#Stampo le righe successive
			i=2
			while [[ $i -lt $1 ]]
			do
				rigaOutput="|"
				j=2
				while [[ $j -lt $1 ]]
				do
					rigaOutput=$rigaOutput"*"
					j=$((j+1))
				done
				rigaOutput=$rigaOutput"|"
				echo $rigaOutput
				i=$((i+1))
			done

			#Stampo la ultima riga
			i=2
			rigaOutput="+"
			while [[ $i -lt $1 ]]
			do
				rigaOutput=$rigaOutput-
				i=$((i+1))
			done
			rigaOutput=$rigaOutput+
			echo $rigaOutput

			exit 0
		else 
			echo "L'argomento deve esser compreso tra 2 e 15"
			exit -1
		fi
	else
		echo "L'argomento deve esser compreso tra 2 e 15"
		exit -1
	fi
fi
