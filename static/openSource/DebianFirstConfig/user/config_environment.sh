#!/bin/bash

SVN_PATH="$HOME/Sviluppo/SVN/codingepaduli/static/static/openSource/DebianFirstConfig/user/"

# -s : create a symbolic link
# -f : continues when error occours (useful in loop)
# -n : avoid symbolic link of a symbolic link
ln -sfn "$SVN_PATH/profile_custom" "$HOME/.profile_custom"
chmod 600 "$HOME/.profile_custom"

# make backup of .bashrc
cp "$HOME/.bashrc" "$HOME/.bashrc_backup"

# append to .bashrc
### -a append
tee -a "$HOME/.bashrc" <<- xxxx

# if running bash
if [ -n "\$BASH_VERSION" ]; then
    # include .profile_custom if it exists (use if -e for symbolic link)
    if [ -e "\$HOME/.profile_custom" ]; then
        . "\$HOME/.profile_custom"
    fi
fi

xxxx
