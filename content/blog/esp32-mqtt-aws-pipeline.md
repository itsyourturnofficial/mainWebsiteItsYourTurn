---
title: "Building an Industrial IoT Pipeline with ESP32, MQTT & AWS"
date: "2026-02-05"
excerpt: "A deep dive into building a production-grade IIoT data pipeline — from edge sensors to cloud dashboards using ESP32, MQTT, and AWS IoT Core."
author: "Shyam Ganesh E"
tags: ["IIoT", "AWS", "MQTT", "ESP32", "Cloud"]
coverImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
---

# Building an Industrial IoT Pipeline with ESP32, MQTT & AWS

In industrial environments, reliability is non-negotiable. This guide walks through building a production-grade data pipeline that collects sensor data at the edge and delivers it to AWS for storage, alerting, and visualization.

## Architecture Overview

```
[Sensors] → [ESP32 Gateway] → [MQTT/TLS] → [AWS IoT Core] → [DynamoDB] → [Grafana]
```

Each component is chosen for resilience and scalability.

## Edge: ESP32 as Gateway

The ESP32 reads data from multiple sensors over I2C and SPI, then publishes JSON payloads to an MQTT broker.

```c
// Sensor reading structure
typedef struct {
    float temperature;
    float humidity;
    float vibration;
    uint32_t timestamp;
} SensorPayload;

void publishData(SensorPayload *data) {
    char json[256];
    snprintf(json, sizeof(json),
        "{\"temp\":%.2f,\"hum\":%.2f,\"vib\":%.2f,\"ts\":%lu}",
        data->temperature, data->humidity,
        data->vibration, data->timestamp);

    mqttClient.publish("factory/line-1/sensors", json);
}
```

## Communication: MQTT with TLS

For industrial deployments, always use TLS mutual authentication:

- Device certificates provisioned via AWS IoT
- Root CA certificate embedded in firmware
- Automatic reconnection with exponential backoff

## Cloud: AWS IoT Core

AWS IoT Core handles:

1. **Device Authentication** — X.509 certificates
2. **Message Routing** — IoT Rules Engine
3. **Data Storage** — DynamoDB or TimeStream
4. **Alerting** — SNS notifications on threshold breaches

### IoT Rule Example

```sql
SELECT temperature, humidity, timestamp()
FROM 'factory/+/sensors'
WHERE temperature > 80
```

This rule triggers an SNS alert whenever temperature exceeds 80°C.

## Visualization: Grafana Dashboards

Connect Grafana to your TimeStream database for real-time dashboards:

- Line charts for temperature trends
- Gauge widgets for current values
- Alert annotations for threshold events
- 30-day data retention policies

## Lessons Learned

1. **Always buffer locally** — If the network drops, store readings in SPIFFS and replay later
2. **Use QoS 1 minimum** — At-least-once delivery prevents data loss
3. **Monitor device health** — Publish heartbeat messages every 60 seconds
4. **Version your firmware** — OTA updates are essential for production deployments

---

*Want to build this system hands-on? Join our [Industrial IoT Architecture track](#tracks).*
