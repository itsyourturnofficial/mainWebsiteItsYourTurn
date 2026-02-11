---
title: "From Prototype to Production: Scaling Your IoT Product"
date: "2025-12-05"
excerpt: "The complete journey from breadboard prototype to manufactured product — covering design reviews, certifications, supply chain, and manufacturing."
author: "Yuvasankar Rajan P V"
tags: ["Product", "Manufacturing", "IoT", "Startup"]
coverImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
---

# From Prototype to Production: Scaling Your IoT Product

Building a prototype that works on your desk is the easy part. Turning it into a manufactured product that works reliably in thousands of units across different environments — that's engineering.

## The Production Journey

```
[Idea] → [Prototype] → [EVT] → [DVT] → [PVT] → [Mass Production]
  1 wk      4 wks       6 wks    4 wks    3 wks     Ongoing
```

### Stage Definitions

| Stage | Goal | Output |
|-------|------|--------|
| **Prototype** | Prove the concept works | Breadboard + bodge wires |
| **EVT** (Engineering Validation) | Verify all features on custom PCB | 10-20 units |
| **DVT** (Design Validation) | Test reliability and manufacturability | 50-100 units |
| **PVT** (Production Validation) | Validate manufacturing process | 200-500 units |
| **MP** (Mass Production) | Scale to volume | 1000+ units |

## EVT: Your First Real PCB

This is where most startups make critical mistakes. Follow these guidelines:

1. **Test all interfaces** — Don't assume they work because the datasheet says so
2. **Add test points** — Every signal you might need to debug
3. **Include jumpers** — For optional features you might cut
4. **Over-spec power** — Use bigger capacitors than you think you need
5. **Design for hand soldering** — You'll be reworking boards constantly

## DVT: Design for Reliability

Environmental testing ensures your product survives the real world:

- **Temperature cycling** — -20°C to +60°C, 100 cycles
- **Vibration testing** — Random vibration per IEC 60068-2-64
- **ESD testing** — ±8 kV contact, ±15 kV air discharge
- **Drop testing** — 1.5m drops on all faces and corners
- **Humidity** — 85°C, 85% RH for 1000 hours

## Certifications

### Mandatory

- **FCC** (USA) / **CE** (Europe) — RF emissions compliance
- **RoHS** — Restriction of hazardous substances
- **UL/IEC 62368** — Product safety for IT/AV equipment

### Recommended

- **IP rating** — Ingress protection for outdoor devices
- **WiFi Alliance** — Interoperability certification
- **BIS** (India) — Bureau of Indian Standards

## Supply Chain Management

### Bill of Materials (BOM) Optimization

- **Reduce unique parts** — Each unique part adds sourcing risk
- **Avoid single-source components** — Always have a second source
- **Design for standard packages** — 0402, 0603, QFN are cheapest
- **Check lead times** — Some ICs have 52-week lead times

### Cost Breakdown (Typical IoT Device)

| Category | % of COGS |
|----------|-----------|
| PCB + Assembly | 25% |
| Components | 40% |
| Enclosure | 15% |
| Packaging | 5% |
| Testing + QC | 10% |
| Logistics | 5% |

## Manufacturing Partner Selection

What to look for in a contract manufacturer (CM):

1. **MOQ flexibility** — Start with 500-1000 units
2. **In-house SMT** — Pick-and-place, reflow, and automated optical inspection
3. **Testing capability** — Functional test jig development
4. **Quality certifications** — ISO 9001 minimum
5. **Communication** — Weekly updates and transparent reporting

## Common Pitfalls

- ❌ Skipping EVT and going straight to production tooling
- ❌ Not testing with production firmware on production hardware
- ❌ Ignoring regulatory requirements until the end
- ❌ Using hobbyist-grade components in production designs
- ❌ Not budgeting for 15-20% component waste during assembly

---

*Learn the complete product development lifecycle in our [Hardware Design & PCB track](#tracks).*
