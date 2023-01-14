import React from 'react'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import styled from '@emotion/styled'

const FAQ = () => {
    return (
        <>
            <h2 className='py-3'>FAQ</h2>
            <h3>Connecting to the VPN Client</h3>
            <ol>
                <li>Go to <a href='https://portal.vjti.ac.in' target="_blank">https://portal.vjti.ac.in</a>. You might get a warning like “Your connection is not private” or “Connection not secure”. Go ahead anyway.</li>
                <li>Enter the VPN username and password credentials given to you by the sysad. Once logged in, you'll see something like this:</li>
                <li>Download the client you need. For Linux, use the “Download configuration for other OSs” link. This will download a config file with the .ovpn extension.</li>
            </ol>

            <h5>Connecting to the VPN Client (on Linux)</h5>
            <ol>
                <li>OpenVPN client, install it: <a href='https://openvpn.net/vpn-client/' target="_blank">https://openvpn.net/vpn-client/</a></li>
                <li>Now connect to the VPN using the .ovpn file downloaded from VJTI's Sophos portal</li>
                sudo openvpn --config &lt;the .ovpn file&gt;
                <li>This will first ask for your password (sudo)</li>
                <li>Then it will ask for the VPN credentials. These are the same as you entered on the Sophos portal.</li>
                <li>If you see a log with “Initialization Sequence Completed”, then you’re connected to the VPN.</li>
            </ol>

            <Alert severity="info">
                <AlertTitle>Notes</AlertTitle>
                Don't want to type in your VPN credentials every time you connect?
                <strong> Warning: This method will leave the credentials in plaintext on the filesystem. Use this only if you're sure that that's safe.</strong>
                <ol>
                    <li>In the directory with the `.ovpn` file, make a plaintext file `dgx-vpn-credentials.txt` with username and password on two different lines, like:</li>
                    <li>Now in the `.ovpn` file, find the line with `auth-user-pass`. Append that line with the name of the credentials file. Example:</li>
                    auth-user-pass dgx-vpn-credentials.txt
                    <li>Save and you're done. Next time just run the .ovpn file. You'll still have to enter your password for sudo though.</li>
                </ol>
            </Alert>

            <h3 className='pt-3'>Setting up SSH keys for login</h3>
            <ol>
                <li>Generate a key-pair with `ssh-keygen`. For not entering a password every time, don't enter a passphrase, leave it empty.</li>
                <li>For the keyname, name it something, e.g. `/home/user/.ssh/dgx`. Do change the name or you might end up replacing an existing key-pair.</li>
                <li>Use `ssh-copy-id` to copy the identity file onto SSH. Make sure that you're connected to the VPN before running this command</li>
                ssh-copy-id -i ~/.ssh/dgx username@172.18.33.4
                <li>You'll be asked for the user's password, enter it.</li>
                <li>Done. Next time just use:</li>
                ssh -i ~/.ssh/dgx username@172.18.33.4
            </ol>

            <h3>Running Docker Containers</h3>
            <ol>
                To be able to work with your system, the general flow of process is:
                <li>Create a container from nvcr.io's readily available images.</li>
                <li>Mount your local filesystem in that container.</li>
                <li>Now all your code needs to run within that container, so that you can access all GPUs.</li>
            </ol>

            <Alert severity="info">
                <AlertTitle>Tensorflow Example</AlertTitle>
                <p>
                    docker run -it -d --name my-name \  # run interactive shell, run as daemon, name of container
                    --dns 8.8.8.8 --net=host  \  # allow internet access, allow host network configuration
                    --gpus all --shm-size=1g --ulimit memlock=-1 \  # use all gpus, use max ipc
                    -e HOME:$HOME -e USER=$USER \ # environment variables
                    -v $HOME:$HOME \ # bind mount
                    nvcr.io/nvidia/tensorflow:22.02-tf2-py3 # image name. Use the tag you want
                </p>
            </Alert>

            <p>
                This creates a container with root as user, and your entire home directory mounted at /home/your_name. The container knows that there is some user with a home directory of /home/your_name, but it does not know who it is. To create a user,
            </p>
            <ol>
                <li>first, on the DGX workspace, run</li>
                name@vjtidgxstation:~$ echo $UID
                <li>Copy this UID (assume in this case UID=1662)</li>
                <li>Connect to the container. (Steps below)</li>
                <li>Inside the container, create a new user with this uid.</li>
                root@vjtidgxstation:/workspace# adduser -u 1662 my-user
                <li>Log into this new user</li>
                root@vjtidgxstation:/workspace# su - my-user
                my-user@vjtidgxstation:~$
                <br />
                To connect to this container later (since you used the -d flag to run as daemon)

                Run a Jupyter notebook inside this container
                Change the hostname to 172.18.33.4, and open the URL in your browser.
            </ol>

            <Alert severity="info">
                <AlertTitle>PyTorch Example</AlertTitle>
                <p>docker run -it -d --name torch-container \  # run interactive shell, run as daemon, name of container
                    --dns 8.8.8.8 --net=host  \  # allow internet access, allow host network configuration
                    --gpus all --shm-size=1g --ulimit memlock=-1 \  # use all gpus, use max ipc
                    -e HOME:$HOME -e USER=$USER \ # environment variables
                    -v $HOME:$HOME \ # bind mount
                    nvcr.io/nvidia/pytorch:22.03-py3 # image name. Use the tag you want
                </p>
            </Alert>


        </>
    )
}

export default FAQ