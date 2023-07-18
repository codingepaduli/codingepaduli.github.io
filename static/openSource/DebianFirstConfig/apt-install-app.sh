#!/bin/bash
#
# Remember to edit the /etc/apt/sources.list and execute the script as root

# Edit /etc/apt/sources.list and add contrib and non-free repositories:
#    deb http://deb.debian.org/debian/ bookworm main contrib non-free non-free-firmware
#    deb http://security.debian.org/debian-security bookworm-security main contrib non-free non-free-firmware
#    deb http://deb.debian.org/debian/ bookworm-updates main contrib non-free non-free-firmware
#    deb http://deb.debian.org/debian/ bookworm-backports main contrib non-free

# Provides the scripts apt-add-repository used to add section contrib, non-free and non-free-firmware
apt-get install -y software-properties-common

if [ $? -ne 0 ]; then
    exit 1
fi

# Adds the section contrib, non-free and non-free-firmware
apt-add-repository -y contrib && apt-add-repository -Y non-free && apt-add-repository -Y non-free-firmware

if [ $? -ne 0 ]; then
    exit 1
fi

apt-get update

if [ $? -ne 0 ]; then
    exit 1
fi

# FIX : missing package in debian bullseye
# textlive-extra-utils

# Enable secure connections (https) to the remote repositories 
# and install gnupg in order to import apt keys

apt-get install -y apt-transport-https gnupg apt-show-versions apt-utils

if [ $? -ne 0 ]; then
    exit 1
fi

##############################################
# Install multimedia software
##############################################

# Codecs for reading DVDs - EXIF information in JPEG - webp files - mp3 file - iphone HEIC / HEIF (High Efficiency Image)
apt-get install -y libdvdcss2 exif webp lame heif-thumbnailer

if [ $? -ne 0 ]; then
    exit 1
fi

# Win64 codecs for multimedia
# apt-get install -y w64codecs

if [ $? -ne 0 ]; then
    exit 1
fi

# applications
apt-get install -y simple-scan simplescreenrecorder kchmviewer imagination amide

if [ $? -ne 0 ]; then
    exit 1
fi

# Festival Text to Speech and Italian Festival Voice 
# Example1: echo "Ciao" | festival --tts
# Example2: echo "Ciao" | festival --tts --language italian
# apt-get install -y festival festlex-ifd

if [ $? -ne 0 ]; then
    exit 1
fi

# Multiple Arcade Machine Emulator (MAME)
# apt-get install -y mame mame-data mame-extra mame-tools gnome-video-arcade

if [ $? -ne 0 ]; then
    exit 1
fi

# games (MAME)
# apt-get install -y pokerth

if [ $? -ne 0 ]; then
    exit 1
fi

##############################################
# Install connection and internet software
##############################################

# SSH server and client, autossh for automatic reconnection
apt-get install -y openssh-client openssh-server openssh-sftp-server autossh

if [ $? -ne 0 ]; then
    exit 1
fi

# VNC server
# apt-get install -y tightvncserver

if [ $? -ne 0 ]; then
    exit 1
fi

# UFW and Colorful IP LAN Monitor
apt-get install -y ufw gufw iptraf nmap

if [ $? -ne 0 ]; then
    exit 1
fi

# Firefox Extended Support Release
apt-get install -y firefox-esr

if [ $? -ne 0 ]; then
    exit 1
fi

##############################################
# Install hardware management software
##############################################

# hardware management (alsa audio, bluez bluetooth, cups printer, ofono mobile telephony devices stack)
apt-get install -y alsa-utils bluetooth bluez bluez-tools blueman cups cups-client ofono

if [ $? -ne 0 ]; then
    exit 1
fi

# acpi info, list-hardware info, linux standard base reporting utilities
apt-get install -y acpi cpufrequtils lshw lshw-gtk lsb-base lsb-release

if [ $? -ne 0 ]; then
    exit 1
fi

# Disks, file-systems and recovery tools
## gparted: Partition manager
## testdisk: Testdisk partition scanner and PhotoRec file recovery tool
## ntfs-3g: Microsoft NTFS filesystem driver
## gnome-disk-utility: features, like support for trash, removable media and remote file systems
## ifuse: Filesystem USErmode for iphone 
## jmtpfs: Filesystem USErmode for MTP devices
## wipe: secure deletion of files (overwriting it more times)
## rmlint-gui : GUI for finding duplicate files & directories
apt-get install -y gparted testdisk ntfs-3g gnome-disk-utility gvfs gvfs-backends ifuse jmtpfs wipe rmlint-gui

