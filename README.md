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

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone [https://github.com/your-username/ai-ticket-assigner.git](https://github.com/your-username/ai-ticket-assigner.git)
cd ai-ticket-assigner

2. Setup Environment Variables

Create a .env file inside the backend folder and add the following variables:

MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret

MAILTRAP_SMTP_HOST=smtp.mailtrap.io
MAILTRAP_SMTP_PORT=2525
MAILTRAP_SMTP_USER=your_mailtrap_user
MAILTRAP_SMTP_PASS=your_mailtrap_pass

GEMINI_API_KEY=your_gemini_api_key
APP_URL=http://localhost:3000

INNGEST_SIGNING_KEY=your_inngest_signing_key
INNGEST_EVENT_KEY=your_inngest_event_key

3. Start the services

Start Express Backend
cd backend
npm install
npm run dev

Start Inngest Dev Server
npx inngest-dev

Start React Frontend
cd frontend
npm install
npm run dev

🚦 Usage
1.Register or login as a User or Moderator.

2.Submit a ticket with the issue details

3.Gemini extracts the required skills, and the system finds the best-matched moderator.

4.The moderator is automatically assigned and notified via email.

5.The user can track the ticket status on the React frontend.