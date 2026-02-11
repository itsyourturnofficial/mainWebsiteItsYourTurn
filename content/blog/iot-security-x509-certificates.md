---
title: "Secure IoT: Device Authentication with X.509 Certificates"
date: "2026-01-05"
excerpt: "A practical guide to implementing mutual TLS authentication for IoT devices using X.509 certificates and AWS IoT Core."
author: "Shyam Ganesh E"
tags: ["Security", "IoT", "AWS", "TLS"]
coverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
---

# Secure IoT: Device Authentication with X.509 Certificates

Security is not optional in IoT. A single compromised device can expose your entire fleet. This guide covers implementing mutual TLS (mTLS) authentication — the gold standard for IoT device identity.

## The Threat Landscape

Common IoT attack vectors:

1. **Spoofing** — Fake devices injecting malicious data
2. **Eavesdropping** — Intercepting unencrypted sensor data
3. **Man-in-the-Middle** — Altering data in transit
4. **Replay attacks** — Resending captured valid messages

mTLS addresses all four by ensuring both the client and server prove their identity.

## Certificate Hierarchy

```
[Root CA Certificate]
    └── [Intermediate CA Certificate]
            └── [Device Certificate]
                    └── [Private Key (Never Leaves Device)]
```

## Generating Certificates

### Create a Root CA

```bash
openssl genrsa -out rootCA.key 2048
openssl req -x509 -new -nodes -key rootCA.key \
    -sha256 -days 3650 -out rootCA.pem \
    -subj "/CN=IoT Root CA/O=Its Your Turn"
```

### Create a Device Certificate

```bash
# Generate device key
openssl genrsa -out device.key 2048

# Create CSR
openssl req -new -key device.key -out device.csr \
    -subj "/CN=sensor-001/O=Its Your Turn"

# Sign with Root CA
openssl x509 -req -in device.csr -CA rootCA.pem \
    -CAkey rootCA.key -CAcreateserial \
    -out device.pem -days 365 -sha256
```

## Embedding in Firmware

```c
const char* root_ca = \
    "-----BEGIN CERTIFICATE-----\n"
    "MIIDQTCCAimgAwIBAgITBm...\n"
    "-----END CERTIFICATE-----\n";

const char* device_cert = \
    "-----BEGIN CERTIFICATE-----\n"
    "MIIDWjCCAkKgAwIBAgIVAM...\n"
    "-----END CERTIFICATE-----\n";

const char* device_key = \
    "-----BEGIN RSA PRIVATE KEY-----\n"
    "MIIEowIBAAKCAQEA2a7Xz...\n"
    "-----END RSA PRIVATE KEY-----\n";

WiFiClientSecure wifiClient;
wifiClient.setCACert(root_ca);
wifiClient.setCertificate(device_cert);
wifiClient.setPrivateKey(device_key);
```

## AWS IoT Core Setup

1. Register your Root CA with AWS IoT
2. Enable Just-In-Time Registration (JITR)
3. Create an IoT Policy with least-privilege permissions
4. Attach the policy to certificates, not things

### Minimal IoT Policy

```json
{
    "Version": "2012-10-17",
    "Statement": [{
        "Effect": "Allow",
        "Action": ["iot:Connect"],
        "Resource": "arn:aws:iot:*:*:client/${iot:Connection.Thing.ThingName}"
    }, {
        "Effect": "Allow",
        "Action": ["iot:Publish"],
        "Resource": "arn:aws:iot:*:*:topic/sensors/${iot:Connection.Thing.ThingName}/*"
    }]
}
```

## Certificate Rotation

Certificates expire. Plan for rotation:

- **Short-lived certificates** — 90-365 days
- **OTA provisioning** — Push new certificates via secure channel
- **Fleet provisioning** — Use AWS IoT Fleet Provisioning for factory setup

---

*Learn IoT security in depth in our [Industrial IoT Architecture track](#tracks).*
