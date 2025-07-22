#!/bin/bash

# to show the network interfaces: 
#   ip link show
# to show the known applications
#   ufw app info all
#   cat /etc/services
# to show opened ports
#   netstat -tulpn # (TU=TPC/UDP, L=listen, PN=Process id/process Name)

# logs are in /var/log/ufw*.log
# ls /var/log/ufw*
#
# rules have the form [UFW BLOCK] IN=wlan0 SRC= DST= PROTO=UDP SPT=8612 DPT=8612
#   SRC and DST are the source and destination addresses
#   SPT and DPT are the source and destination ports
#   PROTO is the protocol
#
# To block a domain, like facebook.com or google.com, check the ip with one of the following commands:
#       host -t A www.facebook.com
#       host -t AAAA www.facebook.com
#       nslookup -q=A google.com
#       nslookup -q=AAAA google.com
#
# then check the CIDR from the ip with one of the following commands::
#       whois 157.240.231.35 | grep "CIDR"
# finally, block the subnet:
#       ufw deny from 157.240.0.0/16
#
# alternatively, use the SPF record from the DNS to get the hosts:
#       nslookup -q=TXT _spf.google.com
# If the SPF record specifies the names, check for the names in order to get the IP:
#           # Example: "v=spf1 _netblocks.google.com, _netblocks2.google.com, _netblocks3.google.com -all"
#           #   nslookup -q=TXT _netblocks.google.com
#           #   nslookup -q=TXT _netblocks2.google.com
# Finally you have the IP to block.
#
# TODO: nslookup is deprecated, use host or dig command
#
# Reset to the default rules
ufw reset

# Default rules
sudo ufw default deny incoming
sudo ufw default deny outgoing

# limit is useful for protecting against brute-force login attacks. 
# When a limit rule is used, ufw  will normally  allow  the  
# connection but will deny connections if an IP address attempts
# to initiate 6 or more connections within 30 seconds. See for details:
# http://www.debian-administration.org/articles/187

# Internet 
ufw allow in log 43 comment "whois incoming on port 43"
ufw deny in log 53 comment "dns incoming on port 53"
ufw allow in log 67 comment "DHCP incoming on port 67"
ufw allow in log 68 comment "DHCP incoming on port 68"

ufw allow out log 43 comment "whois outgoing on port 43"
ufw allow out log 53 comment "dns outgoing on port 53"
ufw allow out log 67 comment "DHCP outgoing on port 67"
ufw allow out log 68 comment "DHCP outgoing on port 68"

# Blacklist web
ufw deny out to 104.244.40.0/21 port 80 "blocking Twitter on http"
ufw deny out to 104.244.40.0/21 port 443 "blocking Twitter on https"
ufw deny out to 157.240.0.0/16 port 80 "blocking Facebook on http"
ufw deny out to 157.240.0.0/16 port 443 "blocking Facebook on https"

# Web
ufw allow in log 80/tcp comment "http incoming on port 80"
ufw allow in log 443/tcp comment "https incoming on port 443"

ufw allow out log 80/tcp comment "http outgoing on port 80"
ufw allow out log 443/tcp comment "https outgoing on port 443"

# Email
ufw deny in log 25 comment "smtp incoming on port 25"
ufw deny in log 110 comment "pop3 incoming on port 110"
ufw deny in log 143 comment "imap incoming on port 143"
ufw deny in log 587 comment "smtps incoming on port 587"
ufw deny in log 993 comment "imaps incoming on port 993"
ufw deny in log 995 comment "pop3s incoming on port 995"

ufw deny out log 25 comment "smtp outgoing on port 25"
ufw deny out log 110 comment "pop3 outgoing on port 110"
ufw deny out log 143 comment "imap outgoing on port 143"
ufw deny out log 587 comment "smtps outgoing on port 587"
ufw deny out log 993 comment "imaps outgoing on port 993"
ufw deny out log 995 comment "pop3 outgoing on port 995"

# Chat
ufw deny in log 194 comment "irc incoming on port 194"
ufw deny in log 5222 comment "XMPP incoming on port 5222"
ufw deny in log 5269 comment "XMPP incoming on port 5269"
ufw deny in log 6667 comment "irc incoming on port 6667 (pidgin)"

ufw deny out log 194 comment "irc outgoing on port 194"
ufw deny out log 5222 comment "XMPP outgoing on port 5222"
ufw deny out log 5269 comment "XMPP outgoing on port 5269"
ufw deny out log 6667 comment "irc outgoing on port 6667 (pidgin)"

