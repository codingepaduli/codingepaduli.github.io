#!/bin/bash
echo "Inizializzazione ambiente..";
mkdir -p -m 755 ambiente
cd ambiente

echo "creo directory e file ..."
mkdir -p -m 755 dir1
mkdir -p -m 755 dir2
mkdir -p -m 755 dir3
mkdir -p -m 755 dir4

touch dir1/ciao1_dir1
touch dir1/ciao2_dir1

touch dir2/ciao1_dir2
touch dir2/ciao2_dir2
touch dir2/ciao3_dir2

touch dir3/ciao1_dir3

echo "Inizializzazione completata"
