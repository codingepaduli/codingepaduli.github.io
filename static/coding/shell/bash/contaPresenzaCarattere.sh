#!/bin/bash

if [[ $# -ne 2 ]]
then
	echo -e "\t Devi passare come argomenti una frase e una lettera da cercare nella frase. \n"
	exit 1;
fi

if [[ `echo $2 | wc -m ` -ne 2  ]]
then 
	echo -e "\t Il secondo parametro deve essere un singolo carattere. \n"
	exit 1;
fi

conta=$((`echo $1 | sed "s/[^$2]//g" | wc -m`-1))

echo -e "Nella frase \"$1\" il carattere $2 e' presente $conta volte \n"
