import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import NotebooksPage from './pages/NotebooksPage';
import MeditationPage from './pages/MeditationPage';
import HabitTrackerPage from './pages/HabitTrackerPage';
import AffirmationsPage from './pages/AffirmationsPage';
import PodomoroPage from './pages/PodomoroPage';
import ToDoPage from './pages/ToDoPage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import RootLayout from './layout/RootLayout';
import MainLayout from './layout/MainLayout';
import { Navigate } from 'react-router-dom';
import { SignIn, SignedIn, SignedOut, RedirectToSignIn, useUser} from '@clerk/clerk-react';


const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const ProtectedRoute = ({ children }) => {
  const { isSignedIn } = useUser();
  return isSignedIn ? children : <Navigate to="/sign-in" replace />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element:(
          <ProtectedRoute>
            <App/>
          </ProtectedRoute>
        ),
      },
      { path: "/todo", element: <ToDoPage />},
      { path: "/notebooks", element: <NotebooksPage /> },
      { path: "/meditation", element: <MeditationPage /> },
      { path: "/habit", element: <HabitTrackerPage /> },
      { path: "/affirmations", element: <AffirmationsPage /> },
      { path: "/podomoro", element: <PodomoroPage /> },
      { path: "/sign-in", element: (
        <SignedOut>
          <SignIn/>
        </SignedOut>
      )},
      {
        path: "*", // Catch-all route for undefined paths
        element: (
          <SignedOut>
            <RedirectToSignIn /> // Redirect to sign-in if the user is not logged in
          </SignedOut>
        ),
      },
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
);