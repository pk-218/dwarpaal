#!/bin/bash

adduser $1

echo "$1:$2" | chpasswd

usermod -aG sudo $1

su - $1

ssh-keygen -q -t ed25519 -N "" -f $HOME/$1/.ssh/id_ed25519

echo "Public SSH key for $1:"
cat $HOME/$1/.ssh/id_ed25519.pub

public_key=$(cat $HOME/.ssh/id_rsa.pub)

exit

sed -i 's/PasswordAuthentication no/PasswordAuthentication yes/' /etc/ssh/sshd_config

systemctl restart ssh

# send the public key to the API
# curl -X POST -H "Content-Type: application/json" -d '{"username": "'"$username"'", "public_key":"'"$public_key"'"}' https://dwarpal-production.up.railway.app/