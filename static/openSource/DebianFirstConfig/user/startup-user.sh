#!/bin/bash

# Avvia lo script e salva l'output di messaggi ed errori nei file di log
#    ./user-startup.sh > >(tee -a stdout.log) 2> >(tee -a stderr.log >&2)

cd "$HOME/startup"

./create_ssh_keys.sh

# hack
cp -r "$HOME/ssh/." "$HOME/.ssh"

## Prerequisite for script checkout_repositories.sh
mkdir -p "$HOME/Sviluppo/SVN"

./checkout_repositories.sh

./config_environment.sh