#!/bin/bash

# Eseguire prima lo script “prepare.sh” che si occupa di creare una directory
# “ambiente” con file e directory sui quali effettuare i test di seguito.

echo -e "\n esecuzione delle ricerche nell'ambiente creato.. "
cd ambiente

echo -e "\t ricerca file regolari: "
ls -l | grep "^-"

echo -e "\n\t ricerca directory con permesso r-x per altri utenti: "
ls -l | grep "^d......r.x"

echo -e "\tvisualizza file con permessi ""rw-"" per 2 volte consecutive"
ls -l | egrep '(rw-){2}'

echo -e "\t visualizza la data dei file"
ls -lA --time-style=long-iso

echo -e "\tvisualizza le righe contenenti la parola ""Dimensione"" "
# l'opzione -h indica di non stampare il nome del file
grep -h -e 'Dimensione' *

echo -e "\tvisualizza le righe contenenti la parola ""Dimensione"" "
echo -e "\t indicando anche il nome del file per ogni corrispondenza"
# l'opzione -H indica di stampare il nome del file per ogni corrispondenza
grep -H -e 'Dimensione' *

echo -e "\tvisualizza solo parole che iniziano con ""Dim"", non tutta la riga"
echo -e "\t indicando anche il nome del file per ogni corrispondenza"
# l'opzione -o indica di non stampare tutta la riga, ma solo le parti corrispondenti
grep -o -H -e 'Dim[a-zA-Z0-9]*' *

echo -e "\tvisualizza ricorsivamente tutti i file con la parola"
echo -e " ""Dim"" nella cartella corrente"
grep --include "*" --recursive "Dim" .

echo -e "\n\t utenti che usano bash (elencati nel file /etc/passwd)"
echo -e "\n\t seguiti da user ID e group ID. I campi sono separati "
echo -e "\n\t dal carattere ':', stampiamo i campi 1,3,4"
grep "bash" /etc/passwd | cut -d:  -f1,3,4

echo -e "\n\t file regolari con più di un link"
find ./  -links +1 -type f

echo -e "\n\t directory con nome che inizia per maiuscola"
find ./ -maxdepth 1 -type d | grep "^\./[[:upper:]]"

echo -e "\n\t file con permesso r-x per il gruppo di appartenenza"
find ./ -maxdepth 1 -perm -g=+r+x

echo -e "\n\t file con permesso lettura OPPURE esecuzione per il gruppo"
find ./ -maxdepth 1 -perm -g=+r -o -perm -g=+x

echo -e "\n\t file con permesso lettura OPPURE esecuzione per il gruppo "
echo -e "\t e li stampa in un modo particolare:"
find ./ -maxdepth 1 -perm -g=+r -o -perm -g=+x -printf "proprietario: %g, file: %p \n"

echo -e "\n\t Nella directory corrente visualizzare la data di ultimo "
echo -e "\t accesso per tutti i file regolari."
find ./ -maxdepth 1 -type f -printf " file: \"%p\"; data ed ora: %AD %AT \n"

echo -e "\n\t cerco directory con nome che inizia per ""d"" maiuscola o minuscola"
find ./ -maxdepth 1 -type d -iname "d*"  # iname indica case Insensitive

echo -e "\n\t cerco directory con nome che inizia per ""d"" maiuscola o minuscola e modificata negli ultimi 7 giorni"
find ./ -maxdepth 1 -type d -iname "d*" -mtime -7 # iname indica case Insensitive

echo -e "\n\t cerco files con nome che inizia per ""r"" maiuscola o minuscola e dimensione > 1 byte"
find ./ -maxdepth 1 -type f -iname "r*" -size +1c # c indica bytes

echo -e "\n\t cerco files con nome che inizia per ""r"" maiuscola o minuscola e proprietario 'io'"
find ./ -maxdepth 1 -type f -iname "r*" -user 'io'

echo -e "\n\t cerco files con nome che non termini con .jpg (case-Insensitive)"
find ./ -maxdepth 1 -type f -not  \( -name "*.jpg" -o -name "*.JPG" \) 

echo -e "\n\t cerco directory con nome che inizia per ""d"" maiuscola "
echo -e "\t o minuscola e ne elenco il contenuto."
find ./ -maxdepth 1 -type d \( -name "d*" -o -name "D*" \) -exec ls {} \;

echo -e "\n\t cerco i file modificati in una specifica data."
find ./ -maxdepth 1 -type f -newermt '2022-10-13 00:00' -not -newermt '2028-10-13 23:59' -exec ls -l --time-style=long-iso {} \;

echo -e "\n\t directory con nome che inizia per D maiuscola (uso le espr. regolari)."
find ./ -regextype posix-egrep -maxdepth 1 -regex "^./D.*$"

echo -e "\n\t file non nascosti (non iniziano col punto) che hanno per 2° carattere 'i' mostrati elencati tra doppi apici."
find ./ -regextype posix-egrep -maxdepth 1 -regex "./[^.]i.*$" | ls -Q

echo -e "\n"
cd ..
