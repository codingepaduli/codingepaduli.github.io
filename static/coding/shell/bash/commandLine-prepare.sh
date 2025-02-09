#!/bin/bash

# Eseguire questo script “prepare.sh” per creare una directory “ambiente”
# con file e directory sui quali effettuare i vari test.

# i test sulla directory "ambiente" si trovano nello script “test.sh”.

echo "Inizializzazione ambiente..";
mkdir -p -m 755 ambiente
cd ambiente

echo "creo file regolari"
touch regular_file1
touch regular_file2
touch regular_file3
touch regular_file4
touch regular_file5
touch regular_file6

# aumento la dimensione del file
echo "Dimensione > 1" > regular_file2

echo "creo directory"
mkdir -p -m 755 dir1
mkdir -p -m 755 dir2
mkdir -p -m 755 dir3
mkdir -p -m 755 Dir4

touch dir1/ciao1
touch dir1/ciao2

chmod 400 regular_file?
chmod 450 regular_file2
chmod 410 regular_file3
chmod 400 dir?
chmod 505 dir1
ln regular_file1 regular_file8

touch Dir4/prova
chmod 755 Dir4/prova

echo "Inizializzazione completata"
