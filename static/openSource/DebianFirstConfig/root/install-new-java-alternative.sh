#!/bin/bash

# Instructions:
## Download openjdk-17-x64.tar.gz file
## Extract in folder /usr/lib/jvm/java-17-openjdk-amd64/
## Set the variable VERSION=java-17
## Install the alternative: 
##    sudo update-alternatives --install /usr/bin/java java /usr/lib/jvm/java-17-openjdk-amd64/bin/java 1711
##    sudo update-alternatives --install /usr/bin/java java /usr/lib/jvm/java-21-openjdk-amd64/bin/java 2111
## Run this script

# Per visualizzare la versione di Java:
# update-alternatives --get-selections | grep 'java'

VERSION="21"
JDK_DIR="/usr/lib/jvm/java-$VERSION-openjdk-amd64"
TARGET_BIN_DIR="$JDK_DIR/bin"
TARGET_DIR="/usr/bin"

for filepath in "$TARGET_BIN_DIR"/*; do
  file=$(basename "$filepath")
  echo "$TARGET_DIR/$file  -  $file - $TARGET_BIN_DIR/$file"
  update-alternatives --install "$TARGET_DIR/$file" "$file" "$TARGET_BIN_DIR/$file" ${VERSION}11
done
