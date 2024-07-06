#!/bin/bash

# Sync these variables with profile_custom
MY_SVN_REPO_FOLDER="$HOME/Sviluppo/SVN2"
MY_DOT_FILES_FOLDER="$MY_SVN_REPO_FOLDER/codingepaduli/static/static/openSource/DebianFirstConfig/user"

# -s : create a symbolic link
# -f : continues when error occours (useful in loop)
# -n : avoid symbolic link of a symbolic link
ln -sfn "$MY_DOT_FILES_FOLDER/profile_custom" "$HOME/.profile_custom"
chmod 600 "$HOME/.profile_custom"

touch "$HOME/.config/my_env.conf"

# Config podman to search container images on https://docker.io/
mkdir -p $HOME/.config/containers
touch $HOME/.config/containers/registries.conf
echo 'unqualified-search-registries=["docker.io"]' > "$HOME/.config/containers/registries.conf" 

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
