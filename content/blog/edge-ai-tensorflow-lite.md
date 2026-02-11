---
title: "Edge AI: Running TensorFlow Lite on Microcontrollers"
date: "2026-01-15"
excerpt: "Deploy machine learning models on resource-constrained devices. Learn to train, quantize, and run TF Lite models on ESP32 and STM32."
author: "Shyam Ganesh E"
tags: ["AI", "TensorFlow", "Edge Computing", "ESP32"]
coverImage: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=800"
---

# Edge AI: Running TensorFlow Lite on Microcontrollers

The future of AI isn't just in the cloud — it's at the edge. Running ML models directly on microcontrollers enables real-time inference without network latency, bandwidth costs, or privacy concerns.

## Why Edge AI?

| Cloud AI | Edge AI |
|----------|---------|
| High latency (100ms+) | Ultra-low latency (<10ms) |
| Requires connectivity | Works offline |
| Ongoing cloud costs | Zero inference cost |
| Privacy concerns | Data stays on device |

## The Edge AI Pipeline

```
[Data Collection] → [Model Training] → [Quantization] → [Deployment] → [Inference]
     (Python)         (TensorFlow)       (TF Lite)        (C/C++)       (MCU)
```

## Training a Simple Model

Start with a keyword detection model in Python:

```python
import tensorflow as tf

model = tf.keras.Sequential([
    tf.keras.layers.Conv1D(8, 3, activation='relu', input_shape=(1000, 1)),
    tf.keras.layers.MaxPooling1D(2),
    tf.keras.layers.Flatten(),
    tf.keras.layers.Dense(16, activation='relu'),
    tf.keras.layers.Dense(4, activation='softmax')
])

model.compile(optimizer='adam', loss='sparse_categorical_crossentropy')
model.fit(train_data, train_labels, epochs=50)
```

## Quantization: Shrinking the Model

Full-precision models are too large for MCUs. Quantize to int8:

```python
converter = tf.lite.TFLiteConverter.from_keras_model(model)
converter.optimizations = [tf.lite.Optimize.DEFAULT]
converter.target_spec.supported_types = [tf.int8]

tflite_model = converter.convert()
# Model size: 2.1 MB → 89 KB
```

## Running on ESP32

```c
#include "tensorflow/lite/micro/all_ops_resolver.h"
#include "tensorflow/lite/micro/micro_interpreter.h"

const tflite::Model* model = tflite::GetModel(model_data);
tflite::AllOpsResolver resolver;

constexpr int kTensorArenaSize = 10 * 1024;
uint8_t tensor_arena[kTensorArenaSize];

tflite::MicroInterpreter interpreter(model, resolver,
    tensor_arena, kTensorArenaSize);
interpreter.AllocateTensors();

// Run inference
TfLiteTensor* input = interpreter.input(0);
memcpy(input->data.int8, sensor_data, input->bytes);
interpreter.Invoke();

TfLiteTensor* output = interpreter.output(0);
int prediction = output->data.int8[0];
```

## Real-World Applications

- **Predictive maintenance** — Vibration anomaly detection on motors
- **Voice commands** — Keyword spotting without cloud dependency
- **Visual inspection** — Defect detection on assembly lines
- **Environmental monitoring** — Species identification from audio

## Performance Tips

1. **Use int8 quantization** — 4x smaller, 2-3x faster than float32
2. **Minimize model complexity** — Fewer layers = faster inference
3. **Profile on target** — Don't rely on desktop benchmarks
4. **Use hardware acceleration** — ESP32-S3 has vector instructions for ML

---

*Build your first Edge AI project in our [Industrial IoT Architecture track](#tracks).*
