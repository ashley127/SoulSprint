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


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: "task",
    element: <TaskPage/>,
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
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);