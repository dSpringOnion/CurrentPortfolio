# Modern Portfolio Website

A clean, professional portfolio website built with React, TypeScript, Tailwind CSS, and Node.js. Features a responsive design, smooth animations, dark/light theme toggle, and a working contact form.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Smooth Animations**: Powered by Framer Motion for delightful interactions
- **Projects Showcase**: Filterable portfolio with project details
- **Skills Section**: Visual representation of technical skills with progress bars
- **Contact Form**: Working contact form with Node.js backend
- **Modern Tech Stack**: React 19, TypeScript, Tailwind CSS, Node.js

## 🛠️ Tech Stack

### Frontend
- React 19 with TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- Lucide React for icons
- Context API for theme management

### Backend
- Node.js with Express
- TypeScript
- Nodemailer for email sending
- CORS for cross-origin requests

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Frontend Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm start
   ```

3. **Open your browser**
   Navigate to `http://localhost:3000`

### Backend Setup (for contact form)

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` file with your email configuration:
   ```env
   PORT=3001
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   CONTACT_EMAIL=your-contact@gmail.com
   ```

4. **Start the backend server**
   ```bash
   npm run dev
   ```

## 🚀 Quick Start

Run both frontend and backend:

```bash
# Terminal 1 - Frontend
npm start

# Terminal 2 - Backend
cd backend && npm run dev
```

## 🎨 Customization Guide

### Adding New Projects

Edit `src/components/Projects.tsx` and add to the `projects` array:

```typescript
{
  id: 7,
  title: "Your Project Name",
  description: "Project description...",
  technologies: ["React", "Node.js", "MongoDB"],
  category: "fullstack",
  image: "path-to-image",
  demoUrl: "https://demo.com",
  githubUrl: "https://github.com/...",
  featured: true
}
```

### Personal Information

Update the content in each component:
- `src/components/Hero.tsx` - Your introduction
- `src/components/Projects.tsx` - Your projects
- `src/components/Skills.tsx` - Your skills
- `src/components/Contact.tsx` - Your contact information

Built with ❤️ using React and TypeScript