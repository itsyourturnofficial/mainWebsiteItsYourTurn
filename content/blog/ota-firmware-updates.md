---
title: "OTA Firmware Updates: Keeping IoT Devices Current"
date: "2025-12-10"
excerpt: "Implement secure over-the-air firmware updates for ESP32 devices — from update servers to rollback strategies and fleet management."
author: "Shyam Ganesh E"
tags: ["IoT", "Firmware", "ESP32", "OTA"]
coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
---

# OTA Firmware Updates: Keeping IoT Devices Current

Deploying IoT devices without OTA update capability is like launching a satellite without a radio. Once in the field, physical access becomes expensive or impossible. OTA updates are essential for bug fixes, security patches, and feature additions.

## OTA Architecture

```
[Build Server] → [Firmware Binary] → [Update Server (S3)] → [ESP32 Device]
     (CI/CD)        (.bin file)        (HTTPS endpoint)       (OTA client)
```

## ESP32 OTA Implementation

### Partition Table

ESP32 uses a dual-partition scheme for safe updates:

| Partition | Size | Purpose |
|-----------|------|---------|
| app0 | 1.5 MB | Running firmware |
| app1 | 1.5 MB | Update target |
| nvs | 20 KB | Configuration |
| otadata | 8 KB | Boot selection |

### Basic OTA Client

```c
#include "esp_ota_ops.h"
#include "esp_http_client.h"

void performOTA(const char* url) {
    esp_http_client_config_t config = {
        .url = url,
        .cert_pem = server_cert_pem,
    };
    
    esp_https_ota_config_t ota_config = {
        .http_config = &config,
    };
    
    esp_err_t ret = esp_https_ota(&ota_config);
    
    if (ret == ESP_OK) {
        esp_restart();
    } else {
        ESP_LOGE("OTA", "Update failed: %s", esp_err_to_name(ret));
    }
}
```

## Security Best Practices

1. **Sign firmware binaries** — Use RSA-2048 or ECDSA signatures
2. **Verify checksums** — SHA-256 hash before writing to flash
3. **Use HTTPS** — Never pull firmware over plain HTTP
4. **Secure boot** — Prevent unauthorized firmware from running
5. **Rollback protection** — Detect boot failures and revert

### Firmware Signing

```bash
# Generate signing key
espsecure.py generate_signing_key secure_boot_signing_key.pem

# Sign firmware
espsecure.py sign_data --keyfile secure_boot_signing_key.pem \
    --output signed_firmware.bin firmware.bin
```

## Version Management

Track firmware versions across your fleet:

```c
#define FW_VERSION_MAJOR 2
#define FW_VERSION_MINOR 1  
#define FW_VERSION_PATCH 3

// Report version on boot
char version[32];
snprintf(version, sizeof(version), "%d.%d.%d", 
    FW_VERSION_MAJOR, FW_VERSION_MINOR, FW_VERSION_PATCH);
mqtt_publish("devices/sensor-001/version", version);
```

## Rollback Strategy

The update process must be atomic:

1. Download new firmware to inactive partition
2. Verify signature and checksum
3. Mark new partition as boot target
4. Reboot into new firmware
5. Run self-diagnostics for 30 seconds
6. If diagnostics pass → mark as valid
7. If diagnostics fail → automatic rollback to previous version

## Fleet Management

For managing hundreds of devices:

- **Staged rollouts** — Update 5%, monitor, then roll to 100%
- **Device groups** — Update by hardware revision or region
- **Audit logs** — Track which version each device is running
- **Forced updates** — For critical security patches

---

*Implement production-grade OTA in our [Embedded Systems Engineering track](#tracks).*
