# connorbot-client

connorbot-client is the client application for ConnorBot.  A raspberry pi powered robotics project that Kristopher and Connor Clark created.

# Current status

This code is not functional as of 10/22/2017 except as the base level UX.  This code interacts with [connorbot-server](https://github.com/kclark-jenkins/connorbot-server), an RPC Server built in python to control the physical hardware of the robot.

# Required software

### All systems
* Node v8.7.0 or newer
* NPM 5.4.2 or newer

### Linux
* [Festival](http://www.cstr.ed.ac.uk/projects/festival/)
* [festvox-kallpc16k](http://festvox.org/download.html)

# Installation

## Linux Prerequisite

This assumes an apt based distro such as rasbian

```
$ sudo apt-get install festival festvox-kallpc16k
```

## connorbot-client installation

```
$ cd ~
$ git clone https://github.com/kclark-jenkins/connorbot-client.git
$ cd connorbot-client
$ npm install
$ bin/www
```