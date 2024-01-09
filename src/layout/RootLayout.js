import { Link, Outlet } from 'react-router-dom'
import { ClerkProvider, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'

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
        <Outlet />
      </main>
    </ClerkProvider>
  )
}