if [ $? -ne 0 ]; then
    exit 1
fi

##############################################
# Install utils 
##############################################

# Microsoft compatibility tools
apt-get install -y cabextract mscompress

if [ $? -ne 0 ]; then
    exit 1
fi

# compression and file type utilities
apt-get install -y xarchiver p7zip-full psutils arj bzip2 gzip pigz unrar unzip zip lzma python3-lz4

if [ $? -ne 0 ]; then
    exit 1
fi

# system management
apt-get install -y aptitude aptitude-common # cockpit

if [ $? -ne 0 ]; then
    exit 1
fi

# GNOME 3 PIN or pass-phrase entry dialog for GnuPG
# apt-get install -y pinentry-gnome3

if [ $? -ne 0 ]; then
    exit 1
fi

# Installa GoCryptFS per criptare una cartella in una seconda da sincronizzare in cloud
# apt-get install -y gocryptfs

if [ $? -ne 0 ]; then
    exit 1
fi

# Burning tools 
## brasero: burning tool
## cdrdao: Disk-At-Once (DAO) burning tool
## dvdisaster: complements optical media with error correction data
apt-get install -y brasero brasero-common brasero-cdrkit cdrdao dvdisaster

if [ $? -ne 0 ]; then
    exit 1
fi

# cryptography utils
apt-get install -y python3-bcrypt python3-cryptography

if [ $? -ne 0 ]; then
    exit 1
fi

# cron and anacron
# apt-get install -y anacron at cron

if [ $? -ne 0 ]; then
    exit 1
fi

# dictionary
# apt-get install -y stardict

if [ $? -ne 0 ]; then
    exit 1
fi

##############################################
# Install developers tools 
##############################################

# apt-get install -y mariadb-client mariadb-server mycli

if [ $? -ne 0 ]; then
    exit 1
fi

# apt-get install -y apache2 php

if [ $? -ne 0 ]; then
    exit 1
fi

#apt-get install -y maven openjdk-11-jdk openjdk-11-jre

if [ $? -ne 0 ]; then
    exit 1
fi

apt-get install -y python3 python3-venv

if [ $? -ne 0 ]; then
    exit 1
fi

apt-get install -y git git-extras gitk # subversion

if [ $? -ne 0 ]; then
    exit 1
fi

#apt-get install -y ansible

if [ $? -ne 0 ]; then
    exit 1
fi

#apt-get install -y qemu qemu-kvm qemu-utils

if [ $? -ne 0 ]; then
    exit 1
fi

#apt-get install -y vagrant vagrant-libvirt libvirt-daemon-system

if [ $? -ne 0 ]; then
    exit 1
fi

apt-get install -y bash bash-completion curl dash diffutils tldr-py

if [ $? -ne 0 ]; then
    exit 1
fi

# password cracking tool
apt-get install -y john

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

##############################################
# Install text packages 
##############################################

# editors and viewer
apt-get install -y evince micro gedit # docbook-xml

if [ $? -ne 0 ]; then
    exit 1
fi

#apt-get install -y pandoc pandoc-citeproc texlive texlive-xetex texlive-luatex librsvg2-bin #pandoc-crossref

if [ $? -ne 0 ]; then
    exit 1
fi

# Installa i dizionari hunspell e aspell per il controllo ortografico (in Atom)
apt-get install -y hunspell-it hunspell-en-gb hunspell-en-us aspell aspell-en aspell-it

if [ $? -ne 0 ]; then
    exit 1
fi

# Installa il tool per lavorare con i formati testuali (json, toml, xml)
## crudini: bash utility for reading ini file (used in Mozilla Bookmarks for loading profile.ini)
apt-get install -y fd-find jq gawk grep gron crudini

if [ $? -ne 0 ]; then
    exit 1
fi

## Installa i pacchetti di "beautiful interfaces"
apt-get install -y boxes cowsay lolcat cmatrix

if [ $? -ne 0 ]; then
    exit 1
fi

apt-get autoremove -y --purge

