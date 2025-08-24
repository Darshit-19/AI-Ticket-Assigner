# 🤖 AI Ticket Assigner

An **AI-powered ticket management system** that uses **Google Gemini** to analyze user-submitted tickets, extract the **required skills**, and automatically assign the ticket to the **best-suited moderator**.

The project follows an **event-driven architecture** using **Inngest**, ensuring smooth background processing and real-time notifications.

---

## ✨ Features

-   **AI Skill Extraction** – Google Gemini analyzes ticket content to detect required skills.
-   **Smart Ticket Assignment** – Tickets are assigned to moderators with the highest skill match.
-   **Event-Driven Processing** – Asynchronous workflows managed by Inngest.
-   **Secure Authentication** – JWT-based login with role-based access control.
-   **Email Notifications** – Ticket assignment and registration updates sent via Mailtrap SMTP.
-   **Minimal React Frontend** – Submit and track tickets in real time.

---

## 🛠 Tech Stack

-   **Frontend:** React, TailwindCSS
-   **Backend:** Node.js, Express, MongoDB
-   **AI:** Google Gemini API
-   **Event Handling:** Inngest
-   **Authentication:** JWT (Role-based)
-   **Email Service:** Mailtrap (SMTP)

---

