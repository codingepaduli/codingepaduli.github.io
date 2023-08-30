#!/bin/bash

# Multimedia codecs
apt-get install $APT_OPTS libdvd-pkg

if [ $? -ne 0 ]; then
    exit 1
fi

# Needed to complete the installation of libdvd-pkg
sudo dpkg-reconfigure libdvd-pkg

# non-free firmware for x86 PC
##  for module r8169 -> firmware-realtek
##  for module i915 -> firmware-realtek
##  for Intel Wireless cards -> firmware-iwlwifi
apt-get install $APT_OPTS firmware-realtek firmware-iwlwifi

if [ $? -ne 0 ]; then
    exit 1
fi

# Forzo il cambio password al primo accesso degli utenti
passwd -e io
passwd -e dario
passwd -e roberto
passwd -e mamma

# Forzo il cambio password delle chiavi SSH
ssh-keygen -p -f ~/.ssh/id_ed25519

