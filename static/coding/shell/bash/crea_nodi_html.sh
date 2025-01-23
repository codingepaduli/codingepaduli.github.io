#!/bin/bash

mkdir -p -m 755 ambiente
cd ambiente
# Ho 2 modi di creare una sequenza
# con seq inizio intervallo fine
for i in `seq 1 15`
do
	touch "node$i.html"
done

# e con un while
i=16
while [ $i -le 30 ] 
do
touch "node$i.html"
i=$(( i+1  ))
done

#Ora creo la scritta nodi$i.html in ogni file
for i in `ls node*.html`
do
	echo -e "<HTML><HEAD><TITLE>$i</TITLE></HEAD>" > $i
	echo -e "<BODY>Questo file $i &egrave un file html.</BODY></HTML>" >> $i
done

# ed aggiungo ad ogni file un commento con proprietario e data di ultima modifica.
# il formato per la stampa è %u=proprietario, %TH=ora, %TM=minuti, %TD=data.
for i in `ls -1 node*.html`
do
	#Per ogni file cerco il proprietario e la data di ultima modifica.
	owner=`find ./ -maxdepth 1 -type f -name "$i" -printf "%u" `
	last_modify=`find ./ -maxdepth 1 -type f -name "$i" -printf "%TH:%TM %TD" ` 

	#memorizzo temporaneamente il contenuto del file
	temp=`cat $i`

	#Riscrivo il file comprensivo dei commenti
	echo -e "<!-- file=$i: Ownew=$owner,  Last_Modyfy=$last_modify -->" > $i
	echo -e "$temp" >> $i
done
	
cd ..

exit 0
