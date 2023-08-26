#!/bin/bash

# -N empty      password
# -q quiet      mode
# <<< $'y\n'    answer 'File exists. Overwrite?' with 'yes' and '\n' (newline)
# >/dev/null    2>&1 hide output
ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519 -C "padulodeveloper@protonmail.com" -N '' -q <<< $'y\n' >/dev/null 2>&1

eval "$(ssh-agent -s)"

ssh-add ~/.ssh/id_ed25519

# Set the key as testable
#  "\(" is an escapes for "(" and "\)" is an escapes for ")" 
# () is a match (may need to be escaped \(\), it will be stored
# (.*) (.*) (.*) are three matches, they will be stored as \1 \2 \3
# in the replace expression, \3 and \2 will be replaced by the captured maches
cat ~/.ssh/id_ed25519.pub | sed 's/\(.*\) \(.*\) \(.*\)/\3 ssh-ed25519 \2/g' > ~/.ssh/allowed_signers

echo "Please update the signing key to the git hosting service"

# Trust github and gitlab, avoiding the message:
#### The authenticity of host can't be established.
#### Key fingerprint: SHA256:6l...2k. Continue (yes/no)? 
ssh-keyscan -t ed25519,ecdsa gitlab.com >> ~/.ssh/known_hosts
ssh-keyscan -t ed25519,ecdsa github.com >> ~/.ssh/known_hosts

# Remember to add a password
# ssh-keygen -p -f ~/.ssh/id_ed25519