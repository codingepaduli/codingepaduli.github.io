#!/bin/bash
# Cercare file regolari e e directory nella directory corrente e
# - aggiungere la lettera "F" prima del nome per i file regolari
# - aggiungere la lettera "D" per le directory

if [ $# -eq 2 ]
then
	if [[ ! -d "$1" ]]
	then
		echo "Il primo parametro deve essere una directory esistente."
		echo "ed il secondo parametro un file."
		exit -2
	fi

	find $1 -maxdepth 1 -type d -printf "D %p \n" > $2
	find $1 -maxdepth 1 -type f -printf "F %p \n" >> $2
	exit 0
else
	echo "Il comando richiede 2 argomenti"
	exit -1
fi

