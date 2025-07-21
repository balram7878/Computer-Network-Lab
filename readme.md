# Ping & ICMP – Network Diagnostic Tool

# What is Ping?

- When a device connects to the internet, it is assigned an IP address. Sometimes, you may want to check whether a specific IP address is reachable or alive—that’s where Ping comes in.
- Ping is a network diagnostic tool used to test the reachability of a host on an IP network.
- It works by sending an ICMP (Internet Control Message Protocol) Echo Request and listening for an ICMP Echo Reply.

> The tool helps:

- Check if a path exists.
- Confirm whether the destination device is online.
- Measure latency or RTT (Round Trip Time).
- Report basic network issues.

# Why Do We Need a Protocol Like ICMP?

- To communicate effectively between devices, we need to follow standard rules called protocols. For checking network status and diagnostics:
- ICMP is used instead of TCP/UDP because:
- It’s lightweight, fast, and simple.
- It's not used to transfer data like TCP or UDP.
- It only carries control messages to diagnose and report errors.
- Ping uses ICMP under the hood.

# How ICMP Helps in Network Diagnostics

- ICMP diagnoses and reports network issues using specific message types:

# Diagnosis via Ping

- Sends an ICMP Echo Request and waits for ICMP Echo Reply.
- If reply is received, it means the target host is reachable.
- Measures RTT (Round Trip Time) — time taken for request and reply.
- Shows TTL (Time To Live) — indicates how many routers (hops) the packet passed through.

# Reporting Issues

- ICMP can report issues like:

* ICMP Message Type Meaning
* Destination Unreachable The host is offline, or there is no route to it.
* Time Exceeded The packet's TTL expired before it reached the destination (too many hops).
* Packet Too Big The packet size exceeds what the path can handle.

- This helps administrators quickly understand what’s going wrong.

## What is TTL and Hops?

- TTL (Time To Live) is a counter in each packet that decreases by 1 every time it passes through a router.
- It prevents a packet from circling endlessly in case of routing loops.
- If TTL becomes 0, the router discards the packet and sends an ICMP Time Exceeded message.
- The number of hops is the number of routers a packet passes through.

* Example:
  Suppose a packet has TTL = 5 and needs to pass through 6 routers. It will expire before reaching the destination, and you’ll get a "Time Exceeded" error.

## Why Do Some Servers Block ICMP?

- Some servers or firewalls block ICMP traffic to:
- Prevent DDoS attacks, especially using "Ping of Death".
- Avoid information leakage about network structure.

> Why Called "Echo Request"?
> Because you're sending a message to be echoed back, like saying "hello?" and expecting "hello!" in return. You're not sending the actual "echo", you're requesting an echo from the target device.
