#!/bin/bash

# Disable some unused service on the computer, so these TCP/UDP ports (bounded to the service) will be disabled. 

# systemctl start, systemctl stop: starts (stops) the unit in question immediately;

# systemctl enable, systemctl disable: marks (unmarks) the unit for autostart at boot time . If a service is enabled, then there is a symlink somewhere in /etc/systemd/system and the service autostarts at boot time (in a unit-specific manner, described in its [Install] section). When a service is disabled, the symlink is deleted and the service will not autostart at boot time. The service can be started and stopped manually or by request.

# systemctl mask, systemctl unmask: disallows (allows) all and any attempts to start the service (either manually and at boot time). Note that masking a service will create a symlink to /dev/null so it makes "impossible" to both autostart at boot time and start manually the service.

systemctl disable exim4.service             # stop SMTP mail agent on port 25
systemctl disable avahi-daemon.service      # stop avahi service on port 1452
systemctl disable nfs-client.target         # stop all nfs services
systemctl disable nfs-kernel-server.service # stop all nfs services on random ports 
systemctl disable portmap.service           # stop portmap on port 111
