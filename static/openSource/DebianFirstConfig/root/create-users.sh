sudo /usr/sbin/groupadd -g 2000 casa

sudo /usr/sbin/useradd --create-home --base-dir /home/ -s /bin/bash --gid casa --uid 1001 io
sudo /usr/sbin/useradd --create-home --base-dir /home/ -s /bin/bash --gid casa --uid 1002 mamma
sudo /usr/sbin/useradd --create-home --base-dir /home/ -s /bin/bash --gid casa --uid 1003 roberto
sudo /usr/sbin/useradd --create-home --base-dir /home/ -s /bin/bash --gid casa --uid 1004 dario

# Imposto le password
echo io:io | chpasswd
echo mamma:mamma | chpasswd
echo dario:dario | chpasswd
echo roberto:roberto | chpasswd

# Forzo il cambio password al primo accesso
# passwd -e io
# passwd -e dario
# passwd -e roberto
# passwd -e mamma

# Per visualizzare i gruppi: getent group | sort

# Aggiungo gli utenti ai gruppi
sudo /usr/sbin/usermod -a -G sudo daniele
sudo /usr/sbin/usermod -a -G bluetooth io
sudo /usr/sbin/usermod -a -G crontab io
sudo /usr/sbin/usermod -a -G crontab daniele

# Creo il gruppo VirtualBox
sudo /usr/sbin/groupadd -f vboxusers
sudo /usr/sbin/usermod -a -G vboxusers io

# Creo il gruppo docker
sudo /usr/sbin/groupadd -f docker
sudo /usr/sbin/usermod -a -G docker io
sudo /usr/sbin/usermod -a -G docker daniele

# sudo /usr/sbin/deluser --remove-all-files io 

# Gli utenti linux si trovano nel file /etc/passwd
# Ogni linea è nel seguente formato:
# account : password : numero_utente: numero_di_gruppo : commenti : cartella_home : shell_utente
# Es
# daniele:x:1000:1000:daniele,,,:/home/daniele:/bin/bash

# La lista degli utenti appartenenti ai diversi gruppi si trova nel file /etc/group
# Ogni linea è nel seguente formato:
# nome_gruppo: campo_speciale : ID_gruppo : membro1, membro2
# Es
# daniele:x:1000:

