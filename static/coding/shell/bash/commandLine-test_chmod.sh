#!/bin/bash

# Eseguire prima lo script “prepare.sh” che si occupa di creare una directory
# “ambiente” con file e directory sui quali effettuare i test di seguito.

echo -e "\n Gestione permessi tramite comando 'chmod' nell'ambiente creato.. "
cd ambiente

# inizializzo il file con i permessi
chmod 0440 regular_file1

echo "Il comando chmod gestisce i permessi degli utenti (destinatari) sui vari file (e directory)."
echo -e "I permessi sono quelli di: \n\t lettura (r) => peso 4 \n\t scrittura (w) => peso 2 \n\t esecuzione (x) => peso 1 (l'esecuzione per le directory significa permesso di 'attraversarle' e quindi di entrarci."
echo -e "Le azioni sul file sono: \n\t assegnazione permessi (=) \n\t aggiunta (+) a permessi correnti \n\t rimozione (-) dai permessi correnti."
echo -e "I destinatari dei permessi possono essere: utente corrente (u), utenti del gruppo (g): altri (o). Si possono indicare piu destinatari ('ug' oppure 'ugo'), per indicare tutti si usa (a).\n"
echo 'Il comando si puo usare indicando destinatario, azione e permessi nella forma letterale: '
echo -e "\t chmod ug+rwx file"
echo -e "\t \t => destinatario ug (utente e gruppo utente)"
echo -e "\t \t => azione + (privilegi da aggiungere a quelli esistenti)"
echo -e "\t \t => privilegi rwx (lettura scrittura esecuzione)"
echo 'oppure nella forma numerica, indicando la somma dei permessi per utente, gruppo e altri: '
echo -e "\t chmod 753 file"
echo -e "\t \t => permessi utente => 7 ovvero la somma di lettura (4), scrittura (2) ed esecuzione (1)"
echo -e "\t \t => permessi gruppo => 5 ovvero la somma di lettura (4) ed esecuzione (1)"
echo -e "\t \t => permessi utente => 3 ovvero la somma di scrittura (2) ed esecuzione (1)"
echo -e "\n Esistono poi altri 3 permessi speciali per file e directory:"
echo -e "\t set-user-ID 's' => peso 4 => Permesso di esecuzione del file con gli stessi permessi del proprietario del file"
echo -e "\t set-group-ID 's' => peso 2 => Permesso di esecuzione del file con gli stessi permessi del gruppo proprietario del file"
echo -e "\t restricted deletion flag 't' / sticky bit 't' => peso 1 => "
echo -e "\t\t Se applicato su directory viene chiamato 'restricted deletion flag', e permette solo al proprietario della directory o al proprietario del file di rimuovere il file dalla directory o di rinominare il il file. In genere si usa su cartelle in cui tutti gli utenti possono scrivere, come la cartella /tmp."
echo -e "\t\t Se applicato su file, viene chiamato 'sticky bit' e permette la copia in swap memory del file per un caricamento piu veloce che da disco".

echo -e "\n ESEMPIO D'USO - FORMA LETTERALE: permessi correnti del file: regular_file1"
ls -l regular_file1

echo -e "\n assegno (=) i permessi rwx all'utente corrente"
chmod u=rwx regular_file1
ls -l regular_file1

echo -e "\n rimuovo (-) i permessi wx all'utente corrente"
chmod u-wx regular_file1
ls -l regular_file1

echo -e "\n al gruppo (g) aggiungo (+) i permessi di scrittura (w) ed esecuzione (x)"
chmod g+wx regular_file1
ls -l regular_file1

echo -e "\n ad utente (u) gruppo (g) e altri (o) assegno (=) i permessi di scrittura (w) ed esecuzione (x)"
echo -e "NOTA: il permesso di lettura per l'utente corrente viene cancellato perche' sovrascritto, dato che e' stata fatta un assegnazione, non un aggiunta"
chmod ugo=wx regular_file1
ls -l regular_file1

echo -e "\n a tutti (a) rimuovo (-) i permessi di scrittura (w) ed esecuzione (x)"
echo -e " poi all' utente (u) aggiungo (+) i permessi di lettura (r) "
echo -e " poi al gruppo (g) aggiungo (+) i permessi di lettura (r) "
chmod a-wx,u+r,g+r regular_file1
ls -l regular_file1

echo -e "\n ESEMPIO D'USO - FORMA NUMERICA:"
echo -e "\n assegno i permessi rwx (4+2+1=7) ad utente, gruppo ed altri"
chmod 777 regular_file1		# r=4, w=2, x=1 => 7=r+w+x=4+2+1
ls -l regular_file1

echo -e "\n assegno il permesso di lettura r (r=4) ad utente, nessun permesso al gruppo e ad altri utenti"
chmod 400 regular_file1		# r=4
ls -l regular_file1

echo -e "\n ESEMPIO D'USO - PERMESSI SPECIALI E DIRECTORY "
echo -e "permessi cartella dir2"
ls -ld */
echo -e "\n rimuovo tutti i permessi della cartella dir2, tranne la lettura per l'utente "
chmod 400 dir2
ls -ld */

echo -e "\n eseguo un accesso alla cartella con 'cd dir2' ed ottengo permesso negato (manca il permesso di attraversamento 'x')"
cd dir2

echo -e "\n aggiungo il permesso di attraversamento 'x' alla cartella dir2"
chmod +x dir2
cd dir2
echo -e "\n ora non ho accesso negato, ma sono nella cartella dir2"
cd ..

echo -e "\n assegno tutti i permessi, compresi quelli speciali, al file"
chmod 7777 regular_file1
ls -l regular_file1
