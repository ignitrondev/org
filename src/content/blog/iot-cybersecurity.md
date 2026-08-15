---
title: "Cybersecurity in the Age of IoT"
excerpt: "Security challenges in a connected world and how we address them."
date: 2024-08-05
category: "technology"
label: "Security"
color: "var(--cyber-cyan)"
featured: false
---

# Cybersecurity in the Age of IoT

The internet of things promised connected everything. What it also delivered is a dramatically larger attack surface — and most of it runs unattended, on hardware we do not control.

## The attack surface keeps growing

Every sensor, every AIS transponder, every fleet terminal is a potential entry point. The problem is not any single device; it is the sprawl. Devices multiply faster than teams can patch them, and many ship with default credentials or unmaintained firmware.

## From the device to the API

The real risk is rarely the device itself. It is what the device connects to. A compromised sensor can become a stepping stone into an API, then into a database, then into a whole platform. That means the security boundary has to move up the stack: authentication, authorization, rate limiting, and audit at every layer.

## ShipRadar: security by design

Building **ShipRadar** forced us to think about this carefully. Vessel data is sensitive operational information — positions, routes, fleet activity. We treat the platform as untrusted by default:

- Strict API authentication and scoped access for every consumer
- Validation and rate limiting on every ingestion endpoint
- Read-only data products with clear ownership boundaries
- Audit logging on all access to fleet data

## Securing the pipeline itself

The platform is only as trustworthy as the pipeline that ships it. We follow the same discipline across our infrastructure:

- Immutable deployments through Kubernetes and ArgoCD
- Secrets managed through a dedicated store, never in the repository
- Automated security scanning before anything reaches production
- Small, frequent releases instead of large risky ones

## A practical checklist

If you operate connected software, start here:

1. Inventory every device and every API that touches your data
2. Enforce authentication and least-privilege access everywhere
3. Patch or isolate devices you cannot maintain
4. Log access and review it regularly
5. Make deployments boring and rollbacks instant

> Security is not a feature you add at the end. It is a property of how you build, ship, and operate.

The IoT wave is not going away. The question is whether the software on top of it is trustworthy. Ours is built to be.
