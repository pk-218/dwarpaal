# Osquery Server

This directory contains code for the web server that will provide client with the requested system statistics by making use of `osquery` queries. Making use of the Go bindings for [osquery](), the server is written in Go, using the [Echo]() web framework.

## Setup

1. Install `osquery` locally. Refer to the [docs](https://osquery.readthedocs.io/en/stable/installation/install-linux/) for installation steps - I won't recommend Windows for this purpose. Check if `osqueryi` starts a query prompt for success installation.

2. In order to run the Go server, we first need the `osqueryd` service or the `osquery` daemon running. Create the configuration file first -

   ```bash
   # On Linux
   sudo cp /opt/osquery/share/osquery/osquery.example.conf /etc/osquery/osquery.conf
   # On macOS
   sudo cp /var/osquery/osquery.example.conf /var/osquery/osquery.conf
   sudo cp /var/osquery/io.osquery.agent.plist /Library/LaunchDaemons
   sudo launchctl load /Library/LaunchDaemons/io.osquery.agent.plist
   ```

3. Start the service in the background.

   ```bash
   # On Linux
   sudo systemctl start osqueryd
   # On macOS
   sudo osqueryctl start
   ```

4. \[macOS\] For troubleshooting purposes -

   ```bash
   # Check if configurations are correct
   sudo osqueryctl config-check
   # If you get a resource temporarily unavailable error somehow
   sudo rm /var/osquery/osquery.db/LOCK
   ```

5. Install Go 1.19 or above following the official [docs](https://go.dev/doc/install)

6. Inside `osquery-server` directory, install the required Go dependencies.

   ```bash
   go mod download
   ```

7. Finally, run the server.
   ```bash
   sudo go run main.go
   ```
