import { Link, Outlet } from 'react-router-dom'
import { ClerkProvider, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'

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


const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
          <SignedIn>
            <UserButton afterSignOutUrl='/sign-in' />
          </SignedIn>
      <main>
          <div className='flex'>
            <Sidebar> 
              <SidebarItem 
                icon = {<LayoutDashboard size = {20} />}
                text = "Dashboard"
                active
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

              <Link to = "affirmations">
                <SidebarItem icon = {<Star size = {20}/>} text = "Affirmations" />
              </Link>

              <Link to ="podomoro">
                <SidebarItem icon = {<Gauge size = {20}/>} text = "Podomoro" />
              </Link>
              
              <hr className='my-3' />
              <SidebarItem icon = {<Settings size={20} />} text = "Settings" alert/>
              <SidebarItem icon = {<LifeBuoy size={20} />} text = "Help" />
            </Sidebar>
          <div className='todo-app'>
            <Outlet />
          </div>
      </div>
      </main>
    </ClerkProvider>
  )
}