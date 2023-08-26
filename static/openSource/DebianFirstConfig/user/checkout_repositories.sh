#!/bin/bash

WORKING_DIR="$HOME/Sviluppo/SVN"
# SVN_REPO=""
# SVN_USER=""
# SVN_PWD=''

GIT_USER="codingepaduli"
GIT_EMAIL=""

SSH_KEY="$HOME/.ssh/id_ed25519"
SSH_PUB_KEY="$SSH_KEY.pub"
SSH_ALLOWED_SIGNERS="$HOME/.ssh/allowed_signers"

externalRepositories=(
    "https://github.com/tldr-pages/tldr.git"
)

myRepositoriesRoot="git@github.com:codingepaduli/"

myRepositories=(
    "codingepaduli"
    "codingepaduli.github.io"
    "firefox_bookmarks_backup"
    "from-hugo-to-book"
    "gitmergetutorial"
    "mozLz4-decompress"
    "firefox-bookmarks-to-markdown"
    "java-hello-world-with-gradle"
    "j2ee-website-with-gradle"
)

if [ ! -d "$WORKING_DIR" ]; then

    echo "Missing working directory $WORKING_DIR"
    exit 1
fi

if [ ! -f "$SSH_KEY" ]; then

    echo "Missing SSH key $SSH_KEY. Create and add it to github / gitlab before checkout"
    exit 1
fi

# Aggiungo la chiave SSH in sessione per non richiederla continuamente
eval "$(ssh-agent -s)"

ssh-add -k $SSH_KEY
    
# checkout the SVN repository
# echo "Checking out SVN repo. Wait!!!"
# svn co --quiet --non-interactive --no-auth-cache --username $SVN_USER --password $SVN_PWD $SVN_REPO "$WORKING_DIR/javing"
# echo "SVN repo checked out"

# moving to the folder where git repositories will be cloned
cd "$WORKING_DIR"

for repo in "${externalRepositories[@]}"
do
    git clone $repo
    echo "External repository cloned: $repo"
done

for repo in "${myRepositories[@]}"
do
    git clone "$myRepositoriesRoot$repo.git" --recurse-submodules --config core.sshCommand="/usr/bin/ssh -i $SSH_KEY"
    
    if [ $? -eq 0 ]; then
        # Configure the repo
        cd $repo
        git config --global user.useConfigOnly true
        git config --local user.name "$GIT_USER"
        git config --local user.email "$GIT_EMAIL"
        git config --local core.autocrlf input
        git config --local core.editor "micro"
        git config --local core.ignorecase false
        git config --local credential.helper store
        git config --local pull.rebase false

        ## ssh signign key config
        git config --local commit.gpgsign true
        git config --local gpg.format ssh
        git config --local user.signingkey "$(cat $SSH_PUB_KEY)"
        git config --local gpg.ssh.allowedSignersFile "$SSH_ALLOWED_SIGNERS"
        git config --local core.sshCommand "/usr/bin/ssh -i $SSH_KEY"

	    echo "Repository configured: $repo"
        cd ..
    else
    	echo "Fails - Please upload your key in case of Permission denied (publickey) - $repo"
    fi
done

if [ -d "$WORKING_DIR/codingepaduli" ]; then
    cd "$WORKING_DIR/codingepaduli"

    # git submodule init      # Registering the submodule
    # git submodule sync      # Sync the URL
    # git submodule update    # Checkout the submodule repository

    # echo "Submodules synchronized"

    # Add another remote origin to the repo
    git remote add gitlab https://gitlab.com/codingepaduli/codingepaduli.git

    echo "Remote origin added"
    cd ..
fi

