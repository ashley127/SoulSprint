import { Link, Outlet, useLocation } from 'react-router-dom'
import { ClerkProvider, SignedIn } from '@clerk/clerk-react'

import Sidebar, { SidebarItem } from '../components/Sidebar';
import{
  LifeBuoy,
  CheckSquare, 
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
  const location = useLocation();
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <main>
          <div className='flex'>
            <Sidebar> 
              <Link to = "/">
                <SidebarItem 
                  icon = {<LayoutDashboard size = {20} />}
                  text = "Dashboard"
                  active={location.pathname === '/'}
                />
              </Link>
              <Link to = "/todo">
                <SidebarItem 
                  icon = {<CheckSquare size = {20} />}
                  text = "To-Do List"
                  active={location.pathname === '/todo'}
                />
              </Link>
              <Link to ="/notebooks">
                <SidebarItem 
                  icon = {<Book size = {20}/>} 
                  text = "Notebooks"
                  active={location.pathname === '/notebooks'}
                />
              </Link>

              <Link to ="/meditation">
                <SidebarItem 
                  icon = {<Haze size = {20}/>} 
                  text = "Meditation" 
                  active={location.pathname === '/meditation'}
                  />
              </Link>

              <Link to ="/habit">
                <SidebarItem 
                  icon = {<TrendingUp size = {20}/>} 
                  text = "Habit Tracker" 
                  active={location.pathname === '/habit'}
                  alert 
                  />
              </Link>

              <Link to = "/affirmations">
                <SidebarItem 
                  icon = {<Star size = {20}/>} 
                  text = "Affirmations" 
                  active={location.pathname === '/affirmations'}
                  />
              </Link>

              <Link to ="/podomoro">
                <SidebarItem 
                  icon = {<Gauge size = {20}/>} 
                  text = "Podomoro" 
                  active={location.pathname === '/podomoro'}
                  />
              </Link>
              
              <hr className='my-3' />
              <SidebarItem 
                icon = {<Settings size={20} />} 
                text = "Settings" 
                alert/>
              <SidebarItem 
                icon = {<LifeBuoy size={20} />} 
                text = "Help" 
                />
            </Sidebar>
          
            <Outlet />
          
      </div>
      </main>
    </ClerkProvider>
  )
}