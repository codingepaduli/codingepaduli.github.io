#!/bin/bash

# Per visualizzare la versione di Java:
# update-alternatives --get-selections | grep 'java'

javaVersion="java-21"

while IFS=" " read -r nome stato comando; do
    # echo "$nome - $stato -- $comando"
    newCommand=$(update-alternatives --list "$nome" | grep "$javaVersion")
    if [ -z "$newCommand" ]; then
        echo "untouched $nome  ->  $comando"
    else
        echo "change $nome  ->  $newCommand"
        sudo update-alternatives --set "$nome" "$newCommand"
    fi
done < <(update-alternatives --get-selections | grep 'java')

