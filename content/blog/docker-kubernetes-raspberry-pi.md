---
title: "Docker & Kubernetes on Raspberry Pi: Edge Orchestration"
date: "2025-12-28"
excerpt: "Deploy containerized microservices on Raspberry Pi clusters. Learn K3s, container networking, and edge orchestration patterns."
author: "Shyam Ganesh E"
tags: ["Docker", "Kubernetes", "Raspberry Pi", "Edge Computing"]
coverImage: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=800"
---

# Docker & Kubernetes on Raspberry Pi: Edge Orchestration

Cloud-native tools aren't just for data centers. Running Kubernetes at the edge gives you self-healing, rolling updates, and service discovery — right on your factory floor.

## Why Containers at the Edge?

- **Reproducibility** — Same container runs in dev and production
- **Isolation** — Services don't interfere with each other
- **Updates** — Rolling deployments with zero downtime
- **Scalability** — Add nodes to handle more sensors

## Hardware Setup

Our recommended edge cluster:

| Node | Hardware | Role |
|------|----------|------|
| Node 1 | RPi 4 (8GB) | K3s Server (Control Plane) |
| Node 2 | RPi 4 (4GB) | K3s Agent (Worker) |
| Node 3 | RPi 4 (4GB) | K3s Agent (Worker) |

## Installing K3s

K3s is a lightweight Kubernetes distribution perfect for ARM devices.

### Server Node

```bash
curl -sfL https://get.k3s.io | sh -s - \
    --write-kubeconfig-mode 644 \
    --disable traefik
```

### Agent Nodes

```bash
curl -sfL https://get.k3s.io | K3S_URL=https://192.168.1.100:6443 \
    K3S_TOKEN=$(cat /var/lib/rancher/k3s/server/node-token) \
    sh -
```

## Deploying an IoT Data Pipeline

### Deployment: MQTT Broker

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: mosquitto
spec:
  replicas: 1
  selector:
    matchLabels:
      app: mosquitto
  template:
    metadata:
      labels:
        app: mosquitto
    spec:
      containers:
      - name: mosquitto
        image: eclipse-mosquitto:2
        ports:
        - containerPort: 1883
        volumeMounts:
        - name: config
          mountPath: /mosquitto/config
```

### Deployment: Data Processor

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: data-processor
spec:
  replicas: 2
  selector:
    matchLabels:
      app: processor
  template:
    spec:
      containers:
      - name: processor
        image: ghcr.io/itsyourturn/iot-processor:latest
        env:
        - name: MQTT_BROKER
          value: "mosquitto.default.svc.cluster.local"
        resources:
          limits:
            memory: "256Mi"
            cpu: "500m"
```

## Monitoring

Deploy Prometheus + Grafana for cluster observability:

- **CPU/Memory** per pod and node
- **MQTT message rates** via custom exporters
- **Disk usage** alerts before SD cards fill up
- **Pod restart** notifications via webhook

## Production Tips

1. **Use NVMe over USB** — SD cards fail under write-heavy workloads
2. **Set resource limits** — Prevent a single pod from starving others
3. **Enable pod disruption budgets** — Ensure availability during updates
4. **Back up etcd** — K3s uses SQLite by default; consider external etcd for HA
5. **Use private registries** — Pull images from a local registry to save bandwidth

---

*Build your own edge cluster in our [Industrial IoT Architecture track](#tracks).*
