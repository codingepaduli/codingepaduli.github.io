#!/bin/bash
echo -e "\nEsecuzione delle ricerche nell'ambiente creato.. "
cd ambiente

currDir=`find $i -maxdepth 0 `

for i in `find ./ -maxdepth 1 -type d`
do
	if [[ ! $i == $currDir"/" ]]
	then
		num_file=`find $i -maxdepth 1 -type f | wc -l`
		echo -e "\t la sub-dir $i contiene $num_file file."
	fi
done

echo -e "\n"
cd ..

exit 0
