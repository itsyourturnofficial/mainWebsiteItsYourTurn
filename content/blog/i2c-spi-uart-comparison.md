---
title: "I2C, SPI, and UART: Choosing the Right Communication Protocol"
date: "2025-12-20"
excerpt: "A practical comparison of the three most common embedded communication protocols — when to use each, wiring diagrams, and code examples."
author: "Manimaran V"
tags: ["Embedded", "Protocols", "STM32", "Hardware"]
coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
---

# I2C, SPI, and UART: Choosing the Right Communication Protocol

Every embedded system needs communication between components. The three workhorses are I2C, SPI, and UART. Understanding their trade-offs is essential for designing reliable hardware.

## Quick Comparison

| Feature | UART | I2C | SPI |
|---------|------|-----|-----|
| Wires | 2 (TX, RX) | 2 (SDA, SCL) | 4+ (MOSI, MISO, SCK, CS) |
| Speed | Up to 1 Mbps | Up to 3.4 Mbps | Up to 80 Mbps |
| Devices | 2 (point-to-point) | 128 (addressed) | Unlimited (CS per device) |
| Duplex | Full | Half | Full |
| Complexity | Low | Medium | Medium |
| Distance | Long (with RS-485) | Short (<1m) | Short (<30cm) |

## When to Use UART

**Best for**: Debug output, GPS modules, Bluetooth modules, PC communication.

```c
// STM32 UART transmit
HAL_UART_Transmit(&huart2, (uint8_t*)"Hello\r\n", 7, 100);

// Receive with interrupt
HAL_UART_Receive_IT(&huart2, &rx_byte, 1);
```

**Pros**: Simple, no clock line needed, long distance possible.
**Cons**: Only point-to-point, baud rate must match on both sides.

## When to Use I2C

**Best for**: Temperature sensors, EEPROMs, displays, accelerometers — anything on the same PCB with moderate data rates.

```c
// Read temperature from TMP102 sensor
uint8_t data[2];
HAL_I2C_Mem_Read(&hi2c1, 0x48 << 1, 0x00, 1, data, 2, 100);
float temp = ((data[0] << 4) | (data[1] >> 4)) * 0.0625;
```

**Pros**: Only 2 wires, multi-device bus, standardized addressing.
**Cons**: Slower than SPI, pull-up resistors needed, half-duplex.

## When to Use SPI

**Best for**: SD cards, high-speed ADCs, displays, flash memory — anything requiring fast data transfer.

```c
// Read accelerometer data via SPI
uint8_t tx = 0x80 | WHO_AM_I_REG;  // Read bit + register
uint8_t rx;
HAL_GPIO_WritePin(CS_GPIO_Port, CS_Pin, GPIO_PIN_RESET);
HAL_SPI_TransmitReceive(&hspi1, &tx, &rx, 1, 100);
HAL_GPIO_WritePin(CS_GPIO_Port, CS_Pin, GPIO_PIN_SET);
```

**Pros**: Fastest of the three, full-duplex, no addressing overhead.
**Cons**: More wires (one CS per device), no built-in error checking.

## Decision Flowchart

1. Need to talk to a PC or debug? → **UART**
2. Multiple slow sensors on one bus? → **I2C**
3. High-speed data transfer? → **SPI**
4. Long distance (>1m)? → **UART over RS-485**
5. Only 2 pins available? → **I2C**

## Debugging Tips

- **I2C not working?** Check pull-up resistors (4.7kΩ to 3.3V), verify addresses with a bus scanner
- **SPI garbled data?** Check clock polarity (CPOL) and phase (CPHA) settings
- **UART gibberish?** Baud rate mismatch — use an oscilloscope to measure bit timing

---

*Practice all three protocols hands-on in our [Embedded Systems Engineering track](#tracks).*
