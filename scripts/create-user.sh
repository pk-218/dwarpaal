#!/bin/bash

username=$1
password=$2
expiration=$3
id=$4
# create new user as per command line argument 1 with no prompts or password
adduser --disabled-password --gecos "" $username

# set password for the given user
chpasswd <<<"$username:$password"

# change user's expiration data to input data
chage -E $expiration $username

# send the credentials to the backend with success message
curl -X POST -H "Content-Type: application/json" -d '{"username": "'"$username"'", "password":"'"$password"'", "expiration":"'"$expiration"'", "id": "'"$id"'", "status": 200}' https://dwarpal-production.up.railway.app/api/credentials/

