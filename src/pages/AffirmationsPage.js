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

function AffirmationsPage() {
  return (
    <div className='flex'>
      <Sidebar> 
        <SidebarItem 
          icon = {<LayoutDashboard size = {20} />}
          text = "Dashboard"
        />
        <Link to ="notebooks">
          <SidebarItem icon = {<Book size = {20}/>} text = "Notebooks"/>
        </Link>

        <Link to ="meditation">
          <SidebarItem icon = {<Haze size = {20}/>} text = "Meditation" />
        </Link>

        <Link to ="habit">
          <SidebarItem icon = {<TrendingUp size = {20}/>} text = "Habit Tracker" alert />
        </Link>

        <Link to ="affirmations">
          <SidebarItem icon = {<Star size = {20}/>} text = "Affirmations" active/>
        </Link>

        <Link to ="podomoro">
          <SidebarItem icon = {<Gauge size = {20}/>} text = "Podomoro" />
        </Link>
        
        <hr className='my-3' />
        <SidebarItem icon = {<Settings size={20} />} text = "Settings" alert/>
        <SidebarItem icon = {<LifeBuoy size={20} />} text = "Help" />
      </Sidebar>
        <div className='todo-app'>
          <p>Affirmations Page</p>
        </div>
    </div>
  )
}

export default AffirmationsPage