import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import './Pioggia.otf';
import './Crimson.ttf';
import Sidebar, { SidebarItem } from './components/Sidebar';
import{
  LifeBuoy,
  LayoutDashboard,
  Settings,
  Book,
  Haze,
  Star,
  TrendingUp,
  Gauge,
} from "lucide-react"

import { Link } from "react-router-dom";




function App() {
  return (
    
    <TodoList/>

  );
}

export default App;