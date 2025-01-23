# GEMchat - AI Chatbot with MERN Stack

GEMchat is a full-stack AI-powered chatbot application built using the MERN (MongoDB, Express.js, React, Node.js) stack. It leverages Google's Gemini AI model for generating conversational responses. The application allows users to sign up, log in, and interact with the AI chatbot. Users can also view their chat history and clear conversations.

## Features

- **User Authentication**: Sign up, log in, and log out functionality with JWT-based authentication.
- **AI Chatbot**: Interact with Google's Gemini AI model for conversational responses.
- **Chat History**: View and manage your chat history.
- **Responsive UI**: Built with Material-UI and React for a seamless user experience.
- **Code Highlighting**: Displays code blocks in chat responses with syntax highlighting.

## Technologies Used

- **Frontend**:
  - React.js
  - TypeScript
  - Material-UI (MUI)
  - Vite (Build Tool)
  - React Router (Routing)
  - Axios (HTTP Client)
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (Database)
  - Google Generative AI (Gemini AI)
  - JSON Web Tokens (JWT) for authentication
- **Other Tools**:
  - Concurrently (Run multiple commands concurrently)
  - Nodemon (Automatically restart server during development)
  - Bcrypt (Password hashing)
  - Dotenv (Environment variables)

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/rahul5403/gemchat_mern.git
   cd rahul5403-gemchat_mern
   ```

2. **Install dependencies**:
   ```bash
   npm install
   npm install --prefix frontend
   ```

3. **Set up environment variables**:
   - Create a `.env` file in the root directory and add the following variables:
     ```env
     MONGODB_URL=<your_mongodb_connection_string>
     JWT_SECRET=<your_jwt_secret_key>
     GOOGLE_API_KEY=<your_google_generative_ai_api_key>
     COOKIE_SECRET=<your_cookie_secret>
     ```

4. **Run the application**:
   - For development:
     ```bash
     npm run dev
     ```
   - For production:
     ```bash
     npm run build
     npm start
     ```

5. **Access the application**:
   - Open your browser and navigate to `http://localhost:5000`.

## Folder Structure

```
Directory structure:
└── rahul5403-gemchat_mern/
    ├── package.json
    ├── tsconfig.json
    ├── backend/
    │   └── src/
    │       ├── index.ts
    │       ├── controllers/
    │       │   ├── chat-controllers.ts
    │       │   └── user-controllers.ts
    │       ├── db/
    │       │   └── connection.ts
    │       ├── models/
    │       │   └── User.ts
    │       ├── routes/
    │       │   ├── chat-routes.ts
    │       │   ├── index.ts
    │       │   └── user-routes.ts
    │       └── utils/
    │           ├── token-manager.ts
    │           └── validators.ts
    └── frontend/
        ├── README.md
        ├── index.html
        ├── package.json
        ├── tsconfig.json
        ├── tsconfig.node.json
        ├── vite.config.ts
        ├── .eslintrc.cjs
        ├── public/
        └── src/
            ├── App.css
            ├── App.tsx
            ├── index.css
            ├── main.tsx
            ├── vite-env.d.ts
            ├── assets/
            ├── components/
            │   ├── Header.tsx
            │   ├── chat/
            │   │   └── ChatItem.tsx
            │   ├── footer/
            │   │   └── Footer.tsx
            │   ├── shared/
            │   │   ├── CustomizedInput.tsx
            │   │   ├── Logo.tsx
            │   │   └── NavigationLink.tsx
            │   └── typer/
            │       └── TypingAnim.tsx
            ├── context/
            │   └── AuthContext.tsx
            ├── helpers/
            │   └── api-communicator.ts
            └── pages/
                ├── Chat.tsx
                ├── Home.tsx
                ├── Login.tsx
                ├── NotFound.tsx
                └── Signup.tsx

```

## API Endpoints

- **User Authentication**:
  - `POST /user/signup` - User registration.
  - `POST /user/login` - User login.
  - `GET /user/auth-status` - Check authentication status.
  - `GET /user/logout` - User logout.

- **Chat**:
  - `POST /chat/new` - Send a new message to the chatbot.
  - `GET /chat/all-chats` - Retrieve all user chats.
  - `DELETE /chat/delete` - Delete all user chats.
