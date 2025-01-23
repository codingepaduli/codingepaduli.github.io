#!/bin/bash
if [[ ! $# -eq 2 ]]
then
	echo -e "\n\t Devi inserire come parametro un numero ed un nome di un utente.\n"
	exit 1
fi

if [[ ! $1 -gt 0 ]]
then
	echo -e "\n\t Il numero di utenti deve essere positivo. \n"
	exit 1;
fi

ultimi_utenti=`who | tail --lines=$1 | cut -d\  -f1 ` 
echo -e "\n\tUltimi $1 utenti collegati: "$ultimi_utenti

utenti_possibili=` cut -d\: -f1 /etc/passwd | grep "$2"`
echo -e "\tElenco utenti che corrispondono alla ricerca:\n$utenti_possibili\n"

if [[ -n "$utenti_possibili" && "$utenti_possibili" == "$2" ]]
then
	echo -e "\n\t L'utente $2 esiste in questo sistema"

	loggato=`who | cut -d\  -f1 | grep $2`
	if [[ ! -z $loggato ]]
	then
		echo -e "\t ed è loggato.\n"
	else
		echo -e "\t ma NON è loggato.\n"
	fi
else
	echo -e "\tL'utente $2 non esiste in questo sistema.\n"
fi

exit 0;
