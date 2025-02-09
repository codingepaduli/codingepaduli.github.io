#!/bin/sh
#
# Per compatibilita, \033 in sh corrisponde a \E di bash
# Schema per usare i colori:
# echo -e "\033[STYLE;COLORE_TXT;COLORE_BACKm Qui va inserito il testo. "
#
# STYLE: 
# 0 ripristina il testo semplice
# 1 imposta il grassetto 
# 2 imposta la bassa luminosita
# 4 imposta il testo sottolineato
# 5 imposta il testo lampeggiante
# 6 imposta il testo lampeggiante
# 7 imposta i colori invertiti
#
# Colore     Colore se grassetto   Codice testo    Codice sfondo
# nero           grigio scuro           30            40
# rosso          rosso chiaro           31            41
# verde          verde chiaro           32            42
# marrone        giallo                 33            43
# blu            blu chiaro             34            44
# viola          viola chiaro           35            45
# cyan           ciano chiaro           36            46
# grigio chiaro  bianco                 37            47
#
# Se al termine si vuole ripristinare lo stile predefinito allora
# è necessario specificarlo applicando un secondo stile '\033[0m'
# echo -e "\033[STYLE;COLORE_TXT;COLORE_BACKm Testo colorato \033[0m Testo normale"
#

printf "Lo stile del testo si compone con il seguente formato: "
printf "\\\033[STYLE;COLORE_TXT;COLORE_BACKm"
printf "\n E' possibile applicarlo con una delle seguenti istruzioni: \n"
echo -e "   echo -e \"\\\\033[STYLE;COLORE_TXT;COLORE_BACKm Testo.\" "
echo -e "   printf \"\\\\\\\\\\\\033[STYLE;COLORE_TXT;COLORE_BACKm Testo.\" "
echo -e "Esempi vari di istruzioni colorate negli script."
echo -e "\033[1;32;40m Colore1"
echo -e "\033[0;31;40m Colore2"
echo -e "\033[4;32;40m Colore3"
echo -e "\033[2;31;44m Colore4"
echo -e "\033[0;33;45m Colore5 \033[0m" # Ripristino le impostazioni

# Schema per colorare il prompt:
# PS1='\[\033[STYLE;COLORE_TXT;COLORE_BACKm]prompt_voluto\033[0m]'
tmp_PS1=$PS1;
PS1='\033[0;33;45m prompt_voluto \033[0m >]'
export PS1

echo -e "Anche il prompt si puo colorare impostando la variabile PS1"

endColor='\033[0m'
style='1'
foregroundColor='36' 
backgroundColor='43'
color="\033[${style};${foregroundColor};${backgroundColor}m"

echo -e "Tabella degli stili e dei colori: "
printf "testo semplice         grassetto       corsivo         "
printf "sottolineato            lampeggiante     colori invertiti \n"
echo "-------------------------------------------------------"

for foregroundColor in $(seq 30 37);
do
    for backgroundColor in $(seq 40 47);
    do
        for style in $(seq 1 7);
        do
            color="\033[${style};${foregroundColor};${backgroundColor}m"
            printf " %s" "${style} ${foregroundColor} ${backgroundColor}"
            printf "${color} Colore ${endColor}"
        done
        printf "\n"
    done
done
