---
title: "Building a Smart Home System from Scratch"
date: "2025-12-15"
excerpt: "Design and build a complete home automation system with ESP32, MQTT, relays, and a mobile-friendly dashboard — no cloud subscription required."
author: "Yuvasankar Rajan P V"
tags: ["IoT", "Smart Home", "ESP32", "MQTT"]
coverImage: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800"
---

# Building a Smart Home System from Scratch

Commercial smart home systems lock you into their ecosystem. Building your own gives you full control, zero subscription fees, and the satisfaction of understanding every component.

## System Requirements

- Control lights, fans, and appliances remotely
- Mobile-friendly web dashboard
- No cloud dependency — everything runs locally
- Voice command integration (optional)
- Energy monitoring

## Architecture

```
[Mobile App] ←→ [MQTT Broker (RPi)] ←→ [ESP32 Relay Modules]
                       ↕
              [Home Assistant]
                       ↕
              [InfluxDB + Grafana]
```

## Hardware BOM

| Component | Quantity | Purpose |
|-----------|----------|---------|
| ESP32 DevKit | 4 | Node controllers |
| 4-Channel Relay Module | 4 | Switch appliances |
| ACS712 Current Sensor | 4 | Energy monitoring |
| DHT22 | 2 | Temperature/humidity |
| Raspberry Pi 4 | 1 | Central hub |
| 5V 10A Power Supply | 2 | Power relays |

## ESP32 Node Firmware

Each node controls 4 relays and reports energy consumption:

```c
#include <WiFi.h>
#include <PubSubClient.h>

const char* mqtt_server = "192.168.1.100";
const int relayPins[] = {16, 17, 18, 19};

void callback(char* topic, byte* payload, unsigned int length) {
    String message = String((char*)payload).substring(0, length);
    
    // Topic format: home/room1/relay/0
    int relayIndex = topic[strlen(topic) - 1] - '0';
    
    if (message == "ON") {
        digitalWrite(relayPins[relayIndex], HIGH);
    } else {
        digitalWrite(relayPins[relayIndex], LOW);
    }
    
    // Publish state confirmation
    client.publish("home/room1/status", message.c_str());
}

void setup() {
    for (int i = 0; i < 4; i++) {
        pinMode(relayPins[i], OUTPUT);
        digitalWrite(relayPins[i], LOW);
    }
    
    connectWiFi();
    client.setServer(mqtt_server, 1883);
    client.setCallback(callback);
    client.subscribe("home/room1/relay/#");
}
```

## Web Dashboard

Build a responsive dashboard using HTML + MQTT over WebSocket:

- Real-time toggle switches for each relay
- Energy consumption charts
- Temperature and humidity gauges
- Schedule timers for automated control

## Safety Considerations

> **⚠️ Warning**: Working with mains voltage (230V AC) is dangerous. Always use properly rated relays, fuses, and enclosures. If you're not comfortable with AC wiring, hire a licensed electrician.

Key safety measures:
1. **Optocoupler isolation** between MCU and relay
2. **Fuse protection** on every switched circuit
3. **Grounded metal enclosure** for the relay board
4. **Watchdog timer** to prevent relay stuck-on failures
5. **Default-off failsafe** — relays should turn off on reboot

## Future Enhancements

- Add voice control with a local Rhasspy instance
- PIR motion sensors for automated lighting
- Door/window sensors with reed switches
- Smart curtain motors with stepper drivers

---

*Build this project hands-on in our [IoT Systems training](#tracks).*
