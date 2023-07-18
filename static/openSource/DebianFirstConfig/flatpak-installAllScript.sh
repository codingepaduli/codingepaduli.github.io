#!/bin/bash

##############################################
# Install flatpak (and freedesktop.org / gnome / kde portals)
# Portals expose D-Bus interfaces for file access, opening URIs and others
# See the documentation here: https://github.com/flatpak/xdg-desktop-portal
##############################################
apt-get install -y flatpak xdg-utils xdg-desktop-portal xdg-desktop-portal-kde xdg-desktop-portal-gtk # gnome-software-plugin-flatpak

if [ $? -ne 0 ]; then
    exit 1
fi

flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo

if [ $? -ne 0 ]; then
    exit 1
fi

# check the remote "flathub" has been added
# 
# start the script as root if you want to automatically answer "yes" to all questions (-y)

for i in `cat flatpakInstalledApp.txt | egrep -v "^#"`;
do 
    printf "%-50s\n" "$i";
    flatpak install --or-update -y flathub $i;  # flathub -y $i (-y for "yes" to all questions)
done;
