#!/bin/bash

# WORKING_DIR="storage/shared/SVN" # on phone
WORKING_DIR="$HOME/Sviluppo/SVN"
# SVN_REPO=""
# SVN_USER=""
# SVN_PWD=''

GIT_USER="codingepaduli"
GIT_EMAIL="padulodeveloper@protonmail.com"

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
    "fet-timetabling-compute"
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

git config --global user.useConfigOnly true
# Fix bug https://github.blog/2022-04-12-git-security-vulnerability-announced/
git config --global --replace-all safe.directory "*"

for repo in "${externalRepositories[@]}"
do
    git clone $repo
    echo "External repository cloned: $repo"
done

for repo in "${myRepositories[@]}"
do
    git clone "$myRepositoriesRoot$repo.git" --recurse-submodules --config core.sshCommand="/usr/bin/ssh -i $SSH_KEY"
    
    if [ $? -eq 0 ]; then
        
        cd $repo
        
        # Option used in git config --local 
        # --add key value 
        # --unset key

        git config --local --add user.name "$GIT_USER"
        git config --local --add user.email "$GIT_EMAIL"
        git config --local --add core.autocrlf input
        git config --local --add core.editor "micro"
        git config --local --add core.ignorecase false
        git config --local --add credential.helper store
        git config --local --add pull.rebase false

        git config --local --add transfer.fsckobjects true
        git config --local --add fetch.fsckobjects true
        git config --local --add receive.fsckObjects true

        git config --local --add diff.algorithm histogram
        git config --local --add diff.tool "meld"
        git config --local --add difftool.prompt false
        git config --local --add merge.tool "meld"
        git config --local --add mergetool.prompt false

        ## ssh signign key config
        git config --local --add commit.gpgsign true
        git config --local --add gpg.format ssh
        git config --local --add user.signingkey "$(cat $SSH_PUB_KEY)"
        git config --local --add gpg.ssh.allowedSignersFile "$SSH_ALLOWED_SIGNERS"
        git config --local --add core.sshCommand "/usr/bin/ssh -i $SSH_KEY"

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

