#!/bin/bash
echo -e "\nInserisci un tasto.\n"
read Tasto;
case "$Tasto" in
  [[:lower:]]   ) echo -e "Lettera minuscola\n";;
  [[:upper:]]   ) echo -e "Lettera maiuscola\n";;
  [0-9]         ) echo -e "Cifra\n";;
  *             ) echo -e "Punteggiatura, spaziatura, o altro\n";;
esac      #  Sono permessi gli intervalli di caratteri se
          #+ compresi tra [parentesi quadre]
          #+ o nel formato POSIX tra [[doppie parentesi quadre.


