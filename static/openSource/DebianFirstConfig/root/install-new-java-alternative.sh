#!/bin/bash

# Questo script installa e configura tutti i collegamenti dell'alternativa per java.
#
# Un alternativa rappresenta un collegamento nella cartella /usr/bin che punta ad 
# un SINGOLO file, ad esempio /usr/bin/java punta a /usr/lib/jvm/java-11-openjdk-amd64/bin/java
#
# Ogni alternativa ha una priorita', ad esempio java-11 ha priorita' 1111, java-17 ha priorita' 1711
#
# Alcuni ambienti come JAVA hanno bisogno di piu collegamenti da impostare, java, javac, javadoc...
# Questo script li installa e li configura tutti.

# Per installare un'alternativa JAVA nuova:
## Download openjdk-17-x64.tar.gz file
## Create as root the folders:
## 	mkdir -p /usr/lib/jvm/
## Extract in folder /usr/lib/jvm/java-17-openjdk-amd64/
## Install the alternative (aggiorna il file /var/lib/dpkg/alternatives/java): 
##    sudo update-alternatives --install /usr/bin/java java /usr/lib/jvm/java-11-openjdk-amd64/bin/java 1111
##    sudo update-alternatives --install /usr/bin/java java /usr/lib/jvm/java-17-openjdk-amd64/bin/java 1711
##    sudo update-alternatives --install /usr/bin/java java /usr/lib/jvm/java-21-openjdk-amd64/bin/java 2111
## Run this script

# Per installare un'alternativa NODE nuova:
## Download node-v22.16.0-linux-x64.tar.xz (prebuilt file)
## Create as root the folders:
## 	mkdir -p /usr/lib/node/
## Extract in folder /usr/lib/node/node-22-x64/
## Install the alternative (aggiorna il file /var/lib/dpkg/alternatives/node):
##    sudo update-alternatives --install /usr/bin/node node /usr/lib/node/node-24-x64/bin/node 2411
##    sudo update-alternatives --install /usr/bin/node node /usr/lib/node/node-22-x64/bin/node 2211
## Run this script

# Per visualizzare i collegamenti di Java:
## update-alternatives --get-selections | grep 'java'

# Per impostare un'alternativa:
## sudo update-alternatives --set java /usr/lib/jvm/java-11-openjdk-amd64/bin/java

# Per verificare che i file eseguibili siano reperibili
## java --version
## javac --version
## jar --version

## Set the java version
JDK_VERSION="21"
JDK_DIR="/usr/lib/jvm/java-$JDK_VERSION-openjdk-amd64"
JDK_BIN_DIR="$JDK_DIR/bin"

## Set the gradle version
GRADLE_VERSION="814"
GRADLE_DIR="/usr/lib/gradle/gradle-8.14.2"
GRADLE_BIN_DIR="$GRADLE_DIR/bin"

## Set the node version
NODE_VERSION="24"
NODE_DIR="/usr/lib/node/node-$NODE_VERSION-x64"
NODE_BIN_DIR="$NODE_DIR/bin"

## ALL
TARGET_DIR="/usr/bin"
TARGET_BIN_DIR="$GRADLE_BIN_DIR" # JDK_BIN_DIR
VERSION="$GRADLE_VERSION" # JDK_VERSION

for filepath in "$TARGET_BIN_DIR"/*; do
  file=$(basename "$filepath")
  echo "$TARGET_DIR/$file  -  $file - $TARGET_BIN_DIR/$file"
  # installa l'alternativa (se gia installata, non tocca nulla)
  update-alternatives --install "$TARGET_DIR/$file" "$file" "$TARGET_BIN_DIR/$file" ${VERSION}11
  # imposta l'alternativa installata
  update-alternatives --set "$file" "$TARGET_BIN_DIR/$file"
done
