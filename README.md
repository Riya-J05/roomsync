# 🏠 RoomSync

### Roommate Compatibility & Conflict Prediction Platform

> Because shared living should be peaceful — not a gamble.

---

## 🚀 About The Project

RoomSync is a web-based roommate compatibility checker designed to reduce shared-living conflicts before they happen.

Finding a roommate today is usually based on urgency, rent, and convenience — not compatibility. This often leads to stressful environments, misunderstandings, and frequent room changes.

RoomSync shifts the focus from location-based matching to lifestyle-based compatibility.

This project was built as part of **Code Crucible - Namespace**, a one-month technical competition focused on building a fully explainable working product from scratch.

---

## 🎯 Problem Statement

In hostels, PGs, and shared flats:

- People move in without understanding each other's habits
- Small lifestyle differences turn into major conflicts
- Mental stress increases over time
- Room changes become frequent and inconvenient

Most existing housing platforms focus only on rent, amenities, and location — completely ignoring human compatibility.

**Result:** Avoidable arguments, discomfort, and unstable living arrangements.

---

## 💡 Solution Overview

RoomSync provides:

- A structured lifestyle questionnaire
- A transparent rule-based scoring engine
- Conflict red-flag detection
- Practical co-living suggestions

Instead of only giving a number, RoomSync explains _why_ two roommates may clash and what they can do about it.

Think of it as:  
**Personality matching — but for shared living.**

---

## ⚙️ How RoomSync Works

### 1️⃣ Lifestyle Questionnaire

Two roommates fill out a shared form covering:

- Sleep schedule
- Cleanliness level
- Study/work hours
- Noise tolerance
- Guest preferences
- Food habits
- Smoking/drinking preferences
- Conflict handling style

Features:

- Simple MCQs
- No login required
- Easy and quick to demonstrate

---

### 2️⃣ Compatibility Scoring Engine

RoomSync uses a transparent rule-based scoring system.

- Matching preferences → Higher score
- Partial mismatches → Moderate impact
- Strong conflicts → Score reduction

#### Final Output Includes:

- Compatibility Score (e.g., 82%)
- Compatibility Category:
  - ✅ Great Match
  - ⚠️ Adjustments Needed
  - ❌ High-Risk Pair

The scoring logic is fully explainable and easy to justify during code review.

---

### 3️⃣ Red-Flag Detection (Key Differentiator)

Instead of only showing a score, RoomSync highlights specific potential conflicts.

Example:

⚠️ One roommate prefers silence after 10 PM, while the other is active late at night.

This:

- Sets expectations early
- Encourages honest discussion
- Reduces future conflicts
- Demonstrates real-world problem understanding

---

## 🌐 Website Structure

### 📄 1. Landing Page (`/`)

- Introduction to RoomSync
- Problem explanation
- How It Works section
- Benefits
- Team section
- Primary "Start Compatibility Check" button

---

### 📄 2. Compatibility Form Page (`/form`)

- Shared form for Roommate A & Roommate B
- Side-by-side input layout
- Grouped questions:
  - Daily habits
  - Lifestyle preferences
  - Conflict handling style
- POST form submission
- Temporary in-memory handling (no database required)

---

### 📄 3. Compatibility Report Page (`/result`)

- Overall compatibility score
- Compatibility category verdict
- Highlighted red flags
- “What You Might Fight About” section
- Practical improvement suggestions
- Options to retake test or return home

---

## 🔁 User Flow

Home → Form → Result → Retake / Home

---

## 🛠 Tech Stack

### Frontend

- HTML
- CSS
- JavaScript

### Framework

- Bootstrap

---

## 🎯 Target Users

- College hostel students
- PG residents
- Flat-sharing students
- Young professionals
- University housing departments

---

## 🔮 Future Improvements

- Machine learning-based adaptive scoring
- User profiles and saved reports
- Roommate database matching system
- Compatibility visualization dashboards
- Data-driven conflict prediction refinement

---

## 🏆 Built For

**Code Crucible: Class of 2029**  
A one-month batch competition focused on technical depth, explainability, and real-world application.

---

## 👩‍💻 What This Project Demonstrates

- Real-world problem identification
- UI/UX structuring
- Backend logic design
- Explainable algorithm creation
- Conflict modeling approach
- Clean routing and structured flow

---

## 📌 Note

This project focuses on preventive compatibility analysis and is designed to encourage communication, transparency, and healthier shared living environments.
