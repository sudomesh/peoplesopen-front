---
title: Documentation
layout: two-columns
---

## So You Want to Build Your Own Internet?! 

There are three main components needed to build a minimal People's Open Network:
* __Home Nodes__
* __Exit Nodes__
* and a __Meshnode Database__

### Home Nodes
Typically, we use Western Digital MyNet N600 home routers as our Home Nodes. These need to be "flashed" with a custom version of OpenWrt, which includes Babel (routing protocol) and Tunneldigger (L2TP tunnelling, i.e. VPN). You can build your own version of this firmware here:  https://github.com/sudomesh/sudowrt-firmware  

or you can download a pre-built version and follow our walkthrough: https://peoplesopen.net/walkthrough

### Exit Node
This will be your network's gateway to the larger internet. To learn how to build your own, check out https://github.com/sudomesh/exitnode  

Once built, you may also want to test that you can connect to your Exit Node. Here are exercises to learn more about tunneling over your Exit Node: https://github.com/sudomesh/tunneldigger-lab

### Meshnode Database
This is a centralized server hosted somewhere, either on the internet or on a local network where you do all configuration of Home Nodes. To avoid IP address conflicts, this database keeps track of all IP addresses ever given out on your People's Open Network. To build your own meshnode database, follow the instructions here: https://github.com/sudomesh/meshnode-database  

## Additional Components

### Extender Nodes 
This is what we call roof-mounted tranceivers, which make point-to-point links over longer distances. Currently, the official recommendation is to leave the default firmware on Extender Nodes, though we do have an unmaintained version of our firmware for Extender Nodes. You can learn more about the Extender Nodes we use via the following links:  
* https://sudoroom.org/wiki/Mesh/Flashing_extender_nodes  
* https://github.com/sudomesh/node-whisperer-program/tree/master/extension  

### Ethernet Crimping
Learn how to make your own internet tubes, so you can connect your extender nodes to your Home Node: https://github.com/sudomesh/propaganda/blob/master/handouts/how-to-make-straight-through-network-cables.pdf

### Admin Dashboard
A web dashboard for Home Nodes: https://github.com/sudomesh/peoplesopen-dash  

### Admin Shell
A work-in-progress shell interface for Home Nodes: https://github.com/sudomesh/peoplesopen-shell

