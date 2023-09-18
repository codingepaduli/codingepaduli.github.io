#!/bin/bash

# Comandi da dare al primo avvio:
#### Scarico git
#### apt-get install -y git
####
#### Checkout del repository
#### git clone https://github.com/codingepaduli/codingepaduli.git
####
#### Cartella script
#### cd codingepaduli/static/static/openSource/DebianFirstConfig/

# Avvia lo script e salva l'output di messaggi ed errori nei file di log
#    ./root-startup.sh > >(tee -a stdout.log) 2> >(tee -a stderr.log >&2)

# Imposta il log degli errori e l'uscita in caso di errore
set -eE  # same as: `set -o errexit -o errtrace`

# Log per errori
trap 'printf "\e[31m Exit status: %s. \n Line: %s -- %s \n Line: %s -- %s \n Line: %s -- %s \n \n Error: %s \n Script or function: %s \e[m \n" "$?" "${BASH_LINENO[0]}" "${BASH_SOURCE[0]}" "${BASH_LINENO[1]}" "${BASH_SOURCE[1]}" "${BASH_LINENO[2]}" "${BASH_SOURCE[2]}" "${BASH_COMMAND[*]}" "${FUNCNAME[*]:-$(caller)}"  ' ERR

DISTRO="debian12"

# Install all the apps
## use "" to apply the changes
## use "--dry-run" to simulate the changes
. ./root/$DISTRO-apt-install-app.sh           "--dry-run"
. ./root/$DISTRO-apt-install-non-free-app.sh  "--dry-run"
. ./root/$DISTRO-apt-install-dev.sh           "--dry-run"
# . ./root/docker-installedApp.sh
# . ./root/flatpak-installAllScript.sh
# . ./root/npm-installedApp.sh

# Remove unwanted apps
. ./root/$DISTRO-apt-remove-app.sh            "--dry-run"

# Create users and groups
. ./root/create-users.sh

# Copy the file in the user home
mkdir -p "/home/io/startup"
cp -r "./user/." "/home/io/startup/"
chown -R io:casa "/home/io/startup/"

# Execute the script as user, not as root
#### PAY ATTENTION to upload the SSH key to git host
# su -c '/home/io/startup/startup-user.sh' io
