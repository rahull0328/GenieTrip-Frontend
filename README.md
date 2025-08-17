# ezLearn Frontend - AI-Powered Interview Preparation Platform

A modern, responsive web application designed to revolutionize interview preparation through AI-powered learning experiences, personalized study sessions, and comprehensive skill assessment tools.

## 🚀 Live Demo
[Coming Soon] - Experience the future of interview preparation with our AI-powered platform.

## 📋 Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Core Functionality](#core-functionality)
- [Components Overview](#components-overview)
- [API Integration](#api-integration)
- [Contributing](#contributing)

## ✨ Features

### 🔐 Authentication & User Management
- **Secure User Authentication**
  - User registration with email and password
  - Secure login with JWT token management
  - Profile management with photo upload capability
  - Password reset functionality
  - Remember me functionality for persistent sessions

### 🏠 Dashboard & Analytics
- **Personalized Dashboard**
  - Welcome greeting with user-specific information
  - Quick access to all platform features
  - Performance statistics and progress tracking
  - Recent activity overview
  - Responsive design for all device types

### 🎯 AI-Powered Interview Preparation
- **Smart Interview Prep System**
  - AI-generated interview questions based on specific roles
  - Real-time AI response analysis and feedback
  - Role-specific preparation tracks:
    - Frontend Developer Interview Prep
    - Backend Developer Interview Prep
    - Full Stack Developer Interview Prep
    - Data Scientist Interview Prep
    - DevOps Engineer Interview Prep
  - Difficulty level selection (Beginner, Intermediate, Advanced)
  - Progress tracking with detailed analytics
  - Performance scoring and improvement suggestions

### 📝 Question Management System
- **Interactive Question Cards**
  - Rich text display for questions and answers
  - Code syntax highlighting for technical questions
  - Multiple answer formats support
  - Bookmark functionality for important questions
  - Search and filter capabilities
  - Share questions with peers

### 🤖 AI Response Analysis
- **Intelligent Feedback Engine**
  - Real-time AI-generated feedback on responses
  - Performance scoring with detailed metrics
  - Personalized improvement recommendations
  - Detailed explanation of correct approaches
  - Learning path suggestions based on performance

### 📊 Analytics & Insights
- **Comprehensive Analytics Dashboard**
  - Session-wise performance tracking
  - Topic-wise strength analysis
  - Time-based progress visualization
  - Accuracy improvement metrics
  - Leaderboard rankings and achievements

### 🎨 Modern UI/UX Design
- **Responsive Design System**
  - Mobile-first responsive design
  - Dark/light theme support
  - Smooth animations and transitions
  - Intuitive navigation structure
  - Accessibility-compliant design
  - Modern, clean interface

### 🔄 Real-time Features
- **Live Collaboration Tools**
  - Real-time session updates
  - Live progress sharing
  - Instant notifications
  - Collaborative study sessions

## 🛠️ Tech Stack

### Frontend Technologies
- **React 18** - Modern UI library for building user interfaces
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for styling
- **React Router v6** - Client-side routing solution
- **Axios** - HTTP client for API communication
- **React Context API** - State management solution
- **React Hook Form** - Form handling and validation

### Development Tools
- **ESLint** - Code linting and quality assurance
- **Prettier** - Code formatting and consistency
- **Git** - Version control system

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/rahull0328/ezLearn-Frontend.git
   cd ezLearn-Frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_API_BASE_URL=your_backend_api_url
   VITE_API_KEY=your_api_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

## 📁 Project Structure

```
ezLearn-Frontend/
├── public/
│   ├── hero_section_image.png
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Cards/
│   │   │   ├── ProfileCard.jsx
│   │   │   ├── QuestionCard.jsx
│   │   │   └── SummaryCard.jsx
│   │   ├── Input/
│   │   │   ├── Input.jsx
│   │   │   └── ProfilePhotoSelector.jsx
│   │   ├── Layout/
│   │   │   └── DashboardLayout.jsx
│   │   └── Loader/
│   │       ├── DeleteAlertContent.jsx
│   │       ├── Drawer.jsx
│   │       ├── Modal.jsx
│   │       ├── SkeletonLoader.jsx
│   │       ├── SpinnerLoader.jsx
│   ├── pages/
│   │   ├── Auth/
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── Home/
│   │   │   └── Dashboard.jsx
│   │   ├── InterviewPrep/
│   │   │   ├── AIResponsePreview.jsx
│   │   │   ├── InterviewPrep.jsx
│   │   │   └── RoleInfoHeader.jsx
│   │   └── Shared/
│   │       ├── CreateSessionForm.jsx
│   │       ├── LandingPage.jsx
│   │       └── Navbar.jsx
│   ├── context/
│   │   └── userContext.jsx
│   ├── utils/
│   │   ├── apiPaths.js
│   │   ├── axios.js
│   │   ├── data.js
│   │   ├── helper.js
│   │   └── uploadImage.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🔧 Core Functionality

### Authentication Flow
1. **Registration**: New users can create accounts with email and password
2. **Login**: Existing users can securely log in with credentials
3. **Profile Management**: Users can update their profile information and upload photos
4. **Session Management**: Secure JWT token handling for authenticated sessions

### Interview Preparation Flow
1. **Role Selection**: Users choose their target role (Frontend, Backend, etc.)
2. **Question Generation**: AI generates relevant questions based on selected role
3. **Response Submission**: Users provide their answers to questions
4. **AI Analysis**: System provides detailed feedback and scoring
5. **Progress Tracking**: Performance metrics and improvement suggestions

### Question Management
1. **Question Display**: Rich text questions with code highlighting
2. **Answer Formats**: Support for text, code, and multiple choice answers
3. **Bookmark System**: Save important questions for later review
4. **Search & Filter**: Find questions by topic, difficulty, or keyword

## 🧩 Components Overview

### Reusable Components
- **ProfileCard**: Displays user profile information
- **QuestionCard**: Interactive question display component
- **SummaryCard**: Shows performance summaries and statistics
- **Input**: Custom form input components with validation
- **Modal**: Accessible modal dialogs for forms and confirmations
- **SkeletonLoader**: Loading states for better UX

### Page Components
- **Dashboard**: Main user dashboard with analytics
- **InterviewPrep**: Core interview preparation interface
- **Login/Register**: Authentication pages
- **LandingPage**: Marketing and introduction page

## 🔌 API Integration

### API Endpoints
- **Authentication**: `/api/auth/login`, `/api/auth/register`, `/api/auth/profile`
- **Questions**: `/api/questions`, `/api/questions/:id`
- **Interview Prep**: `/api/interview-prep/start`, `/api/interview-prep/submit`
- **Analytics**: `/api/analytics/user/:id`, `/api/analytics/progress`

### API Communication
- **Axios Instance**: Configured HTTP client with interceptors
- **Error Handling**: Comprehensive error handling and user feedback
- **Loading States**: Skeleton loaders and spinners for better UX
- **Caching**: Optimized API calls with caching strategies

## 🎯 Key Features in Detail

### AI-Powered Features
- **Question Generation**: AI creates role-specific interview questions
- **Response Analysis**: AI evaluates user responses and provides feedback
- **Learning Recommendations**: Personalized suggestions based on performance
- **Progress Tracking**: AI-driven insights and improvement paths

### User Experience Features
- **Responsive Design**: Works seamlessly on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Accessibility**: WCAG 2.1 compliant design
- **Performance**: Optimized for fast loading and smooth interactions
- **Offline Support**: Progressive Web App capabilities

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Development Setup
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and test thoroughly
4. Commit your changes: `git commit -m 'Add amazing feature'`
5. Push to the branch: `git push origin feature/amazing-feature`
6. Open a Pull Request with detailed description

### Code Guidelines
- Follow ESLint configuration
- Use Prettier for code formatting
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

---

**Built with ❤️ by rahull0328**