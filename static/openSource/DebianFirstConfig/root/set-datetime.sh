#!/bin/bash

sudo timedatectl set-time '2024-12-08 21:41:00'
sudo timedatectl set-timezone 'Europe/Rome'

# hwclock is a utility for accessing the hardware clock
# The hardware clock is also called a BIOS clock, it is 
# independent of the OS (operating system) you use and 
# works even when the machine is shut down.
# --systohc writes the system clock to the hardware clock
sudo hwclock --systohc
