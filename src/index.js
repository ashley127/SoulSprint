import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TaskPage from './pages/TaskPage';

import NotebooksPage from './pages/NotebooksPage';
import MeditationPage from './pages/MeditationPage';
import HabitTrackerPage from './pages/HabitTrackerPage';
import AffirmationsPage from './pages/AffirmationsPage';
import PodomoroPage from './pages/PodomoroPage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { ClerkProvider, SignedIn, SignedOut} from '@clerk/clerk-react'

const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  

  {
    path: "notebooks",
    element: <NotebooksPage/>,
  },

  {
    path: "meditation",
    element: <MeditationPage/>,
  },

  {
    path: "habit",
    element: <HabitTrackerPage/>,
  },

  {
    path: "affirmations",
    element: <AffirmationsPage/>,
  },

  {
    path: "podomoro",
    element: <PodomoroPage/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <SignedIn>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    </SignedIn>
    <SignedOut>

    </SignedOut>
  </ClerkProvider>

);