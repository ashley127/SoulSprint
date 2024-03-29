import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react"
import { useContext, createContext, useState } from "react"
import logo from "../SoulSprint.png"
import { Link } from "react-router-dom"
import { UserButton, SignedIn, SignedOut, SignIn, useUser} from "@clerk/clerk-react"

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true)
  const { user } = useUser();
  const [activeItem, setActiveItem] = useState("Dashboard");
  
  const changeActiveItem = (itemName) =>{
    setActiveItem(itemName);
  };

  return (
    <aside className="h-screen sticky top-0">
      <nav className="h-full inline-flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src={logo}
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded, changeActiveItem, activeItem}}>
          <ul className="flex-1 px-3">
            {children}
          </ul>
          <div className="user-section mt-auto">
            <SignedOut>
            <div className="p-3">
              <SignIn />
            </div>
            </SignedOut>
            <SignedIn>
              <div className="user-info border-t p-3 flex items-center justify-between">
                <UserButton />
                <span>{user ? `${user.firstName} ${user.lastName}` : 'User'}</span>
              </div>
            </SignedIn>
          </div>
        </SidebarContext.Provider>
      </nav>
      </aside>
  )
}

export function SidebarItem({ icon, text, alert }) {
  const { expanded, changeActiveItem, activeItem} = useContext(SidebarContext)
  
  const handleClick = () => {
    changeActiveItem(text);
  }

  const isActive = activeItem === text;

  return (
    <li
      onClick={handleClick}
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          isActive
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-emerald-500 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  )
}