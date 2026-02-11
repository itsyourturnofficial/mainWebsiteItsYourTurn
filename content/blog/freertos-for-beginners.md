---
title: "FreeRTOS for Beginners: Building Real-Time Embedded Applications"
date: "2026-01-20"
excerpt: "Learn how to use FreeRTOS on STM32 microcontrollers — from task creation and scheduling to inter-task communication with queues and semaphores."
author: "Yuvasankar Rajan P V"
tags: ["RTOS", "STM32", "Embedded", "Firmware"]
coverImage: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=800"
---

# FreeRTOS for Beginners: Building Real-Time Embedded Applications

Real-time operating systems are the backbone of reliable embedded products. FreeRTOS is the most popular choice — it's free, lightweight, and runs on everything from tiny Cortex-M0 chips to powerful Cortex-M7 processors.

## Why Use an RTOS?

Bare-metal programming works for simple applications. But as complexity grows, you need:

- **Deterministic timing** — Guaranteed response within deadlines
- **Task isolation** — Independent execution contexts
- **Inter-task communication** — Queues, semaphores, and event groups
- **Power management** — Idle hooks for sleep modes

## Creating Your First Task

```c
#include "FreeRTOS.h"
#include "task.h"

void vLedTask(void *pvParameters) {
    for (;;) {
        HAL_GPIO_TogglePin(GPIOA, GPIO_PIN_5);
        vTaskDelay(pdMS_TO_TICKS(500));
    }
}

int main(void) {
    HAL_Init();
    SystemClock_Config();

    xTaskCreate(vLedTask, "LED", 128, NULL, 1, NULL);
    vTaskStartScheduler();

    for (;;); // Should never reach here
}
```

## Task Priorities

FreeRTOS uses preemptive scheduling. Higher priority tasks always run first:

| Priority | Task | Purpose |
|----------|------|---------|
| 3 (High) | Sensor Read | Time-critical sampling |
| 2 (Medium) | Data Process | Signal filtering |
| 1 (Low) | Display Update | UI refresh |
| 0 (Idle) | Power Save | Enter sleep mode |

## Inter-Task Communication

### Queues
Pass data between tasks safely:

```c
QueueHandle_t xSensorQueue = xQueueCreate(10, sizeof(float));

// Producer task
float temperature = readSensor();
xQueueSend(xSensorQueue, &temperature, portMAX_DELAY);

// Consumer task
float received;
xQueueReceive(xSensorQueue, &received, portMAX_DELAY);
```

### Binary Semaphores
Synchronize tasks with events:

```c
SemaphoreHandle_t xButtonSem = xSemaphoreCreateBinary();

// ISR gives the semaphore
void EXTI0_IRQHandler(void) {
    xSemaphoreGiveFromISR(xButtonSem, NULL);
}

// Task waits for the event
xSemaphoreTake(xButtonSem, portMAX_DELAY);
handleButtonPress();
```

## Best Practices

1. **Keep stack sizes minimal** — Profile with `uxTaskGetStackHighWaterMark()`
2. **Avoid floating point in ISRs** — Use integer math or deferred processing
3. **Never block in an ISR** — Use `FromISR` variants of FreeRTOS APIs
4. **Use static allocation** — Avoid heap fragmentation in long-running systems
5. **Monitor idle time** — Track CPU utilization with runtime stats

---

*Master FreeRTOS hands-on in our [Embedded Systems Engineering track](#tracks).*
