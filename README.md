# Amazon Clone

A full-stack e-commerce web application that replicates core Amazon functionality, built with modern web technologies and deployed on cloud platforms.

## 🚀 Live Demo

**Frontend**: [Deployed on Netlify](https://meti-amazon-clone.netlify.app/)
**Backend**: Powered by Firebase

## 📋 Table of Contents

- Features
- Tech Stack
- Architecture
- Installation
- Environment Variables
- Usage
- Deployment
- API Documentation
- Contributing
- License

## ✨ Features

- **User Authentication**: Sign up, login, and logout functionality
- **Product Catalog**: Browse products with search and filtering capabilities
- **Shopping Cart**: Add/remove items, update quantities
- **Checkout Process**: Secure payment processing
- **Order Management**: View order history and tracking
- **User Profile**: Manage personal information and addresses
- **Admin Panel**: Product management and inventory control
- **Responsive Design**: Optimized for desktop and mobile devices
- **Real-time Updates**: Live inventory and order status updates

## 🛠 Tech Stack

### Frontend
- **Framework**: React.js
- **Styling**: CSS
- **State Management**:Context API 
- **HTTP Client**: Axios
- **Deployment**: Netlify

### Backend
- **Platform**: Firebase
- **Database**: Firestore
- **Authentication**: Firebase Auth
- **Storage**: Firebase Storage
- **Functions**: Firebase Cloud Functions

### Additional Tools
- **Version Control**: Git & GitHub
- **Package Manager**: npm 
- **Build Tool**: Vite

## 🏗 Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Firebase      │    │   External      │
│   (Netlify)     │◄──►│   Backend       │◄──►│   Services      │
│                 │    │                 │    │                 │
│ • React App     │    │ • Firestore DB  │    │ • Payment API   │
│ • User Interface│    │ • Auth Service  │    │                 |
│ • State Mgmt    │    │ • Cloud Funcs   │    │                 |
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 🚀 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm
- Firebase account
- Netlify account

### Clone the Repository
```bash
git clone https://github.com/meti21/Amazon_Clone.git
cd AmazonClone
```

### Install Dependencies
```bash
# Install frontend dependencies
npm install

```

### Firebase Setup
1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication, Firestore Database, and Storage
3. Download the Firebase config file
4. Initialize Firebase in your project:

```bash
npm install -g firebase-tools
firebase login
firebase init
```

## 🔧 Environment Variables

Create a `.env` file in your root directory with the following Firebase configuration:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# Stripe Payment Integration
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

> **Note**: This project uses Vite environment variables (prefixed with `VITE_`). Make sure to get your Firebase config values from your Firebase Console under Project Settings.

### Firebase Services Used
- **Authentication**: User sign-up, login, and logout
- **Firestore Database**: Product data, user profiles, and order management
- **Storage**: Product images and user uploads
- **Functions**: Server-side logic and payment processing

## 💻 Usage

### Prerequisites
- Node.js (v16 or higher)
- npm package manager
- Firebase account with project setup
- Stripe account for payment processing

### Development
```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# The app will open at http://localhost:5173
```

### Firebase Setup
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication, Firestore Database, Storage, and Functions
3. Copy your Firebase config from Project Settings
4. Update your `.env` file with the Firebase configuration values

### Stripe Setup
1. Create a Stripe account at [Stripe Dashboard](https://dashboard.stripe.com/)
2. Get your publishable key from the API keys section
3. Add your Stripe public key to the `.env` file

### Building for Production
```bash
# Create production build
npm run build

# Preview production build locally
npm run preview

# The preview will be available at http://localhost:4173
```

## 🚀 Deployment

### Frontend Deployment (Netlify)
1. **Build Setup**:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18 or higher

2. **Environment Variables** (Add these in Netlify Dashboard):
   ```
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project_id.firebasestorage.app
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
   ```

3. **Deployment Steps**:
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Add environment variables in Netlify dashboard
   - Enable automatic deployments on push to main branch

### Backend Deployment (Firebase)
```bash
# Install Firebase CLI globally
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase in your project
firebase init

# Deploy Firebase Functions and Firestore rules
firebase deploy

# Deploy only functions
firebase deploy --only functions

# Deploy only Firestore rules and indexes
firebase deploy --only firestore
```

### Deployment Checklist
- [ ] Firebase project configured with Authentication, Firestore, Storage, and Functions
- [ ] Stripe account set up with API keys
- [ ] Environment variables added to Netlify
- [ ] Firebase security rules configured
- [ ] Netlify build settings configured
- [ ] Domain configured (if using custom domain)

## 🔥 Firebase Configuration

Your Firebase setup includes:

```javascript
// Firebase services configuration
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
```
## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the General  License

## 🙏 Acknowledgments

- Design inspiration from Amazon
- Firebase for backend services
- Netlify for frontend hosting
- Open source libraries and tools used

## 📧 Contact

Meti Tesfamichael

Project Link: [(https://github.com/meti21/Amazon_Clone.git)]

---

⭐ Don't forget to give the project a star if you found it helpful!