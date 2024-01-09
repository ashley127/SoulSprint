import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import NotebooksPage from './pages/NotebooksPage';
import MeditationPage from './pages/MeditationPage';
import HabitTrackerPage from './pages/HabitTrackerPage';
import AffirmationsPage from './pages/AffirmationsPage';
import PodomoroPage from './pages/PodomoroPage';
import DashboardPage from './pages/DashboardPage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import RootLayout from './layout/RootLayout';
import MainLayout from './layout/MainLayout';
import { SignIn } from '@clerk/clerk-react';


const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/notebooks", element: <NotebooksPage /> },
      { path: "/meditation", element: <MeditationPage /> },
      { path: "/habit", element: <HabitTrackerPage /> },
      { path: "/affirmations", element: <AffirmationsPage /> },
      { path: "/podomoro", element: <PodomoroPage /> },
      { path: "/sign-in", element: <SignIn/> },
      {
        element: <MainLayout />,
        path: "dashboard",
        children: [
          { path: "/dashboard", element: <DashboardPage /> },
        ]
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
);