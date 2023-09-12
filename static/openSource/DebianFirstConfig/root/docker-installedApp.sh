#!/bin/bash

# Install docker
sudo apt-get install -y docker.io docker-compose

if [ $? -ne 0 ]; then
    exit 1
fi

# Create the group
sudo /usr/sbin/groupadd -f docker

if [ $? -ne 0 ]; then
    exit 1
fi

# Set the group owner
sudo chown root:docker /var/run/docker.sock

if [ $? -ne 0 ]; then
    exit 1
fi

# in case of "permission denied", remove the folder  
# rm -rf "$HOME/.docker"

# List generated from the command:
#    docker images --format "{{.Repository}}:{{.Tag}}" 

# tag 12-bullseye - to compile against the same libc library 
#     of debian bullseye (installed on my machine)
docker pull gcc:12-bookworm

docker pull denoland/deno:debian-1.34.3

docker pull python:3.11.4-bookworm

# docker pull mcr.microsoft.com/powershell:7.3-debian-bullseye-slim

# tag 8.0.0-jdk17 - to compile against a specific JDK version 
#     and to have a specific version of gradle project file
# docker pull gradle:8.0.0-jdk17

# Hugo
docker pull klakegg/hugo:0.111.3-debian

docker pull dalibo/pandocker:latest-buster-full

docker pull node:20.3.1-bookworm

docker pull dpokidov/imagemagick:7.1.1-10-bullseye

docker pull frenmoji/backgroundremover

docker pull linuxserver/ffmpeg:6.0-cli-ls91

docker pull mikenye/youtube-dl:2023.02.17_linux_amd64


