import React from 'react'
import Sidebar, { SidebarItem } from '../components/Sidebar';
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
import MainLayout from '../layout/MainLayout';

function AffirmationsPage() {
  return (
    <MainLayout>
      <p>Affirmations Page</p>
    </MainLayout> 
  )
}

export default AffirmationsPage