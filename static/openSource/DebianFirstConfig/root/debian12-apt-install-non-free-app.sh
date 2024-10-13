#!/bin/bash

# APT options
#
## -y: answer "y"
## --quiet: reduce log messages
## --dry-run: only simulate the changes
APT_OPTS=" -y --quiet --quiet $1"
APT_ADD_REPO_OPTS=" -y " # unsupported --quiet
APT_UPDATE_OPTS=" -y --quiet --quiet" # unsupported --dry-run

# Provides the scripts 'apt-add-repository' used to add 
#  section contrib, non-free and non-free-firmware in the
#  file /etc/apt/sources.list . See the line
#    deb http://deb.debian.org/debian/ bookworm main contrib non-free non-free-firmware
#
apt-get install $APT_OPTS software-properties-common

if [ $? -ne 0 ]; then
    exit 1
fi

# Adds the section contrib, non-free and non-free-firmware
apt-add-repository $APT_ADD_REPO_OPTS contrib 
apt-add-repository $APT_ADD_REPO_OPTS non-free 
apt-add-repository $APT_ADD_REPO_OPTS non-free-firmware

if [ $? -ne 0 ]; then
    exit 1
fi

apt-get update $APT_UPDATE_OPTS

if [ $? -ne 0 ]; then
    exit 1
fi

# See https://wiki.debian.org/MultimediaCodecs
# Win64 codecs for multimedia
# apt-get install $APT_OPTS w64codecs

if [ $? -ne 0 ]; then
    exit 1
fi


# non-free compression file format
apt-get install $APT_OPTS unrar

if [ $? -ne 0 ]; then
    exit 1
fi

# gaming
apt-get install $APT_OPTS mame-extra

if [ $? -ne 0 ]; then
    exit 1
fi
#
# Check your firmware with:
#  - sudo update-initramfs -u
#
# In case of warning messages like:
#  - Possible missing firmware /lib/firmware/i915/icl_guc_32
#
# apt-get install apt-file && apt-file update
#
# apt-file search icl_guc
# Output will search the file in the missing package:
#   firmware-misc-nonfree: /lib/firmware/i915/icl_guc_32.0.3.bin
#
# You need to install the missing package to solve the warning
# apt-get install firmware-misc-nonfree 
