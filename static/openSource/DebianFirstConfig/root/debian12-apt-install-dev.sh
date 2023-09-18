#!/bin/bash
#
# Remember to edit the /etc/apt/sources.list and execute the script as root

# Edit /etc/apt/sources.list and add contrib and non-free repositories:
#    deb http://deb.debian.org/debian/ bookworm main contrib non-free non-free-firmware
#    deb http://security.debian.org/debian-security bookworm-security main contrib non-free non-free-firmware
#    deb http://deb.debian.org/debian/ bookworm-updates main contrib non-free non-free-firmware
#    deb http://deb.debian.org/debian/ bookworm-backports main contrib non-free

# APT options
#
## -y: answer "y"
## --quiet: reduce log messages
## --dry-run: only simulate the changes
APT_OPTS=" -y --quiet --quiet $1" 
APT_UPDATE_OPTS=" -y --quiet --quiet" # unsupported --dry-run

apt-get update $APT_UPDATE_OPTS

if [ $? -ne 0 ]; then
    exit 1
fi

##############################################
# Install developers tools 
##############################################

apt-get install $APT_OPTS mariadb-client mariadb-server mycli

if [ $? -ne 0 ]; then
    exit 1
fi

apt-get install $APT_OPTS apache2 php

if [ $? -ne 0 ]; then
    exit 1
fi

apt-get install $APT_OPTS maven openjdk-17-jre-headless openjdk-17-jre-headless

if [ $? -ne 0 ]; then
    exit 1
fi

apt-get install $APT_OPTS python3 python3-venv

if [ $? -ne 0 ]; then
    exit 1
fi

apt-get install $APT_OPTS git git-extras gitk # subversion

if [ $? -ne 0 ]; then
    exit 1
fi

# password cracking tool
apt-get install $APT_OPTS john

if [ $? -ne 0 ]; then
    exit 1
fi

# Initializa tldr
# git clone https://github.com/tldr-pages/tldr.git SVN/folder
# tldr init
# insert SVN/folder
# tldr reindex
# search any command with "tldr find command"
# update and reindex with "tldr update && tldr reindex"

# pandoc-crossref can be installed from here
# https://github.com/lierdakil/pandoc-crossref#readme
#
apt-get install $APT_OPTS pandoc texlive texlive-xetex texlive-luatex texlive-extra-utils librsvg2-bin

if [ $? -ne 0 ]; then
    exit 1
fi


apt-get autoremove $APT_OPTS --purge
