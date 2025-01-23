#!/bin/bash

if [[ $# -le 0 ]]
then
	echo -e "\t Devi inserire almeno una lettera come argomento. \n"
	exit 1;
fi

echo -e "\n\tInseriti $# argomenti"
riga_output="\n";

i=1;
num_args=$#
while [ $i -le $num_args ]
do
	case "$1" in
	  # [[:lower:]]	) echo -e "\tParametro $i=$1: Lettera minuscola";;
	  # [[:upper:]]	) echo -e "\tParametro $i=$1: Lettera maiuscola";;
	  # [[:digit:]]	) echo -e "\tParametro $i=$1: Cifra";;
	  # *	) echo -e "\tParametro $i=$1: Punteggiatura, spaziatura, o altro";;
		[a-cA-C] ) riga_output=$riga_output"0\n";;
		[d-fD-F] ) riga_output=$riga_output"1\n";;
		[g-iG-I] ) riga_output=$riga_output"2\n";;
		[j-lJ-L] ) riga_output=$riga_output"3\n";;
		[m-oM-O] ) riga_output=$riga_output"4\n";;
		[p-rP-R] ) riga_output=$riga_output"5\n";;
		[s-uS-U] ) riga_output=$riga_output"6\n";;
		[v-xV-X] ) riga_output=$riga_output"7\n";;
		[yzYZ]   ) riga_output=$riga_output"8\n";;
		*	 ) riga_output=$riga_output"Carattere non permesso.\n\n";;

	esac 
	i=$((i+1))
	shift 1
done
echo "Stampo l'output su più righe."
echo -e $riga_output

echo "Stampo l'output su una sola riga."
unica_riga_output=`echo -e $riga_output`
echo $unica_riga_output

exit 0

