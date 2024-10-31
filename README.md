# E-commerce Platform

A full-stack e-commerce platform built with the MERN stack (MongoDB, Express.js, React, Node.js).

## Features

- User authentication with JWT
- Product catalog with search and filtering
- Shopping cart with persistence
- Order history
- Admin dashboard
- Image upload functionality
- Stripe payment integration

## Tech Stack

- Frontend:
  - React
  - Redux Toolkit
  - Tailwind CSS
  - Axios
  - Stripe Elements

- Backend:
  - Node.js
  - Express.js
  - MongoDB
  - JWT Authentication
  - Multer for file uploads

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Git
- Stripe account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/e-commerce.git
cd e-commerce
```

2. Install frontend dependencies:
```bash
cd frontend
npm install
```

3. Install backend dependencies:
```bash
cd ../backend
npm install
```

4. Set up environment variables:
   - Create `.env.local` in frontend directory
   - Create `.env` in backend directory
   - Add necessary environment variables as shown in the configuration section

5. Start the development servers:

Frontend:
```bash
cd frontend
npm start
```

Backend:
```bash
cd backend
npm run dev
```

## Deployment

### Frontend Deployment (Vercel)

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Configure the environment variables in Vercel
4. Deploy

### Backend Deployment (Vercel)

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Configure the environment variables in Vercel
4. Deploy

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details