# Google Meet streaming
ufw allow out log 19302​/udp comment "google meet outgoing on ports 19302"
ufw allow out log 19303​/udp comment "google meet outgoing on ports 19303​"
ufw allow out log 19304​/udp comment "google meet outgoing on ports 19304​"
ufw allow out log 19305​/udp comment "google meet outgoing on ports 19305​"
ufw allow out log 19306​/udp comment "google meet outgoing on ports 19306​"
ufw allow out log 19307​/udp comment "google meet outgoing on ports 19307​"
ufw allow out log 19308​/udp comment "google meet outgoing on ports 19308​"
ufw allow out log 19309​/udp comment "google meet outgoing on ports 19309​"

# Jellyfin streaming service
ufw allow in log 8096/tcp comment "Jellyfin http incoming on port 8086"
ufw allow in log 8920/tcp comment "Jellyfin https incoming on port 8920"
ufw allow in log 1900/udp comment "Jellyfin service autodiscovery incoming on port 1900"
ufw allow in log 7359/udp comment "Jellyfin client autodiscovery incoming on port 7359"

ufw allow out log 8096/tcp comment "Jellyfin http outgoing on port 8086"
ufw allow out log 8920/tcp comment "Jellyfin https outgoing on port 8920"
ufw allow out log 1900/udp comment "Jellyfin service outgoing incoming on port 1900"
ufw allow out log 7359/udp comment "Jellyfin client outgoing incoming on port 7359"

# System Admin (ssh, remote desktop, web admin panels)
ufw limit in log 22 comment "incoming ssh remote admin on port 22" # FIXME to disable, use 10022
ufw deny in log 123 comment "Network Time Protocol incoming on port 123"
ufw limit in log 631 comment "incoming cups web-GUI remote admin on port 631"
ufw limit in log 3389 comment "incoming remote desktop admin on port 3389"
ufw deny in log 5900 comment "incoming VNC server remote admin on port 5900" # disabled, use 10901
ufw limit in log 9090 comment "incoming cockpit web-GUI remote admin on port 9090"
ufw limit in log 10022 comment "incoming custom ssh remote admin on port 10022"
ufw limit in log 10901 comment "incoming custom VNC server remote admin on port 10901"

ufw limit out log 22 comment "outgoing ssh remote admin on port 22" # FIXME to disable, use 10022
ufw deny out log 123 comment "Network Time Protocol outgoing on port 123"
ufw limit out log 631 comment "outgoing cups web-GUI remote admin on port 631"
ufw limit out log 3389 comment "outgoing remote desktop admin on port 3389"
ufw deny out log 5900 comment "outgoing VNC server remote admin on port 5900" # disabled, use 10901
ufw limit out log 9090 comment "outgoing cockpit web-GUI remote admin on port 9090"
ufw limit out log 10022 comment "outgoing custom ssh remote admin on port 10022"
ufw limit out log 10901 comment "outgoing custom VNC server outgoing on port 10901"

# Developer's tools
ufw deny in log 21 comment "ftp incoming on port 21"
ufw deny in log 3306 comment "mysql incoming on port 3306"
ufw deny in log 3690 comment "svn server incoming on port 3690"
ufw deny in log 5432 comment "postgreSql incoming on port 5432"

ufw allow out log 21 comment "ftp outgoing on port 21 (filezilla)"
ufw deny out log 3306 comment "mysql outgoing on port 3306"
ufw limit out log 3690 comment "svn server outgoing on port 3690"
ufw deny out log 5432 comment "postgreSql outgoing on port 5432"

# Torrent, SyncThing
ufw limit in log 8384 comment "incoming SyncThing web-GUI remote admin on port 8384"
ufw limit in log 9091 comment "incoming transmission torrent web-GUI remote admin on port 9091"
ufw allow in log 21027 comment "SyncThing UDP incoming discovery broadcasts on port 21027"
ufw allow in log 22000 comment "SyncThing TCP/UDP incoming on port 22000"
ufw allow in log 51413 comment "transmission torrent incoming on port 51413"

ufw limit out log 8384 comment "outgoing SyncThing web-GUI remote admin on port 8384"
ufw limit out log 9091 comment "outgoing transmission torrent web-GUI remote admin on port 9091"
ufw allow out log 21027/udp comment "SyncThing UDP outgoing discovery broadcasts on port 21027"
ufw allow out log 22000 comment "SyncThing TCP/UDP outgoing on port 22000"
ufw allow out log 51413 comment "transmission torrent outgoing on port 51413"

# Enable the logs
ufw logging low

# Enables new rules
ufw disable
ufw enable
